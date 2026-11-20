const passwordDisplay = document.getElementById("passwordDisplay");
const passwordStatus = document.getElementById("passwordStatus");
const authenticateButton = document.getElementById("authenticateButton");

const passwordLength = 16;
let typedCharacters = 0;

function typePassword() {
  if (typedCharacters < passwordLength) {
    typedCharacters++;
    passwordDisplay.textContent = ".".repeat(typedCharacters);
    setTimeout (typePassword,85);
  } else {
    passwordStatus.textContent = "CREDENTIALS ENTERED";
    authenticateButton.disabled = false;
  }
}

setTimeout(typePassword, 650);
const loginForm = document.getElementById("loginForm");
const authSequence = document.getElementById("authSequence");

authenticateButton.addEventListener("click", function () {
  authenticateButton.disabled = true;
  loginForm.classList.add("hidden");
  authSequence.classList.remove("hidden");

function runAuthenticationSequence() {
  const deviceStatus = document.getElementById("deviceStatus");
  const biometricStatus = document.getElementById("biometricStatus");
  const clearanceStatus = document.getElementById("clearanceStatus");
  const accessStatus = document.getElementById("accessStatus");

  setTimeout(function () {
    deviceStatus.textContent = "RECOGNIZED";
  }, 500);

    setTimeout(function () {
    biometricStatus.textContent = "VERIFIED";
  }, 1050);

  setTimeout(function () {
    clearanceStatus.textContent = "ALPHA";
  }, 1600);

   setTimeout(function () {
    accessStatus.textContent = "GRANTED";
  }, 2150);
  
});
