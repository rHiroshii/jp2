document.addEventListener("DOMContentLoaded", () => {
    // Inicializa a contagem de defeitos se houver uma lista visível
    const listaDefeitos = document.getElementById("lista-defeitos");
    if (listaDefeitos) {
        const totalDefeitos = listaDefeitos.querySelectorAll(".defeito").length;
        // Se houver um elemento para exibir o total de defeitos, atualize-o
        const totalDefeitosElement = document.getElementById("total-defeitos");
        if (totalDefeitosElement) {
            totalDefeitosElement.textContent = totalDefeitos;
        }
    }
});

function copiarMensagem(id) {
    const mensagem = document.getElementById(id);
    if (mensagem) {
        // Cria um elemento de texto temporário para copiar
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = mensagem.textContent;
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
    const defeitos = document.querySelectorAll("#lista-defeitos .defeito");

    defeitos.forEach(defeito => {
        if (defeito.textContent.toLowerCase().includes(termo)) {
            defeito.style.display = ""; // Mostra o defeito
        } else {
            defeito.style.display = "none"; // Esconde o defeito
        }
    });
}

// --- Funções para a Caixa Flutuante da Planilha ---
const caixa = document.getElementById("caixa");
const barra = document.getElementById("barra");
const fecharBtn = document.getElementById("fecharBtn");
const fixarBtn = document.getElementById("fixarBtn");

let movendo = false;
let fixado = false;
let offsetX, offsetY;

if (barra && caixa && fecharBtn && fixarBtn) {
    barra.addEventListener("mousedown", (e) => {
        if (fixado) return;
        movendo = true;
        offsetX = e.clientX - caixa.offsetLeft;
        offsetY = e.clientY - caixa.offsetTop;
        caixa.style.cursor = "grabbing"; // Altera o cursor ao arrastar
    });

    document.addEventListener("mouseup", () => {
        movendo = false;
        if (caixa) caixa.style.cursor = "grab"; // Retorna o cursor normal
    });

    document.addEventListener("mousemove", (e) => {
        if (movendo && !fixado) {
            caixa.style.left = (e.clientX - offsetX) + "px";
            caixa.style.top = (e.clientY - offsetY) + "px";
        }
    });

    fecharBtn.addEventListener("click", () => {
        caixa.style.display = "none";
    });

    fixarBtn.addEventListener("click", () => {
        fixado = !fixado;
        fixarBtn.textContent = fixado ? "Soltar" : "Fixar";
        if (fixado) {
            caixa.style.cursor = "default"; // Remove o cursor de arrastar quando fixado
        } else {
            caixa.style.cursor = "grab";
        }
    });
} else {
    console.warn("Elementos da caixa flutuante não encontrados. A funcionalidade pode estar desabilitada.");
}

function abrirCaixa() {
    if (caixa) {
        caixa.style.display = "block";
        caixa.style.cursor = "grab"; // Define o cursor inicial
    } else {
        console.error("Caixa flutuante não encontrada.");
    }
}

// --- Funções para as Novas Seções ---

function abrirChamado(event) {
    event.preventDefault();
    const nome = document.getElementById("nome-chamado").value.trim();
    const email = document.getElementById("email-chamado").value.trim();
    const produto = document.getElementById("produto-chamado").value.trim();
    const descricao = document.getElementById("descricao-chamado").value.trim();

    if (!nome || !email || !produto || !descricao) {
        alert("Por favor, preencha todos os campos para abrir o chamado.");
        return;
    }

    // Simulação de envio de chamado
    const protocolo = "JP2AUTO-" + Math.floor(Math.random() * 100000); // Gera um protocolo simples
    alert(`Chamado aberto com sucesso!\nProtocolo: ${protocolo}\nEntraremos em contato em breve.`);

    // Limpa o formulário
    document.getElementById("nome-chamado").value = "";
    document.getElementById("email-chamado").value = "";
    document.getElementById("produto-chamado").value = "";
    document.getElementById("descricao-chamado").value = "";

    // Em um ambiente real, aqui você enviaria os dados para um servidor via fetch() ou XMLHttpRequest
    console.log("Dados do Chamado:", { nome, email, produto, descricao, protocolo });
}

function consultarStatus() {
    const protocolo = document.getElementById("protocolo-status").value.trim();
    const resultadoDiv = document.getElementById("resultado-status");

    if (!protocolo) {
        resultadoDiv.textContent = "Por favor, digite o número do protocolo.";
        resultadoDiv.style.color = "orange";
        return;
    }

    // Simulação de consulta de status (em um ambiente real, buscaria em um banco de dados)
    let status = "Protocolo não encontrado.";
    let color = "red";

    if (protocolo.startsWith("JP2AUTO-")) {
        const num = parseInt(protocolo.split('-')[1]);
        if (num % 3 === 0) {
            status = "Em análise técnica.";
            color = "blue";
        } else if (num % 3 === 1) {
            status = "Aguardando peça.";
            color = "orange";
        } else {
            status = "Reparo concluído, pronto para retirada!";
            color = "green";
        }
    }

    resultadoDiv.textContent = `Status do Protocolo ${protocolo}: ${status}`;
    resultadoDiv.style.color = color;
}

// A função puxarCelulaB4() e carregarDadosPlanilha() do seu script original
// foram removidas daqui, pois a leitura direta de planilhas do Google Sheets
// via fetch() é complexa e geralmente requer APIs ou publicação específica.
// A caixa flutuante agora exibe dados estáticos como no seu HTML original.
// Se precisar de dados dinâmicos, considere as opções mencionadas na resposta anterior.
