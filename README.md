# User-Registration-Form [visit my website](https://get-register.netlify.app/)

# Description:
This project consists of a web page designed for user registration. It allows users to input their information, including their name, phone number, email address, and password, and then submit the form for registration. Below is a breakdown of the key elements and features of the project:

# Title:
The web page has a title "REGISTRATION" displayed at the top, providing a clear indication of the purpose of the page.

# Form: 
The main content of the page is a form, enclosed within <form> tags. The form is used for collecting user data.

# Form Fields: 
There are several form fields for collecting user information:

+ Username: Users can input their name in the "USERNAME" field.
+ Phone Number: Users can input their phone number in the "PHONE NUMBER" field. It is designed to accept numeric input only.
+ Email: Users can input their email address in the "EMAIL" field. It includes basic email validation to ensure a valid email format.
+ Password: Users can input their password in the "PASSWORD" field. It enforces a minimum length of 4 characters and requires a mix of 
  uppercase, lowercase, numbers, and special characters.
+ Confirm Password: Users must confirm their password by entering it again in the "CONFIRM PASSWORD" field.
+ Error Messages: Each form field is associated with a corresponding error message container. These error messages will be displayed if 
  the user submits the form with invalid or missing information. The error messages are initially empty but will be populated 
  dynamically using JavaScript if validation fails.

+ Submit Button: The "SUBMIT" button allows users to submit their registration information. It occupies the full width of its container 
  and is styled with a blueviolet background.

# Script:
The project includes a JavaScript file (script.js) for handling form validation and interactivity. It ensures that users provide valid information before the form is submitted.

# Styling: 
The project includes some CSS styles for layout and visual presentation. It uses flexbox to create a responsive and visually appealing form layout.

Overall, this project serves as a user registration form with basic client-side validation to ensure that the provided information meets certain criteria. Users are guided with error messages if they make mistakes or leave required fields empty, helping to improve the user experience and data accuracy during the registration process.
