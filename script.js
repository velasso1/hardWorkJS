'use strict';

const arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const today = new Date().getDay();

let weekBlock = document.createElement('div');
document.body.append(weekBlock);

arr.forEach((item) => {
    arr.splice();

    if (item === 'Воскресенье' || item === 'Суббота') {
        weekBlock.append(item);
    } else {
        weekBlock.append(item);
    }
});





