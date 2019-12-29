const email = document.getElementById("email");
const theme = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const sendBtn = document.getElementById("enviar");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", initApp);
}

function initApp() {
  sendBtn.disabled = true;
}
