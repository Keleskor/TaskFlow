let burgerLogo = document.querySelector('.burger-menu');
let aside = document.querySelector('.aside');

burgerLogo.addEventListener("click", () => {
    aside.classList.toggle('aside-active');
})