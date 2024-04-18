
    document.getElementById('submitButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch form values
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        };

        // Do something with the form data (e.g., send it to a server)
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);

        
    });
