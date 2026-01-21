let hamMenu = document.querySelector('.menu-btn');
const navigate = document.getElementById('navMenu');

hamMenu.addEventListener('click', () => { navigate.classList.toggle('open'); }); 

// function navMenu() {
//     console.log('got it')
//     // document.getElementById('boing').stop();
//     if (navigate.style.display == 'flex') {
//         navigate.style.display = 'none';
//     } else {
//         navigate.style.display = 'flex';
//     }
// }