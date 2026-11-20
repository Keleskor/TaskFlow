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
const openButton = document.querySelector('.open-button');
const headerTitle = document.querySelector('.header__title-wrapper');


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
    aside.classList.add('aside-collapse');
    openButton.classList.add('open-button__acitve');
    headerTitle.classList.add('header__title-wrapper__active');

})
openButton.addEventListener('click', () => {
    aside.classList.remove('aside-collapse');
    openButton.classList.remove('open-button__acitve');
    headerTitle.classList.remove('header__title-wrapper__active');
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

/*******************Динамическое добавление карточек в определенную колонку по статусу************************/

const template = document.querySelector("#task-template"); /* Создал константу, внутри которой шаблон template */

const tasks = [                            /* Массив с объектами данных */
    {
        id: 1,
        title: "Изучить JavaScript",
        description: "Я планирую изучить",
        priority: "high",
        status: "todo",
        deadline: "2026-12-31"
    },
    {
        id: 2,
        title: "Изучить PHP",
        description: "Я планирую изучить",
        priority: "medium",
        status: "progress",
        deadline: "2027-12-31"
    },
    {
        id: 3,
        title: "Изучить React",
        description: "Я планирую изучить",
        priority: "low",
        status: "done",
        deadline: "2028-12-31"
    },
    {
        id: 4,
        title: "Изучить React",
        description: "Я планирую изучить",
        priority: "low",
        status: "done",
        deadline: "2028-12-31"
    }

];


tasks.forEach((task) => {
    const templateClone = template.content.cloneNode(true);
    const container = document.querySelector(`[data-status="${task.status}"]`);

    const cardHeading = templateClone.querySelector('.task-card__heading');
    const cardDescription = templateClone.querySelector('.task-card__description');
    if (!container) {
        console.warn(`Колонка для статуса ${task.status} не найдена`);
        return;
    } else {
        cardHeading.textContent = task.title;
        cardDescription.textContent = task.description;
        container.append(templateClone);
    }
})


const numberTasks = tasks.length;

let numberTasksTitle = document.querySelector('.total-tasks__number');

let todoNumberTitle = document.querySelector('.for-execution__number');
let progressNumberTitle = document.querySelector('.in-progress__number');
let readyNumberTitle = document.querySelector('.ready__number');

let todoCardNumberTitle = document.querySelector('.for-execution-column__number');
let progressCardNumberTitle = document.querySelector('.in-progress-column__number');
let readyCardNumberTitle = document.querySelector('.ready-column__number');

let todoNumberAside = document.querySelector('#todo-number');
let progressNumberAside = document.querySelector('#progress-number');
let readyNumberAside = document.querySelector('#ready-number');

let lowPriorityNumber = document.querySelector('#low-priority');
let mediumPriorityNumber = document.querySelector('#medium-priority');
let highPriorityNumber = document.querySelector('#high-priority');

function countTasksByPriority(tasks, priority) {
    const count = tasks.filter(task => task.priority === priority).length;
    return count;
}
function countTasksByStatus(tasks, status) {
    const count = tasks.filter(task => task.status === status).length;
    return count;
}


numberTasksTitle.textContent = numberTasks;

todoNumberTitle.textContent = countTasksByStatus(tasks, "todo");
progressNumberTitle.textContent = countTasksByStatus(tasks, "progress");
readyNumberTitle.textContent = countTasksByStatus(tasks, "done");

lowPriorityNumber.textContent = countTasksByPriority(tasks, "low");
mediumPriorityNumber.textContent = countTasksByPriority(tasks, "medium");
highPriorityNumber.textContent = countTasksByPriority(tasks, "high");

todoCardNumberTitle.textContent = `(${countTasksByStatus(tasks, "todo")})`;
progressCardNumberTitle.textContent = `(${countTasksByStatus(tasks, "progress")})`;
readyCardNumberTitle.textContent = `(${countTasksByStatus(tasks, "done")})`;

todoNumberAside.textContent = countTasksByStatus(tasks, "todo");
progressNumberAside.textContent = countTasksByStatus(tasks, "progress");
readyNumberAside.textContent = countTasksByStatus(tasks, "done");

