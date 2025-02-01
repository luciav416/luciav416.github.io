const header = document.getElementById("header")
const headerText = document.getElementById("header-text")
const scrollText = document.getElementById("scroll-text")
const textInformation = document.getElementById("text-information")
const entries = document.getElementById("entries")

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.innerWidth > 768) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
        if (scrollTop > 0 ) {
            header.style.height = "200px";
            header.style.position = "relative";
            headerText.style.fontSize = "8rem";
            scrollText.style.display = "none";
        } else {
            header.style.height = "100vh";
            headerText.style.fontSize = "14rem";
            scrollText.style.display = "block";
        }
    }
}

