
function copiarMensagem(id) {
    const mensagem = document.getElementById(id).innerText;
    navigator.clipboard.writeText(mensagem).then(() => {
        alert("Mensagem copiada!");
    });
}

function adicionarSugestao(event) {
    event.preventDefault();
    const input = document.getElementById("sugestao");
    const sugestao = input.value;
    const lista = document.getElementById("lista-sugestoes");

    const li = document.createElement("li");
    li.textContent = sugestao;
    lista.appendChild(li);

    input.value = "";
}

function buscarDefeito() {
    const termo = document.getElementById("busca-defeito").value.toLowerCase();
    const defeitos = document.querySelectorAll("#lista-defeitos .defeito");

    defeitos.forEach(defeito => {
        if (defeito.textContent.toLowerCase().includes(termo)) {
            defeito.style.display = "";
        } else {
            defeito.style.display = "none";
        }
    });
}
