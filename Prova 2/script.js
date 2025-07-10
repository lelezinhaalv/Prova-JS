const personagens = [];
const botao = document.getElementById('adicionar');

botao.addEventListener('click', function () {
  const input = document.getElementById('personagem');
  const nome = input.value.trim();

  if (nome) {
    personagens.push(nome);
    atualizarLista();
    input.value = ''; // limpa o campo
  }
});

function atualizarLista() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  personagens.forEach(function (nome) {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}