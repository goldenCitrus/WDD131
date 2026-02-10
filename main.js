let hamMenu = document.querySelector('.menu-btn');
const navigate = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('nav a');


hamMenu.addEventListener('click', () => { navigate.classList.toggle('open'); }); 


hamMenu.addEventListener('click', navMenu);  

function navMenu() {
    // console.log('got it')
    hamMenu.classList.toggle('click')
    // document.getElementById('boing').stop();
    // document.getElementById('boing').play();
    // for (let i = 0; i < navLinks.length; i++) {
    //     if (navLinks[i].style.display === 'flex') {
    //         navLinks[i].style.display = 'none';
    //     } else {
    //         navLinks[i].style.display = 'flex';
    //         navLinks[i].style.flexDirection = 'row';
    //     }
    // }
}

// function navMenu() {
//     console.log('got it')
//     // document.getElementById('boing').stop();
//     if (navigate.style.display == 'flex') {
//         navigate.style.display = 'none';
//     } else {
//         navigate.style.display = 'flex';
//     }
// }