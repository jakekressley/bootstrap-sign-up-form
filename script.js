let password = document.querySelector('#user-password')
let confirmPassword = document.querySelector('#confirm-password')

function validatePassword () {
    if(password.value != confirmPassword.value) {
        confirmPassword.title = "Passwords do not Match"
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;