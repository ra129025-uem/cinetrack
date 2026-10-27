
function rotuloStatus(status) {
    if (status === "assistido") {
        return "Assistido";
    }
    if (status === "assistindo") {
        return "Assistindo";
    }
    if (status === "quero") {
        return "Quero assistir";
    }
    return status;
}

const estrelas = (nota) => {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += i <= nota ? "★" : "☆";
    }
    return resultado;
};

console.log(rotuloStatus("quero"), estrelas(3));

const badge = document.querySelector("#lista .card .badge");
badge.textContent = rotuloStatus("assistido");

const nota = document.querySelector("#lista .card p:nth-of-type(2)");
nota.textContent = "Nota: " + estrelas(4);

const TOTAL = 6;
const rodape = document.querySelector("footer small");
rodape.textContent = `CineTrack © 2026 · ${TOTAL} filmes cadastrados`;
