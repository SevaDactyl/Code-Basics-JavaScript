/*
Напишите функцию isPensioner(), которая принимает один параметр — возраст человека, и проверяет, является ли он пенсионным. Пенсионером считается человек, достигший возраста 60 лет и больше.

Примеры вызова:

isPensioner(75); // true
isPensioner(18); // false
*/

// BEGIN (write your solution here)
const isPensioner = (age) => age >= 60;
// END

export default isPensioner;
