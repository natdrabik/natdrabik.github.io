gsap.registerPlugin(ScrollTrigger);

var btMenu = document.getElementById('btMenu');
var menu = document.getElementById('menu');
var linksMenu = menu.querySelectorAll('a');

btMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('has-menu');
}

for (linkMenu of linksMenu) {
    linkMenu.addEventListener('click', closeMenu);
}

function closeMenu() {
    document.body.classList.remove('has-menu');
}



gsap.to('#skills', {
    scrollTrigger: '#skills', // start animation when ".box" enters the viewport
    x: 500
});