let secretImage = document.getElementById('secretImg');
let menuButton = document.getElementById('menuButton');
let modal = document.getElementById('modal');
let modalImg = modal.querySelector('IMG');
const anImage = document.getElementById('imgContainer');

secretImage.addEventListener('mouseover', imgSwap);
secretImage.addEventListener('mouseleave', imgSwap);
modal.addEventListener('click', closeModal)

menuButton.addEventListener('click', openclose);
anImage.addEventListener('click', blowUp);

function imgSwap() {
    if (secretImage.src.endsWith('norris-sm.jpg')) {
        console.log('working')
        secretImage.src = 'Punkin.jpg';
    }
    else {
        secretImage.src = 'norris-sm.jpg';
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

function blowUp(mouse) {
    if (mouse.target.tagName == 'IMG') {
        modalImg.src = mouse.target.src.replace('sm', 'full');
        modal.style.display = 'flex';
        modal.showModal();

    }
}

function closeModal(mouse) {
    if (mouse.target.tagName != "IMG") {
        modal.style.display = 'none';
        modal.close()
    }
}