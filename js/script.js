var btMenu = document.getElementById('btMenu');
var menu = document.getElementById('menu');

btMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('has-menu');
}