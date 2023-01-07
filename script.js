'use strict';

const greet = document.createElement('p');
const today = document.createElement('p');
const timing = document.createElement('p');
const toNewYear = document.createElement('p');
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const getDates = function () {
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let nextYear = new Date(date.getFullYear() + 1, 0, 1);

    return { date, day, hours, minutes, seconds, nextYear };
};

const writing = function () {
    let time = getDates();

    switch (true) {
        case time.hours >= 23 || time.hours < 5:
            greet.innerHTML = 'Доброй ночи!';
            break;

        case time.hours >= 18:
            greet.innerHTML = 'Добрый вечер!';
            break;

        case time.hours >= 9:
            greet.innerHTML = 'Добрый день!';
            break;

        case time.hours >= 5:
            greet.innerHTML = 'Доброе утро!';
            break;
    }

    time.hours = time.hours.toString().padStart(2, '0');
    time.minutes = time.minutes.toString().padStart(2, '0');
    time.seconds = time.seconds.toString().padStart(2, '0');

    today.innerHTML = `Сегодня: ${days[time.day]}`;
    timing.innerHTML = `Сейчас: ${time.hours + ':' + time.minutes + ':' + time.seconds}`;
    toNewYear.innerHTML = `До нового года осталось ${Math.floor((time.nextYear - time.date) / 1000 / 24 / 3600)} дней`;

    document.body.append(greet);
    document.body.append(today);
    document.body.append(timing);
    document.body.append(toNewYear);
};

writing();

setInterval(writing, 1000);







