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
  runAuthenticationSequence();
});

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

  setTimeout(function () {
    const bootSequence = document.getElementById("bootSequence");
    bootSequence.classList.remove("hidden");
  }, 2600);

  setTimeout(function () {
    const loginScreen = document.getElementById("loginScreen");
    const archiveScreen = document.getElementById("archiveScreen");

    loginScreen.classList.add("hidden");
    archiveScreen.classList.remove("hidden");
    renderLogs();
  }, 4000);
}

const reportDates = {
  4: "12/05/2014",
  7: "12/12/2014",
  19: "01/01/2015",
  23: "02/08/2015",
  56: "04/01/2015"
};

function renderLogs() {
  const contentArea = document.getElementById("contentArea");
  let rows = "";

  for (let number = 1; number <= 113; number++) {
    const fileName = `REPORT_${String(number).padStart(2, "0")}`;
    const date = reportDates[number];
    const status = date ? "AVAILABLE" : "RESTRICTED";

    rows += `
      <tr class ="${date ? "file-open" : "file-disabled"}">
        <td>${fileName}</td>
        <td>${date || "--/--/----"}</td>
        <td>${status}</td>
      </tr>
    `;
  }

  contentArea.innerHTML = `
    <h1 class="archive-title">EXPEDITION LOGS</h1>
    <p class="archive-meta">113 FILES | 5 AVAILABLE DURING CURRENT SESSION</p>
    <table class="file-table">
      <thead>
        <tr>
          <th>FILE</th>
          <th>DATE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

  

  
        

