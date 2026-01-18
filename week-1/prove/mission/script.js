
let selectElem = document.getElementById('menu');
let logo = document.querySelector('img');
let texts = document.querySelectorAll('h1, p, li');
// let ps = document.querySelectorAll('p');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
        console.log(current);

    if (current === 'dark') {
        document.body.style.backgroundColor = "#333333";
        document.body.style.borderColor = 'white';
        for (let i = 0; i < texts.length; i++) {
            if (texts[i].textContent !== 'BRIGHAM YOUNG UNIVERSITY-IDAHO') {
                texts[i].style.color = 'white';
            }
            else {
                texts[i].style.color = '#9fbfcf';
            }
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png'
        }
    } else if (current === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.borderColor = '#c2c2c2';
        for (let i = 0; i < texts.length; i++) {
            if (texts[i].textContent !== 'BRIGHAM YOUNG UNIVERSITY-IDAHO') {
                texts[i].style.color = 'black';
            }
            else {
                texts[i].style.color = '#1476ba';
            }
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp'
        }
    }
}