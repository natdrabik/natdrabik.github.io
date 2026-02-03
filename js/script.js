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


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
    }
});
tl.to('#intro h1 .h1a', {
    opacity:0,
    duration: .5,
    delay:1
})
.from('#intro p', {
  y: 10,
  opacity:0,
  duration: .5
}, "<")
.from('#intro h1 .h1b', {
  x: 0,
  duration: 1
}, "<")
