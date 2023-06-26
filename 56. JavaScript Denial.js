/*
В этом уроке вам нужно будет реализовать две функции isPalindrome() и isNotPalindrome()

Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.

isPalindrome('шалаш'); // true
isPalindrome('ага'); // true
isPalindrome('хекслет'); // false

// Слова в функцию могут быть переданы в любом регистре
// Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
isPalindrome('Ага'); // true
Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь функцией reverse()

reverse('мама'); // амам
Функция isNotPalindrome() проверяет что слово НЕ является палиндромом:

isNotPalindrome('шалаш'); // false
isNotPalindrome('ага'); // false
isNotPalindrome('хекслет'); // true
Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание.
*/

// We wrote the reverse() function solely for our exercises
// It uses some techniques that we haven't covered in our lessons yet
const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
const isPalindrome = (word) => word.toLowerCase() === reverse(word.toLowerCase());
const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
