window.onscroll = function(){
    const header = document.querySelector('header');
    const absolute = document.querySelector('.absolute');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav ) {
        header.classList.add("navbar-fixed");
        header.classList.remove('absolute');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('absolute');
    }

}


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});