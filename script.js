function logar() {
  var login = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (login == "Ms2279584@gmail.com" && senha == "3341") {
    alert("Sucesso");
    location.href = "https://github.com/matheusAI";
  } else {
    alert("Usuario ou senha incorretos");
  }
}
