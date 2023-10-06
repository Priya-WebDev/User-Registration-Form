const form=document.getElementById("formCont");
   const username =document.getElementById("username");
   const phonenumber = document.getElementById('phonenumber');
   const email = document.getElementById('email');
   const pwd = document.getElementById('pwd');
   const confirmpwd = document.getElementById('confirmpwd');
  

   document.addEventListener('DOMContentLoaded', () => {
   form.addEventListener('submit',(e)=>{
    console.log("event occured");
 
    console.log(username.value);
    if (username.value.trim() === "") {
            e.preventDefault();
            // Add error message to the element with id "nameError"
            document.getElementById("nameError").textContent = "Please enter a username.";
            document.getElementById("nameError").style.border =".1rem solid red";
        } else {
            // Clear the error message
            document.getElementById("nameError").style.border ="";
            document.getElementById("nameError").textContent = "";
            console.log("success");
           
        }

        if (phonenumber.value.trim().toString().length > 0 && phonenumber.value.trim().toString().length === 10) {
            // Clear the error message
            document.getElementById("numberError").textContent = "";
            document.getElementById("numberError").style.border ="";
            console.log("success in phone number");
        } else {
            e.preventDefault();
            // Add error message to the element with id "numberError"
            document.getElementById("numberError").textContent = "Please enter a valid phone number with 10 digits.";
            document.getElementById("numberError").style.border =".1rem solid red";
            console.log("error in phone number");
        }

          // Regular expression pattern for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const emailValue=email.value.trim();
        if (!emailPattern.test(emailValue)) {
            e.preventDefault();
            // Add error message to the element with id "emailError"
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            document.getElementById("emailError").style.border =".1rem solid red";
            console.log("error in email");
        } else {
            // Clear the error message
            document.getElementById("emailError").textContent = "";
            document.getElementById("emailError").style.border ="";
            console.log("success in email");
        }

        // ...

        if (pwd.value.trim() === '') {
            e.preventDefault();
            // Add error message to the element with id "pwdError"
            document.getElementById("pwdError").textContent = "Please enter a password.";
            document.getElementById("pwdError").style.border =".1rem solid red";
        } else {
            // Clear the error message
            document.getElementById("pwdError").textContent = "";
            document.getElementById("pwdError").style.border ="";
            if (validatePassword(pwd.value.trim())) {
                console.log("success password");
            } else {
                e.preventDefault();
                // Add error message to the element with id "pwdError"
                document.getElementById("pwdError").textContent = "Password must contain at least 4 characters, including uppercase, lowercase, numbers, and special characters.";
                document.getElementById("pwdError").style.border =".1rem solid red";
               
                console.log("error in password");
            }
        }

        if (confirmpwd.value.trim() !== pwd.value.trim() ) {
            e.preventDefault();
            // Add error message to the element with id "confirmpwdError"
            document.getElementById("confirmpwdError").textContent = "Passwords do not match.";
            document.getElementById("confirmpwdError").style.border =".1rem solid red";
        } else {
            // Clear the error message
            document.getElementById("confirmpwdError").textContent = "";
            document.getElementById("confirmpwdError").style.border ="";
            console.log("password confirmed");
        }
 
  
});

});

function  validatePassword(password) {
  
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // Check if all conditions are met
    if (hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
        return true;
    }

    return false;
}