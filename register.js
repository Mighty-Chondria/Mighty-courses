document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    var form = document.getElementById('registerForm');

    if (form) {
        console.log("Form found");

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Form submit event triggered");

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

            if (!email || !password) {
                alert('Email and password are required.');
                return;
            }

            if (firebase.auth) {
                console.log("Firebase Auth is available");

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        console.log("User registered successfully");
                        var user = userCredential.user;
                        user.updateProfile({
                            displayName: name
                        }).then(() => {
                            alert('Registration successful!');
                            window.location.href = 'home.html'; // Redirect to login page
                        });
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.error(`Error: ${errorMessage}`);
                        alert(`Error: ${errorMessage}`);
                    });
            } else {
                console.error("Firebase Auth is not available");
                alert("Firebase Auth is not available. Please check your Firebase configuration.");
            }
        });
    } else {
        console.error("Form not found");
    }
});
