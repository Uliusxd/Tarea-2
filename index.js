const home = document.getElementById("Home");
const imagenes = document.getElementById("imagenes");
const imagenesM = document.getElementById("imagenesM");
const imagenesC = document.getElementById("imagenesC");
const footer = document.getElementById("footer");
const navbar = document.getElementById("navbar");
const parriba = document.getElementById("up");
const allofthem = [home, imagenes, imagenesC, imagenesM, footer];

const clickeado = (elem) => {
  allofthem.map((x) => {
    if (elem.id != x.id) {
      x.classList.remove("active");
    }
  });
};

home.addEventListener("click", () => {
  clickeado(home);
  home.classList.add("active");
});
imagenes.addEventListener("click", () => {
  clickeado(imagenes);
  imagenes.classList.add("active");
});
imagenesC.addEventListener("click", () => {
  clickeado(imagenesC);
  imagenesC.classList.add("active");
});
imagenesM.addEventListener("click", () => {
  clickeado(imagenesM);
  imagenesM.classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll");

  for (const link of scrollLinks) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});

parriba.addEventListener("click", () => {
  navbar.scrollIntoView({ behavior: "smooth" });
  clickeado(home);
});
