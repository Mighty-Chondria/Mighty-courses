document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    var form = document.getElementById('loginForm');
    
    if (form) {
        console.log("Form found");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Form submit event triggered");
    
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
    
            console.log(`Email: ${email}`);
    
            if (!email || !password) {
                alert('Email and password are required.');
                return;
            }
    
            if (firebase.auth) {
                console.log("Firebase Auth is available");

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signed in successfully
                        var user = userCredential.user;
                        alert('Login successful!');
                        window.location.href = 'home.html'; // Redirect to home page
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
