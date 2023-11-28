function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass1").value;
    var confirmPassword = document.getElementById("pass2").value;
    
    if(
        firstName === "" ||
        lastName === ""  ||
        age === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please Fill all the fields !")
        return false
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false
        
    } 
    else if (parseInt(age) < 18) {
        alert("Age must be greater than 18");
        return false
    }
    else {
        alert("Form submitted successfully");
        return true
    }
}