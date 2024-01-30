# AgroInsight-Precision-Agriculture-through-Smart-Crop-Recommendations
Dynamic Crop Recommendation System  An innovative web-based system that accurately predicts suitable crops based on environmental data using machine learning. Features a unique UI where the background image changes to match the predicted crop, enhancing user engagement.

# Crop Recommendation System

## Overview

The Crop Recommendation System is a web application designed to assist farmers in making informed decisions about crop selection based on various environmental factors. By leveraging machine learning, the system predicts the most suitable crops for a given set of input parameters, including nitrogen, phosphorus, potassium levels, temperature, humidity, pH, and rainfall.

## Features

- **Predictive Analysis:** Utilizes a Random Forest Classifier to provide accurate crop predictions.
- **User-Friendly Interface:** Web-based interface for easy interaction, accessible to farmers with minimal technical knowledge.
- **Environmental Parameter Input:** Allows users to input key environmental parameters to receive personalized crop recommendations.
- **High Accuracy:** The machine learning model has been trained on extensive datasets to ensure reliable predictions.

## Technologies Used

- **Python:** Backend development and machine learning model.
- **Flask:** Web framework for creating the application.
- **Scikit-learn:** Machine learning library for model development.
- **HTML, CSS, JavaScript:** Frontend development for the user interface.
- **Joblib:** Serialization of machine learning model.
- **Other dependencies:** Refer to `requirements.txt` for a comprehensive list.

## Getting Started

To run the Crop Recommendation System locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/crop-recommendation-system.git
   cd crop-recommendation-system
Install Dependencies:

bash
Copy code
pip install -r requirements.txt
Run the Application:

bash
Copy code
python app.py
Access the Application:

Open your web browser and navigate to http://127.0.0.1:5000.

Usage
Fill in Environmental Parameters:

Input the levels of nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall.
Click "Predict Crop":

Initiate the prediction process.
View Recommendations:

See the recommended crop based on the provided parameters.


Project Structure
├── static/
│   ├── style.css
│   ├── script.js
│   └── favicon.ico
├── templates/
│   └── index.html
├── app.py
├── random_forest_model.pkl
├── requirements.txt
└── README.md


Contributing
Contributions are welcome! If you find a bug or have an enhancement in mind, please open an issue or submit a pull request.
