const burgerLogo = document.querySelector('.burger-menu');
const aside = document.querySelector('.aside');
const body = document.querySelector('body');
const blockingMask = document.querySelector('.blocking-mask');
const searchLogo = document.querySelector('.search-logo');
const wrapperSearch = document.querySelector('.header__search-form');
const addTask = document.querySelector('.add-task');
const taskModal = document.querySelector('.task-modal');
const closeModalButton = document.querySelector('.task-modal__close-button');
const cancelModalButton = document.querySelector('.task-modal__cancel');
const dateInput = document.querySelector("#task-date");
const burgerButton = document.querySelector('.burger-menu');
const collapseButton = document.querySelector('.collapse-button');


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