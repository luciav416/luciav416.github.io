const header = document.getElementById("full-header");
const headerText = document.getElementById("header-text")
const scrollText = document.getElementById("scroll-text")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.style.height = "20vh"
        header.style.backgroundColor = "black"
        header.style.backgroundImage = "none"
        headerText.style.fontSize = "7rem"
    } else {
        header.style.height = "100vh"
        header.style.backgroundImage = "url(./assets/Imagen_rio-magdalena.jpg)"
    }
}
