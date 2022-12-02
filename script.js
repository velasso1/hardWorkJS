let num = 266219;

// преобразуем num в строку
let numString = num.toString();

// разобьем строку на отдельный символ и переопределим значение переменной num
num = numString.split("");
let n = num.length;
let count = 1;

for (let i = 0; i < n; i++) {
    count *= num[i];
}

console.log(count);