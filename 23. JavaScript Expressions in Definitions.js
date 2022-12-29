/* Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран. Затем полученное значение переводит в рубли и выводит на новой строчке.

Пример вывода для 100 евро:

125
7500
Считаем, что:
- 1 евро = 1.25 долларов
- 1 доллар = 60 рублей */

/* eslint prefer-const: 0 */

let eurosCount = 100;

// BEGIN
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
let rublesCount = dollarsCount * rublesPerDollar;
console.log(rublesCount);
// END