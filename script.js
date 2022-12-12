'use strict';


let arr = ['4342', '3560', '921', '25438', '1367', '2842', '4029'];

let arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
    if (arr[i].charAt(0) === '4') {
        console.log(arr[i]);
    } else if (arr[i].charAt(0) === '2') {
        console.log(arr[i]);
    }
}

let n = 100;
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if ((i % j == 0)) {
            break;
        } else {
            console.log(i);
            break;
        }
    }
}
