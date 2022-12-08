'use strict';

const someFunc = function (arg) {
    if (typeof arg !== 'string') {
        return 'that not a string';
    }

    let string = arg.trim();

    if (string.length >= 30) {
        return (string.slice(0, 30) + '...');
    } else {
        return (string);
    }
};