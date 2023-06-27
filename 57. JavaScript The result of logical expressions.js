/*
Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не по его индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.

Примеры вызова:

const name = 'Hexlet';

// Обычное обращение возвращает undefined
name[10]; // undefined

// 11 символ соответствует 10 индексу
getLetter(name, 11); // ''

getLetter(name, 1); // 'H'
getLetter(name, 0); // ''
getLetter(name, 6); // 't'
*/

// Первое решение

// BEGIN (write your solution here)
const getLetter = (text, position) => 
{
    return text[position - 1] || "";
};
// END

export default getLetter;

// Второе решение

// BEGIN (write your solution here)
const getLetter = (text, position) => text[position - 1] || '';
// END

export default getLetter;
