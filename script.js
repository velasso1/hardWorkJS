'use strict';

const someFunc = function (arg) {
    typeof arg === 'string' ? console.log('this is a string') : console.log('that not a string');

    arg.trim();

    if (arg.length >= 30) {
        console.log(arg.substr(0, 30) + '...');
    } else {
        console.log('меньше 30');
    }
};