var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var dni = document.querySelector("#dni");
var dateOfBirth = document.querySelector("#dateof-birth");
var phone = document.querySelector("#phone");
var address = document.querySelector("#address");
var place = document.querySelector("#place");
var zipCode = document.querySelector("#zip-code");
var signupEmail = document.querySelector("#signup-email");
var signupPass = document.querySelector("#signup-password");
var confirmSignupPass = document.querySelector("#confirm-signup-pass");
var invalidName = document.querySelector(".invalid-fname");
var invalidLastName = document.querySelector(".invalid-last-name");
var invalidDni = document.querySelector(".invalid-dni");
var invalidBirth = document.querySelector(".invalid-birth");
var invalidPhone = document.querySelector(".invalid-phone");
var invalidAddress = document.querySelector(".invalid-address");
var invalidPlace = document.querySelector(".invalid-place");
var invalidZip = document.querySelector(".invalid-zip");
var invalidSignupEmail = document.querySelector(".invalid-signup-email");
var invalidSignupPass = document.querySelector(".invalid-signup-pass");
var invalidConfirmPass = document.querySelector(".invalid-confirm-pass");

var validArray = [
  firstName.value,
  lastName.value,
  dni.value,
  dateOfBirth.value,
  phone.value,
  address.value,
  place.value,
  zipCode.value,
  signupEmail.value,
  signupPass.value,
  confirmSignupPass.value,
];

var btnSignup = document.querySelector(".signup-form button");
var modal = document.createElement("div");
var modalContent = document.createElement("div");
var modalTitle = document.createElement("h2");
modal.setAttribute("class", "modal");
modalContent.setAttribute("class", "modal-content");
body = document.querySelector("body");
body.appendChild(modal);
modalContent.appendChild(modalTitle);
modal.appendChild(modalContent);
for (var i = 0; i < 11; i++) {
  var modalText = document.createElement("p");
  modalContent.appendChild(modalText);
  modalText.setAttribute("class", "text");
}
var btnModal = document.createElement("button");
modalContent.appendChild(btnModal);
btnModal.setAttribute("class", "btn-modal");
btnModal.innerText = 'OK';

var letters = "abcdefghijklmnñopqrstuvwxyz";
var numbers = "0123456789";

firstName.addEventListener("blur", validateName);
lastName.addEventListener("blur", validateLastName);
dni.addEventListener("blur", validateDni);
dateOfBirth.addEventListener("blur", validateDateOfBirth);
phone.addEventListener("blur", validatePhone);
address.addEventListener("blur", validateAddress);
place.addEventListener("blur", validatePlace);
zipCode.addEventListener("blur", validateZipCode);
signupEmail.addEventListener("blur", validateSignupEmail);
signupPass.addEventListener("blur", validateSignupPass);
confirmSignupPass.addEventListener("blur", validateConfirmSignupPass);

firstName.addEventListener("focus", onFocusFirstName);
lastName.addEventListener("focus", onFocusLastName);
dni.addEventListener("focus", onFocusDni);
dateOfBirth.addEventListener("focus", onFocusBirth);
phone.addEventListener("focus", onFocusPhone);
address.addEventListener("focus", onFocusAddress);
place.addEventListener("focus", onFocusPlace);
zipCode.addEventListener("focus", onFocusZip);
signupEmail.addEventListener("focus", onFocusSignupEmail);
signupPass.addEventListener("focus", onFocusSignupPass);
confirmSignupPass.addEventListener("focus", onFocusConfirmPass);

btnSignup.addEventListener("click", checkSignup);
btnModal.addEventListener("click", closeModal);

function onFocusFirstName() {
  onFocusElement(firstName, invalidName);
}

function onFocusLastName() {
  onFocusElement(lastName, invalidLastName);
}

function onFocusDni() {
  onFocusElement(dni, invalidDni);
}

function onFocusBirth() {
  onFocusElement(dateOfBirth, invalidBirth);
}

function onFocusPhone() {
  onFocusElement(phone, invalidPhone);
}

function onFocusAddress() {
  onFocusElement(address, invalidAddress);
}

function onFocusPlace() {
  onFocusElement(place, invalidPlace);
}

function onFocusZip() {
  onFocusElement(zipCode, invalidZip);
}

function onFocusSignupEmail() {
  onFocusElement(signupEmail, invalidSignupEmail);
}

function onFocusSignupPass() {
  onFocusElement(signupPass, invalidSignupPass);
}

function onFocusConfirmPass() {
  onFocusElement(confirmSignupPass, invalidConfirmPass);
}

function validateName() {
  validate(
    firstName,
    invalidName,
    validateNameLastName,
    "name. It must contain at least 4 letters"
  );
  validArray[0] = firstName.value;
}

function validateLastName() {
  validate(
    lastName,
    invalidLastName,
    validateNameLastName,
    "last name. It must contain at least 4 letters"
  );
  validArray[1] = lastName.value;
}

function validateNameLastName(letters) {
  return allLetters(letters) && letters.length > 2;
}

function validateDni() {
  validate(
    dni,
    invalidDni,
    validateDniLength,
    "DNI. It must contain at least 8 numbers"
  );
  validArray[2] = dni.value;
}

function validateDniLength(numbers) {
  return allNumbers(numbers) && numbers.length > 7;
}

console.log((splitDate = dateOfBirth.value.split("/")));

function validateDateOfBirth() {
  validate(
    dateOfBirth,
    invalidBirth,
    validateDateFormat,
    "format. Must be dd/mm/aaaa. Use slashes and possible numbers"
  );
  validArray[3] = dateOfBirth.value;
}

function validateDateFormat(date) {
  splitDate = date.split("/");
  return (
    splitDate.length == 3 &&
    allNumbers(splitDate[0]) &&
    allNumbers(splitDate[1]) &&
    allNumbers(splitDate[2]) &&
    splitDate[0].length == 2 &&
    splitDate[1].length == 2 &&
    splitDate[2].length == 4 &&
    splitDate[0] < 32 &&
    splitDate[0] > 0 &&
    splitDate[1] < 13 &&
    splitDate[1] > 0 &&
    splitDate[2] > 1941 &&
    splitDate[2] < 2023
  );
}

function validatePhone() {
  validate(
    phone,
    invalidPhone,
    validatePhoneLength,
    "phone. It must contain 10 numbers"
  );
  validArray[4] = phone.value;
}

function validatePhoneLength(phone) {
  return allNumbers(phone) && phone.length == 10;
}

function validateAddress() {
  validate(
    address,
    invalidAddress,
    formatAddress,
    "address. Must contain at least 5 letters, a blank space and numbers"
  );
  validArray[5] = address.value;
}

function formatAddress(addr) {
  splitAddress = addr.split(" ");
  return (
    splitAddress.length == 2 &&
    allLetters(splitAddress[0]) &&
    splitAddress[0].length >= 5 &&
    allNumbers(splitAddress[1])
  );
}

function validatePlace() {
  validate(
    place,
    invalidPlace,
    placeLength,
    "place. It must contain at least 4 alphanumeric chars"
  );
  validArray[6] = place.value;
}

function placeLength(alpha) {
  return validateAlphanumeric(alpha) && alpha.length > 3;
}

function validateZipCode() {
  validate(
    zipCode,
    invalidZip,
    zipCodeLength,
    "zip code. It must contain between 4 and 5 numbers"
  );
  validArray[7] = zipCode.value;
}

function zipCodeLength(zip) {
  return allNumbers(zip) && zip.length >= 4 && zip.length <= 5;
}

function validateSignupEmail() {
  validate(signupEmail, invalidSignupEmail, validateEmail, "email format");
  validArray[8] = signupEmail.value;
}

function validateSignupPass() {
  validate(
    signupPass,
    invalidSignupPass,
    passwordLength,
    "password. It must contain at least 8 alphanumeric chars"
  );
  validArray[9] = signupPass.value;
}

function passwordLength(pass) {
  return validateAlphanumericPassword(pass) && pass.length > 7;
}

function validateConfirmSignupPass() {
  validate(
    confirmSignupPass,
    invalidConfirmPass,
    comparePass,
    "confirm. It must be equal to password"
  );
  validArray[10] = confirmSignupPass.value;
}

function comparePass(pass) {
  return pass == signupPass.value;
}

function validate(element, invalidElement, validateFunc, typeElement) {
  if (element.value == "") {
    element.style.border = "#D12500 2px solid";
    invalidElement.innerText = "* required field!";
  } else if (!validateFunc(element.value)) {
    element.style.border = "#D12500 2px solid";
    invalidElement.innerText = "Enter a valid " + typeElement + "!";
  } else {
    element.style.border = "green 2px solid";
    invalidElement.innerText = " ";
  }
}

function onFocusElement(element, invalidElement) {
  element.style.border = "#373867 2px solid";
  invalidElement.innerText = "";
}

function checkSignup(e) {
  e.preventDefault();

  var invalidsArray = [
    invalidName.innerHTML,
    invalidLastName.innerHTML,
    invalidDni.innerHTML,
    invalidBirth.innerHTML,
    invalidPhone.innerHTML,
    invalidAddress.innerHTML,
    invalidPlace.innerHTML,
    invalidZip.innerHTML,
    invalidSignupEmail.innerHTML,
    invalidSignupPass.innerHTML,
    invalidConfirmPass.innerHTML,
  ];

  var fields = [
    "Name: ",
    "Last Name: ",
    "DNI: ",
    "Date of birth: ",
    "Phone: ",
    "Address: ",
    "Place: ",
    "Zip Code: ",
    "Email: ",
    "Password: ",
    "Password Confirm: ",
  ];

  if (validateFields(invalidsArray) == "ok") {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modalTitle.style.color = "green";
    modalTitle.innerText = "Successful sign in!";
    var modalTxt = document.querySelectorAll(".text");
    modalTxt.forEach(function (element) {
      element.style.display = "inherit";
      element.style.color = "inherit";
    });
    for (var i = 0; i < modalTxt.length; i++) {
      modalTxt[i].innerText = fields[i] + validArray[i];
    }
  } else if (validateFields(invalidsArray) == "unfilled") {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modalTitle.style.color = "red";
    modalTitle.innerText = "Error! Unfilled fields!";
    var modalTxt = document.querySelectorAll(".text");
    modalTxt.forEach(function (element) {
      element.style.display = "none";
    });
  } else {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modalTitle.style.color = "red";
    modalTitle.innerText = "Sign in denied!";
    var modalTxt = document.querySelectorAll(".text");
    modalTxt.forEach(function (element) {
      element.style.display = "inherit";
    });
    for (var i = 0; i < modalTxt.length; i++) {
      if (invalidsArray[i] != " " && invalidsArray[i] != "") {
        modalTxt[i].innerText = fields[i] + invalidsArray[i];
      } else if (invalidsArray[i] == "") {
        modalTxt[i].innerText = fields[i] + "* required field!";
      } else {
        modalTxt[i].style.display = "none";
      }
    }
  }
}

function validateFields(invalidsArray) {
  var ok = 0;
  var unfilled = 0;
  invalidsArray.forEach(function (element) {
    if (element == " ") {
      ok++;
    } else if (element == "") {
      unfilled++;
    }
  });
  if (ok == invalidsArray.length) {
    return "ok";
  } else if (unfilled == invalidsArray.length) {
    return "unfilled";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function allLetters(name) {
  var lettersOk = 0;
  name
    .toLowerCase()
    .split("")
    .forEach(function (element) {
      if (letters.includes(element)) {
        lettersOk++;
      }
    });
  return lettersOk == name.length;
}

function allNumbers(testNumbers) {
  var numbersOk = 0;
  testNumbers.split("").forEach(function (element) {
    if (numbers.includes(element)) {
      numbersOk++;
    }
  });
  return testNumbers.length == numbersOk;
}

function validateAlphanumeric(alpha) {
  var validateLetters = 0;
  var validateNumbers = 0;
  var validateBoth = true;
  alpha
    .toLowerCase()
    .split("")
    .forEach(function (element) {
      if (letters.includes(element)) validateLetters++;
      if (numbers.includes(element)) validateNumbers++;
      if (!letters.includes(element) && !numbers.includes(element)) {
        validateBoth = false;
      }
    });
  return (validateLetters || validateNumbers) && validateBoth;
}

function validateAlphanumericPassword(alpha) {
  var validateLetters = 0;
  var validateNumbers = 0;
  var validateBoth = true;
  alpha
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

function validateEmail(email) {
  var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return re.test(email);
}
