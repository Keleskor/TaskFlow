let burgerLogo = document.querySelector('.burger-menu');
let aside = document.querySelector('.aside');
let body = document.querySelector('body');
let blockingMask = document.querySelector('.blocking-mask');
let searchLogo = document.querySelector('.search-logo');
let wrapperSearch = document.querySelector('.header__search-form');
let addTask = document.querySelector('.add-task');
let taskModal = document.querySelector('.task-modal');
let closeModalButton = document.querySelector('.task-modal__close-button');
let cancelModalButton = document.querySelector('.task-modal__cancel');

burgerLogo.addEventListener("click", () => {
    aside.classList.toggle('aside-active');
    body.classList.toggle('blocking');
    blockingMask.classList.toggle('blocking-mask__active');
})
searchLogo.addEventListener("click", () => {
    wrapperSearch.classList.toggle('search__active');
})
addTask.addEventListener("click", () => {
    taskModal.showModal();
})
closeModalButton.addEventListener("click", () => {
    taskModal.close();
})
cancelModalButton.addEventListener("click", () => {
    taskModal.close();
})