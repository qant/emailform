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
  if (this.type === "email") {
    validateEmail(this);
  } else {
    is_empty(this);
  }
  is_filled();
}

function is_empty(field) {
  if (field.value.length > 0) {
    fieldOk(field);
  } else {
    fieldError(field);
  }
}

function is_filled() {
  const errors = document.querySelectorAll(".error");
  if (
    email.value != "" &&
    tema.value != "" &&
    message.value != "" &&
    errors.length === 0
  ) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

function fieldOk(field) {
  field.style.borderBottomColor = "green";
  field.classList.remove("error");
}

function fieldError(field) {
  field.style.borderBottomColor = "red";
  field.classList.add("error");
}

function validateEmail(field) {
  const email = field.value;

  if (email.indexOf("@") != -1 && email.length != 0) {
    fieldOk(field);
  } else {
    fieldError(field);
  }
}
