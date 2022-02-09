const navs = document.querySelectorAll('.nav');

const uls = document.querySelectorAll('ul');
const menus = document.getElementsByClassName('menu');

const hamicon = document.querySelector('button');
hamicon.addEventListener('click', fire);
function fire() {
    for (const nav of navs) {
        nav.style.display = 'flex';
        // nav.style.flexDirection =;

    }
    for (const menu of menus) {
        menu.style.display = 'block';

    }
}

