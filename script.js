'use strict';

const greet = document.createElement('p');
const today = document.createElement('p');
const time = document.createElement('p');
const toNewYear = document.createElement('p');
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();
let newDate = new Date(2024, 0, 1);

switch (true) {
    case hours >= 23 || hours < 5:
        greet.innerHTML = 'Доброй ночи!';
        break;

    case hours >= 18:
        greet.innerHTML = 'Добрый вечер!';
        break;

    case hours >= 9:
        greet.innerHTML = 'Добрый день!';
        break;

    case hours >= 5:
        greet.innerHTML = 'Доброе утро!';
        break;
}

today.innerHTML = `Сегодня: ${days[date.getDay()]}`;
time.innerHTML = `Текущее время: ${date.toLocaleTimeString('en')}`;
toNewYear.innerHTML = `До нового года осталось ${Math.floor((newDate - Date.now()) / 86400000)} дней`;
// console.log(Math.floor((newDate - Date.now()) / 86400000));
// console.log(Date.now());


document.body.append(greet);
document.body.append(today);
document.body.append(time);
document.body.append(toNewYear);

