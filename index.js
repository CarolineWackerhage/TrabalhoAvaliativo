// Mostrar contatos salvos ao carregar a página
document.addEventListener("DOMContentLoaded", mostrarContatos);

// Lidar com envio do formulário
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone1 = document.getElementById("telefone1").value.trim();
  const telefone2 = document.getElementById("telefone2").value.trim();

  if (nome === "" || telefone1 === "") {
    alert("Preencha o nome e o telefone principal.");
    return;
  }

  const novoContato = { nome, telefone1, telefone2 };
  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(novoContato);
  localStorage.setItem("contatos", JSON.stringify(contatos));

  document.getElementById("form").reset();
  mostrarContatos();
});

// Função para exibir os contatos na tela
function mostrarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach(contato => {
    const li = document.createElement("li");
    li.textContent = `Nome: ${contato.nome}, Tel1: ${contato.telefone1}, Tel2: ${contato.telefone2 || "----"}`;
    lista.appendChild(li);
  });
}
