let num = 266219;

// 2. реобразуем num в строку
let numString = num.toString();

// разобьем строку на отдельный символ и переопределим значение переменной num
num = numString.split("");
let n = num.length;
let count = 1;

// создадим цикл для вычисления произведения всех чисел
for (let i = 0; i < n; i++) {
    count *= num[i];
}

console.log(count);

// 3. возводим полученное число в 3 степень
count = count ** 3;
console.log(count);

