const email = document.getElementById("email");
const tema = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const sendBtn = document.getElementById("enviar");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", initApp);

  email.addEventListener("blur", checkField);
  tema.addEventListener("blur", checkField);
  message.addEventListener("blur", checkField);
  email.addEventListener("keypress", checkField);
  tema.addEventListener("keypress", checkField);
  message.addEventListener("keypress", checkField);
}

function initApp() {
  sendBtn.disabled = true;
}

function checkField() {
  is_empty(this);
  is_filled();
}

function is_empty(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

function is_filled() {
  if (email.value != "" && tema.value != "" && message.value != "") {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}
