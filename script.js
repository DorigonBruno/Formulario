const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const textArea = document.querySelector("#mensagem");
const messageError = document.querySelector(".message-error");

function handleClick(event) {
  event.preventDefault();
  validateInputs();
}

function setError(input, messageError) {
  const erro = input.nextElementSibling;
  erro.textContent = messageError;
}

function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const borderError = "2px solid #e21111";

  if (nomeValue === "") {
    setError(nome, "Preencha o Campo Nome");
    nome.style.border = borderError;
  }
}

form.addEventListener("submit", handleClick);
