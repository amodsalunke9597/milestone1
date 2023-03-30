const inputPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const print = document.getElementById('print');

function updatePrint() {
  if (inputPassword.value === '' || confirmPassword.value === '') {
    print.textContent = "Please enter a password in both fields.";
  } else if (inputPassword.value === confirmPassword.value) {
    print.textContent = "password matched";
  } else {
    print.textContent = "password mismatched";
  }
}

inputPassword.addEventListener('input', updatePrint);
confirmPassword.addEventListener('input', updatePrint);
