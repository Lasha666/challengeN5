
        // Function to change button text
        function changeText(button) {
            button.innerText = "Clicked!";
        }

        // Function to handle form submission
        function submitForm(event) {
            event.preventDefault(); // Prevent form from submitting normally

            // Get values from form inputs
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var number = document.getElementById('number').value;

            // Display alert with form data
            alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nPhone Number: " + number);

            // Optionally, redirect to another page
            window.location.href = "index2.html"; // Redirect to index2.html
        }
