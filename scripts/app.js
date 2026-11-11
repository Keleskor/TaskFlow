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
let dateInput = document.querySelector("#task-date");
let burgerButton = document.querySelector('.burger-menu');
let collapseButton = document.querySelector('.collapse-button');


flatpickr(".task-date__date", {
    locale: "ru",
    dateFormat: "d.m.Y",
    appendTo: taskModal,
    disableMobile: true,
    onReady: function (selectedDates, dateStr, instance) {
        instance.calendarContainer.classList.add("task-calendar");
    }
});

burgerLogo.addEventListener("click", () => {
    aside.classList.toggle('aside-active');
    body.classList.toggle('blocking');
    blockingMask.classList.toggle('blocking-mask__active');
    const burgerOpen = aside.classList.contains('aside-active');
    if (burgerOpen) {
        burgerButton.src = "assets/icons/close.png";
        burgerButton.style.width = '20px';
        burgerButton.style.height = '20px';
    } else {
        burgerButton.src = "assets/icons/menu.png";
        burgerButton.style.width = '30px';
        burgerButton.style.height = '30px';
    }
})
collapseButton.addEventListener('click', () => {
    aside.classList.toggle('aside-collapse');
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