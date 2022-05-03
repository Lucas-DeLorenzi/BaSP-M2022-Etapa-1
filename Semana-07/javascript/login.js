var emailInput = document.getElementById("login-email");
var passwordInput = document.getElementById("login-password");
var invalidEmail = document.querySelector(".invalid-email");
var invalidPass = document.querySelector(".invalid-pass");
var btnLogin = document.querySelector(".login-form button");
var modal = document.createElement("div");
var modalContent = document.createElement("div");
var modalTitle = document.createElement("h2");
var modalText1 = document.createElement("p");
var modalText2 = document.createElement("p");
var btnModal = document.createElement("button");
modal.setAttribute("class", "modal");
modalContent.setAttribute("class", "modal-content");
body = document.querySelector("body");
body.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalText1);
modalContent.appendChild(modalText2);
modalContent.appendChild(btnModal);
btnModal.setAttribute("class", "btn-modal");
btnModal.innerText = "OK";

var letters = "abcdefghijklmnñopqrstuvwxyz";
var numbers = "0123456789";

emailInput.addEventListener("blur", validateLoginEmail);
emailInput.addEventListener("focus", onFocusEmail);
passwordInput.addEventListener("blur", validateLoginPass);
passwordInput.addEventListener("focus", onFocusPass);
btnLogin.addEventListener("click", checkLogin);
btnModal.addEventListener("click", closeModal);

function validateLoginEmail() {
  if (emailInput.value == "") {
    emailInput.removeAttribute("style");
    invalidEmail.innerText = "* required field!";
  } else if (!validateEmail(emailInput.value)) {
    emailInput.style.border = "#D12500 1.5px solid";
    invalidEmail.innerText = "Enter a valid email!";
  } else {
    emailInput.style.border = "green 1.5px solid";
    invalidEmail.innerText = "";
  }
}

function validateLoginPass() {
  if (passwordInput.value == "") {
    passwordInput.removeAttribute("style");
    invalidPass.innerText = "* required field!";
  } else if (!validateAlphanumeric(passwordInput.value)) {
    passwordInput.style.border = "#D12500 1.5px solid";
    invalidPass.innerText = "Password must contains numbers and letters!";
  } else {
    passwordInput.style.border = "green 1.5px solid";
    invalidPass.innerText = "";
  }
}

function onFocusEmail() {
  emailInput.style.border = "#373867 1.5px solid";
  invalidEmail.innerText = "";
}

function onFocusPass() {
  passwordInput.style.border = "#373867 1.5px solid";
  invalidPass.innerText = "";
}

function checkLogin(e) {
  e.preventDefault();
  if (
    validateAlphanumeric(passwordInput.value) &&
    validateEmail(emailInput.value)
  ) {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modalTitle.style.color = "green";
    modalTitle.innerText = "Successful sign in!";
    modalText1.innerText = "Email: " + emailInput.value;
    modalText2.innerText = "Password: " + passwordInput.value;
  } else {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modalTitle.style.color = "red";
    modalTitle.innerText = "Sign in denied!";
    modalText1.innerText = "Incorrect email or password ";
    modalText2.innerText = "";
  }
}

function validateEmail(email) {
  var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return re.test(email);
}

function validateAlphanumeric(pass) {
  var validateLetters = 0;
  var validateNumbers = 0;
  var validateBoth = true;
  pass
    .toLowerCase()
    .split("")
    .forEach(function (element) {
      if (letters.includes(element)) validateLetters++;
      if (numbers.includes(element)) validateNumbers++;
      if (!letters.includes(element) && !numbers.includes(element)) {
        validateBoth = false;
      }
    });
  return validateLetters && validateNumbers && validateBoth;
}

function closeModal() {
  modal.style.display = "none";
}
