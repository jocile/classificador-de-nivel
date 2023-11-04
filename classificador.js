function receberValores() {
  // Capturando os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var xp = parseInt(document.getElementById("xp").value);

  // Verificando o nível
  var nivel = verificarNivel(xp);
  // Exibindo a mensagem
  mensagem(nome, nivel);
}

function verificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000)return "Imortal";
  else if (xp >= 10001) return "Radiante";
}

function mensagem(nome, nivel) {
  var mensagem = "O Herói de nome " + nome + " está no nível de " + nivel + ".";
  document.getElementById("resultado").innerHTML = mensagem;
}