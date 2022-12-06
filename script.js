'use strict';

let lang = 'ru';

const weekDaysRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
const weekDaysEn = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
const error = 'Вы выбрали неверное значение';

// Ex. 1

// a)
if (lang == 'ru') {
    console.log(weekDaysRu);
} else if (lang == 'en') {
    console.log(weekDaysEn);
} else {
    console.log(error);
}

// b)
switch (true) {
    case lang === 'ru':
        console.log(weekDaysRu);
        break;

    case lang === 'en':
        console.log(weekDaysEn);
        break;
    default:
        console.log(error);
}

// c)

const ru = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const array = [ru, en];

lang === 'ru' ? console.log(ru) : console.log(en);

// Ex. 2;

let namePerson = 'Матвей';

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент');