let imgs = document.querySelectorAll("img");

function applyRandomRotation(){
    imgs.forEach(function(element){
        let randomAngle = Math.floor(Math.random() * 30) - 15;
        element.style.transform = 'rotate(' + randomAngle + 'deg)';
    });
}

setInterval(applyRandomRotation, 200); 