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


var tl = gsap.timeline();
tl.to('#intro h1 .h1b', {
    scrollTrigger: '#intro',
    x:100
    })
// .to('#intro h1 .h1a', {
//     scrollTrigger: '#intro',
//     opacity: 0
// })
