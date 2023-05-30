const usuários = [
  {
    usuário: "Ms2279584@gmail.com",
    pass: "334118",
  },
  {
    usuário: "Priscilaaquila1b@gmail.com",
    pass: "admin",
  },
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

  if (validalogin == true) {
    alert("ok");
  } else {
    alert("error");
  }
});
