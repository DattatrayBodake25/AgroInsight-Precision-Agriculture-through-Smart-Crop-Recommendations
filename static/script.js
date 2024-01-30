document.addEventListener('DOMContentLoaded', function () {
    function predictCrop() {
        // Display a loading message
        document.getElementById('predictionResult').innerHTML = 'Loading...';

        // Extract form data
        const formData = new FormData();
        formData.append('nitrogen', document.getElementById('nitrogen').value);
        formData.append('phosphorus', document.getElementById('phosphorus').value);
        formData.append('potassium', document.getElementById('potassium').value);
        formData.append('temperature', document.getElementById('temperature').value);
        formData.append('humidity', document.getElementById('humidity').value);
        formData.append('ph', document.getElementById('ph').value);
        formData.append('rainfall', document.getElementById('rainfall').value);

        // Make a POST request to the /predict endpoint
        fetch('/predict', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Display the prediction result
            document.getElementById('predictionResult').innerHTML = `Recommended Crop: ${data.predictedCrop}`;

            // Update background image based on the prediction result
            const body = document.body;
            const prediction = data.predictedCrop.toLowerCase();
            body.style.backgroundImage = `url('/static/${prediction}.jpg')`;  // Replace '.jpg' with the actual extension of your images
        })
        .catch(error => {
            // Display an error message
            document.getElementById('predictionResult').innerHTML = `Error: ${error}`;
        });
    }

    // Assign the predictCrop function to the button click event
    document.querySelector('button').addEventListener('click', predictCrop);
});




















// document.addEventListener('DOMContentLoaded', function () {
//     function predictCrop() {
//         // Display a loading message
//         document.getElementById('predictionResult').innerHTML = 'Loading...';

//         // Extract form data
//         const formData = new FormData();
//         formData.append('nitrogen', document.getElementById('nitrogen').value);
//         formData.append('phosphorus', document.getElementById('phosphorus').value);
//         formData.append('potassium', document.getElementById('potassium').value);
//         formData.append('temperature', document.getElementById('temperature').value);
//         formData.append('humidity', document.getElementById('humidity').value);
//         formData.append('ph', document.getElementById('ph').value);
//         formData.append('rainfall', document.getElementById('rainfall').value);

//         // Make a POST request to the /predict endpoint
//         fetch('/predict', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Display the prediction result
//             document.getElementById('predictionResult').innerHTML = `Recommended Crop: ${data.predictedCrop}`;
//         })
//         .catch(error => {
//             // Display an error message
//             document.getElementById('predictionResult').innerHTML = `Error: ${error}`;
//         });
//     }

//     // Assign the predictCrop function to the button click event
//     document.querySelector('button').addEventListener('click', predictCrop);
// });
