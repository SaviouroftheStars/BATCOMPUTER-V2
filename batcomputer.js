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
