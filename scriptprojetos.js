const zoom = document.getElementById("janela-zoom");
const imgAmpliada = document.getElementById("img-ampliada");
const botaoFechar = document.querySelector(".botao-fechar");

document.querySelectorAll(".img-zoom").forEach(imagem => {
    imagem.addEventListener("click", () => {
        zoom.style.display = "flex";
        imgAmpliada.src = imagem.src;
    });
});

botaoFechar.addEventListener("click", () => {
    zoom.style.display = "none";
});

zoom.addEventListener("click", (e) => {
    if (e.target === zoom) {
        zoom.style.display = "none";
    }
});