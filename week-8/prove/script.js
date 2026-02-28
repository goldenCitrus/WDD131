const possibleImages = [
    {src: 'Driving-Pumpkin.jpg', alt: 'A kindhearted pumpkin, sitting behind the wheel of a car', title: 'Driving Pumpkin', class: 'Friendly guy!'},
    {src: 'Evil-Burger-From-Hell-Eating-A-Kind-Kitten.jpg', alt: 'An sininster looking sentient burger, surrounded by flames, mouth agape, ready to eat a cute cat', title: 'Evil Burger From Hell', class: 'Super Crazy Evil (like, the worst)'},
    {src: 'Strong-Willed-Wolf.jpg', alt: 'A dashing werewolf, sitting against a tree, looking off into the distance', title: 'Strong Willed Werewolf', class: 'Lowkey-Lycan'},
    {src: 'Phelps.png', alt: 'Michael Phelps, the most decorated Olympian of all time', title: 'Michael Phelps', class: 'Olympian (the sport, not the gods)'},
]
const imgGenButton = document.getElementById('generate');

const cardImg = document.getElementById('cardImg');
const imgGenDiv = document.getElementById('imgGen');
const imgGenInput = document.getElementById('prompt');
const cardDiv = document.getElementById('card');
const cardName = document.getElementById('cardName');
const cardClass = document.getElementById('class');
let cardLevel = document.getElementById('level');
let cardHp = document.getElementById('hp');
const attacked = document.getElementById('attacked');
const levelUp = document.getElementById('levelUp');
const hit = document.getElementById('hit');
const defeated = document.getElementById('defeated');
const levelSound = document.getElementById('levelSFX');
const what2Gen = document.getElementById('what2Gen');

let levelInt = 1;
let hpInt = 100;
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
    cardClass.textContent = `Class: ${chosenImg.class}`;
    cardLevel.textContent = `Level: ${levelInt}`;
    cardHp.textContent = `HP: ${hpInt}`;
}
what2Gen.addEventListener('submit', function(event) {
    event.preventDefault();
    imageGen();
});

attacked.addEventListener('click', function() {
    if (hpInt > 0) 
    {
        hit.cloneNode().play();
        hpInt -= 10;
        cardHp.textContent = `HP: ${hpInt}`;
        cardDiv.classList.toggle('damaged');
        setTimeout(() => {
            cardDiv.classList.toggle('damaged');
        }, 100);
    }
    if (hpInt <= 0)
    {
        hpInt = 0;
        cardHp.textContent = `HP: ${hpInt}`;
        alert(`${cardName.textContent} has been defeated!`);
        defeated.cloneNode().play();
        document.body.classList.toggle('defeated');
        cardDiv.classList.toggle('defeated');
        setTimeout(() => {
            document.location.reload();
        }, 600);
    }

});

levelUp.addEventListener('click', function() {
    levelSound.cloneNode().play();
    levelInt += 1;
    hpInt += 20;
    cardLevel.textContent = `Level: ${levelInt}`;
    cardHp.textContent = `HP: ${hpInt}`;
    cardDiv.classList.toggle('leveledUp');
    setTimeout(() => {
        cardDiv.classList.toggle('leveledUp');
    }, 300);
});