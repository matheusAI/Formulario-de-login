const usuarios = [
  {
    usuario: "admin",
    pass: "admin",
  }
];

let botao = document.getElementById("logar");

botao.addEventListener("click", function logar() {
  let pegaUsuario = document.getElementById("usuario").value;
  let pegaSenha = document.getElementById("senha").value;
  let validalogin = false;

  for (let i in usuarios) {
    if (pegaUsuario == usuarios[i].usuario && pegaSenha == usuarios[i].pass) {
      validalogin = true;
      break;
    }
  }

  if (validalogin) {
    alert("muito obrigado por visitar meu projeto");
  } else {
    alert("senha ou usuario incorreto");
  }
});
