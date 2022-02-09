const nav = document.querySelector('nav');

const uls = document.querySelectorAll('ul');
const menus = document.getElementsByClassName('menu');

const hamicon = document.querySelector('button');
hamicon.addEventListener('click', fire);
function fire() {
    nav.style.flexDirection = 'column';
    for (const menu of menus) {
        menu.style.display = 'block'
    }
    for (const ul of uls) {
        ul.style.display = 'block';
    }


}
