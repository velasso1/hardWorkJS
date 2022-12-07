'use strict';

let string;

const someFunc = function (arg) {
    if (typeof arg !== 'string') {
        return 'that not a string';
    }

    string = arg.trim();

    if (string.length >= 30) {
        return (string.slice(0, 30) + '...');
    } else {
        return (string);
    }
};