function copiarMensagem(id) {
    const mensagem = document.getElementById(id).textContent;
    navigator.clipboard.writeText(mensagem)
        .then(() => {
            alert("Mensagem copiada para a área de transferência.");
        })
        .catch(err => {
            console.error("Erro ao copiar a mensagem: ", err);
        });
}

function adicionarSugestao(event) {
    event.preventDefault();
    const input = document.getElementById("sugestao");
    const sugestao = input.value.trim();

    if (sugestao === "") return; // Verifica se a sugestão não está vazia

    const lista = document.getElementById("lista-sugestoes");
    if (lista) {
        const li = document.createElement("li");
        li.textContent = sugestao;
        lista.appendChild(li);
        input.value = "";
    } else {
        console.error("Lista de sugestões não encontrada.");
    }
}

function abrirCaixa() {
    const caixa = document.getElementById("caixa");
    if (caixa) {
        caixa.style.display = "block";
    } else {
        console.error("Caixa não encontrada.");
    }
}

const caixa = document.getElementById("caixa");
const barra = document.getElementById("barra");
const fecharBtn = document.getElementById("fecharBtn");
const fixarBtn = document.getElementById("fixarBtn");

let movendo = false;
let fixado = false;
let offsetX, offsetY;

barra.addEventListener("mousedown", (e) => {
    if (fixado) return;
    movendo = true;
    offsetX = e.clientX - caixa.offsetLeft;
    offsetY = e.clientY - caixa.offsetTop;
});

document.addEventListener("mouseup", () => {
    movendo = false;
});

document.addEventListener("mousemove", (e) => {
    if (movendo && !fixado) {
        caixa.style.left = (e.clientX - offsetX) + "px";
        caixa.style.top = (e.clientY - offsetY) + "px";
    }
});



const modal = document.getElementById("modal");
const iframe = document.getElementById("iframe-doc");
const btnFechar = document.getElementById("btn-fechar");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const docId = card.getAttribute("data-doc-id");
    const docUrl = `https://docs.google.com/document/d/${docId}/preview`;
    iframe.src = docUrl;
    modal.classList.add("show");
  });
});

btnFechar.addEventListener("click", () => {
  modal.classList.remove("show");
  iframe.src = ""; // Para parar de carregar o documento
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    iframe.src = "";
  }
});






