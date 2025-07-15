console.log("Скрипт запущен");
alert("Скрипт запущен");
const habit={
    name:'',
    description:'',
    frequency:0,
    count:0,
    sum:0,

}

const nameMeta = {
    selector: document.querySelector('#habit-name'),
    handler: (ev) => {
        habit.name = ev.target.value;
        console.log("Имя привычки:", habit.name);
    }
};

const descriptionMeta = {
    selector: document.querySelector('#description'),
    handler: (ev) => {
        habit.description = ev.target.value;
        console.log("Описание привычки:", habit.description);
    }
};

const frequencyMeta = {
    selector: document.querySelector('#frequency'),
    handler: (ev) => {
        habit.frequency = parseInt(ev.target.value) || 0;
        setSum();
        console.log("Частота:", habit.frequency);
    }
};

const countMeta = {
    selector: document.querySelector('#count'),
    handler: (ev) => {
        habit.count = parseInt(ev.target.value) || 0;
        setSum();
        console.log("Повторений:", habit.count);
    }
};

function setSum() {
    habit.sum = habit.frequency * habit.count;
    document.querySelector('#sum').textContent = habit.sum;
    console.log("Обновлена сумма:", habit.sum);
}

const metaData = [nameMeta, descriptionMeta, frequencyMeta, countMeta];

for (const { selector, handler } of metaData) {
    if (!selector) continue; // Пропустить, если элемент не найден
    const tag = selector.tagName.toLowerCase();
    if (tag === 'select') {
        selector.addEventListener('change', handler);
    } else {
        selector.addEventListener('input', handler);
    }
}
