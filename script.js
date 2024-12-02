const header = document.getElementById("header")
const headerText = document.getElementById("header-text")
const scrollText = document.getElementById("scroll-text")
const textInformation = document.getElementById("text-information")
const entries = document.getElementById("entries")

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.height = "200px"
            /* header.style.position = "fixed" */
            headerText.style.fontSize = "8rem"
            headerText.style.paddingTop = "25px"
            scrollText.style.display = "none"
            /* textInformation.style.paddingTop = "200px"
            entries.style.paddingTop = "200px" */
        } else {
            /* header.style.height = "100vh"
            header.style.position = "relative"
            headerText.style.fontSize = "14rem"
            headerText.style.paddingTop = "0px"
            scrollText.style.display = "block"
            textInformation.style.paddingTop = "0px"
            entries.style.paddingTop = "0px" */
        }
    }
}

