window.onscroll = function(){
    const header = document.querySelector('header');
    const absolute = document.getElementsByClassName('absolute');
    const toTop = document.querySelector('.to-top');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav ) {
        header.classList.add("navbar-fixed");
        header.classList.remove('absolute');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('absolute');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }

}


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


const html = document.querySelector('html');
const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () =>{
    darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }