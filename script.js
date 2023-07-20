function formulario() {
  const form = document.querySelector("form");
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const textArea = document.querySelector("#mensagem");
  const messageError = document.querySelectorAll(".message-error");

  function handleClick(event) {
    event.preventDefault();
    resetErro();
    validateInputs();
  }

  function setError(input, messageError) {
    const erro = input.nextElementSibling;
    erro.textContent = messageError;
  }

  function resetErro() {
    messageError.forEach((item) => {
      item.textContent = "";
    });
    const borderInitial = "1px solid #ccc";
    nome.style.border = borderInitial;
    email.style.border = borderInitial;
    assunto.style.border = borderInitial;
    textArea.style.border = borderInitial;
  }

  function validateInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const textAreaValue = textArea.value.trim();
    const borderError = "2px solid #e21111";

    if (nomeValue === "") {
      setError(nome, "Preencha o Campo Nome");
      nome.style.border = borderError;
    }

    if (emailValue === "") {
      setError(email, "Preencha o Campo Email");
      email.style.border = borderError;
    } else if (!validateEmail(emailValue)) {
      setError(email, "E-mail inválido");
    }

    if (assuntoValue === "") {
      setError(assunto, "Preencha o Campo Assunto");
      assunto.style.border = borderError;
    }

    if (textAreaValue === "") {
      setError(textArea, "Preencha o Campo de Mesangem");
      textArea.style.border = borderError;
    }
  }

  function validateEmail(email) {
    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return validacao;
  }

  form.addEventListener("submit", handleClick);
}
formulario();
