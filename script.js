'use strict';

const arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = new Date().getDay();
let weekBlock = document.createElement('div');
today = 2;

document.body.append(weekBlock);

for (let i = 0; i < arr.length; i++) {

    switch (true) {

        case i === today:
            arr[i] = `<b> ${arr[i]} </b>`;
            break;

        case i === 0 || i === 6:
            arr[i] = `<i> ${arr[i]} </i>`;
            break;
    }
}

weekBlock.innerHTML = arr.join('<br>');
