document.getElementById('submit-btn').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    const userMessage = document.getElementById('error-message');

    if (userEmail == "mamun@gmail.com" && userPassword == "mamun8893") {
        window.location.href = "banking.html";
    } else {
        userMessage.innerText = "Please Enter Valid user name & passowrd"
    }

})