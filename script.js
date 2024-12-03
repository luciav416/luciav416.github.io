const header = document.getElementById("header")
const headerText = document.getElementById("header-text")
const scrollText = document.getElementById("scroll-text")
const textInformation = document.getElementById("text-information")
const entries = document.getElementById("entries")

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.innerWidth > 768) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
        if (scrollTop > 50 ) {
            header.style.height = "200px";
            header.style.position = "fixed";
            headerText.style.fontSize = "8rem";
            headerText.style.paddingTop = "25px";
            scrollText.style.display = "none";
        } else {
            header.style.height = "100vh";
            header.style.position = "fixed";
            headerText.style.fontSize = "14rem";
            headerText.style.paddingTop = "0px";
            scrollText.style.display = "block";
        }
    }
}

