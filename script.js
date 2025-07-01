document.addEventListener("DOMContentLoaded", () => {
    // Inicializa a contagem de defeitos se houver uma lista visível
    const listaDefeitos = document.getElementById("lista-defeitos");
    if (listaDefeitos) {
        const totalDefeitos = listaDefeitos.querySelectorAll(".defeito-item").length;
        // Se houver um elemento para exibir o total de defeitos, atualize-o
        // (No HTML atualizado, não há um elemento para total-defeitos na index, mas mantemos a lógica caso seja adicionado)
        const totalDefeitosElement = document.getElementById("total-defeitos");
        if (totalDefeitosElement) {
            totalDefeitosElement.textContent = totalDefeitos;
        }
    }
});

function copiarMensagem(id) {
    const mensagemElement = document.getElementById(id);
    if (mensagemElement) {
        // Cria um elemento de texto temporário para copiar
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = mensagemElement.textContent;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Mensagem copiada para a área de transferência!");
    } else {
        console.error("Elemento de mensagem não encontrado com o ID:", id);
        alert("Erro ao copiar a mensagem.");
    }
}

function adicionarSugestao(event) {
    event.preventDefault();
    const input = document.getElementById("sugestao");
    const sugestao = input.value.trim();

    if (sugestao === "") {
        alert("Por favor, digite sua sugestão antes de enviar.");
        return;
    }

    const lista = document.getElementById("lista-sugestoes");
    if (lista) {
        const li = document.createElement("li");
        li.textContent = sugestao;
        lista.appendChild(li);
        input.value = ""; // Limpa o campo após adicionar
        alert("Sugestão enviada com sucesso!");
    } else {
        console.error("Lista de sugestões não encontrada.");
        alert("Erro ao adicionar sugestão.");
    }
}

function buscarDefeito() {
    const termo = document.getElementById("busca-defeito").value.toLowerCase();
    const defeitos = document.querySelectorAll("#lista-defeitos .defeito-item"); // Alterado para .defeito-item

    defeitos.forEach(defeito => {
        if (defeito.textContent.toLowerCase().includes(termo)) {
            defeito.style.display = ""; // Mostra o defeito
        } else {
            defeito.style.display = "none"; // Esconde o defeito
        }
    });
}
