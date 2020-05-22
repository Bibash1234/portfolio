const mainNav = document.querySelector('.main-nav');

const navList = document.querySelector(
    '.nav-list'
);

const Menu = document.querySelector('.menu');

Menu.addEventListener('click', function () {
        mainNav.classList.toggle('open');
    }

);