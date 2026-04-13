const form = document.getElementById("login-form")
const feedback = document.getElementById("feedback")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value.trim()

  if (!email || !senha) {
    feedback.textContent = "Preencha e-mail e senha."
    feedback.className = "feedback erro"
    return
  }

  if (!email.includes("@")) {
    feedback.textContent = "Digite um e-mail válido."
    feedback.className = "feedback erro"
    return
  }

  if (senha.length < 6) {
    feedback.textContent = "A senha precisa ter no mínimo 6 caracteres."
    feedback.className = "feedback erro"
    return
  }

  feedback.textContent = "Login demo realizado com sucesso."
  feedback.className = "feedback sucesso"
})
