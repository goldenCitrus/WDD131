let secretImage = document.getElementById('secretImg');
let menuButton = document.getElementById('menuButton');

secretImage.addEventListener('mouseover', imgSwap);
secretImage.addEventListener('mouseleave', imgSwap)

menuButton.addEventListener('click', openclose)

function imgSwap() {
    console.log('working')
    if (secretImage.src == "https://wddbyui.github.io/wdd131/images/norris-sm.jpg") {
        secretImage.src = 'Punkin.png';
    }
    else {
        secretImage.src = "https://wddbyui.github.io/wdd131/images/norris-sm.jpg"
    }
}

let isOpen = false;

function openclose() {
    if (isOpen == true) {
        isOpen = false;
        document.getElementById('theNav').classList.toggle('nav-open');
    }
    else {
        isOpen = true;
        document.getElementById('theNav').classList.toggle('nav-open');
    }
}