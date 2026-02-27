const possibleImages = [
    {src: 'Driving-Pumpkin.jpg', alt: 'A kindhearted pumpkin, sitting behind the wheel of a car', title: 'Driving Pumpkin'},
    {src: 'Evil-Burger-From-Hell-Eating-A-Kind-Kitten.jpg', alt: 'An sininster looking sentient burger, surrounded by flames, mouth agape, ready to eat a cute cat', title: 'Evil Burger From Hell '},
    {src: 'Strong-Willed-Wolf.jpg', alt: 'A dashing werewolf, sitting against a tree, looking off into the distance', title: 'Strong Willed Werewolf'},
    {src: 'Phelps.png', alt: 'Michael Phelps, the most decorated Olympian of all time', title: 'Michael Phelps'},
]
const imgGenButton = document.getElementById('generate');

const cardImg = document.getElementById('cardImg');
const imgGenDiv = document.getElementById('imgGen');
const imgGenInput = document.getElementById('prompt');
const cardDiv = document.getElementById('card');
const cardName = document.getElementById('cardName');

function imageGen() {
    const randomIndex = Math.floor(Math.random() * possibleImages.length);
    const chosenImg = possibleImages[randomIndex];
    confirm(`You want to generate ${chosenImg.alt}?`);
    imgGenInput.value = '';
    imgGenDiv.style.display = 'none';
    cardImg.src = chosenImg.src;
    cardImg.alt = chosenImg.alt;
    cardDiv.style.display = 'flex';
    cardName.textContent = chosenImg.title;
}

imgGenButton.addEventListener('click', imageGen);

imgGenInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        imageGen();
    }
});