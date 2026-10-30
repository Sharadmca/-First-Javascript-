document.getElementById("registerForm").addEventListener("submit", function(event){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 3){
        alert("Name must contain at least 3 characters");
        event.preventDefault();
        return;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email address");
        event.preventDefault();
        return;
    }

    if(!/^[1-9][0-9]{9}$/.test(mobile)){
        alert("Mobile number must be 10 digits and should not start with 0");
        event.preventDefault();
        return;
    }

    if(password.length < 8){
        alert("Password must contain at least 8 characters");
        event.preventDefault();
        return;
    }

    if(password != confirmPassword){
        alert("Passwords do not match");
        event.preventDefault();
        return;
    }
    if (gender == null) {
    alert("Please select a gender");
    event.preventDefault();
    return;
}

    alert("Registration Successful");
});