console.log("Скрипт запущен");
alert("Скрипт запущен");

let name = '';
let description = '';
let frequency = 0;
let count = 0;
let sum = 0;

const nameInput = document.querySelector('#habit-name');
const descriptionInput = document.querySelector('#description');
const frequencySelect = document.querySelector('#frequency');
const countInput = document.querySelector('#count');
const sumElement = document.querySelector('#sum');

function setSum() {
    sum = frequency * count;
    sumElement.textContent = sum;
    console.log("Обновлена сумма:", sum);
}

function nameInputHandler(ev) {
    name = ev.target.value;
    console.log("Имя:", name);
}

function descriptionInputHandler(ev) {
    description = ev.target.value;
    console.log("Описание:", description);
}

function frequencyChange(ev) {
    frequency = parseInt(ev.target.value) || 0;
    console.log("Частота:", frequency);
    setSum();
}

function countInputHandler(ev) {
    count = parseInt(ev.target.value) || 0;
    console.log("Повторений:", count);
    setSum();
}

nameInput.addEventListener('input', nameInputHandler);
descriptionInput.addEventListener('input', descriptionInputHandler);
frequencySelect.addEventListener('change', frequencyChange);
countInput.addEventListener('input', countInputHandler);

// const formElement = document.querySelector('form');
// formElement.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     console.log("Отправка формы:");
//     console.log("Название:", name);
//     console.log("Описание:", description);
//     console.log("Частота:", frequency);
//     console.log("Количество:", count);
//     console.log("Итого:", sum);
//     alert(`Сохранено!\nНазвание: ${name}\nОписание: ${description}\nЧастота: ${frequency}\nКоличество: ${count}\nИтого: ${sum}`);
// });
