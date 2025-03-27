const header = document.getElementById('header');

    if (window.scrollY <= 550) {
        header.style.color = 'white'
    };

window.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        header.style.color = 'black';
    } else {
        header.style.color = 'white'
    }
})


const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('visible');
    });
    