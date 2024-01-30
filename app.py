from flask import Flask, render_template, request, jsonify
from joblib import load

app = Flask(__name__)

# Load the trained Random Forest model
model_path = r"C:\Users\datta\Downloads\Crop_Recommendation\random_forest_model.pkl"
model = load(model_path)

# Load the saved LabelEncoder
label_encoder_path = r"C:\Users\datta\Downloads\Crop_Recommendation\label_encoder.pkl"
label_encoder = load(label_encoder_path)

# Render the home page
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the form
        temperature = float(request.form['temperature'])
        humidity = float(request.form['humidity'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])
        nitrogen = int(request.form['nitrogen'])
        phosphorus = int(request.form['phosphorus'])
        potassium = int(request.form['potassium'])
        
        # Make predictions
        predictions = model.predict([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])

        # Decode the prediction to get the crop name
        predicted_crop = label_encoder.inverse_transform(predictions)[0]

        return jsonify({'predictedCrop': predicted_crop})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)