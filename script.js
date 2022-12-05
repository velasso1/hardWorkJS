'use strict';

let lang = 'ru';

// Ex. 1

// a)
if (lang == 'ru') {
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Вы выбрали неверное значение');
}

// b)
switch (true) {
    case lang === 'ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;

    case lang === 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Вы выбрали неверное значение');
}

// c)

const ru = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const array = [ru, en];

lang === 'ru' ? console.log(ru) : console.log(en);

// Ex. 2;

let namePerson = 'Матвей';

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент');