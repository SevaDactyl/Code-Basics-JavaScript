/*
С помощью метода slice() получите часть предложения, записанного в константу text, c 5 по 15 символы включительно. Полученную подстроку обработайте методом .trim() и выведите на экран длину итоговой подстроки. Выполните эти методы подряд в цепочке без создания промежуточных переменных.

slice()
trim()
*/

/* eslint no-tabs: 0 */

const text = 'When \t\n you play a \t\n game of thrones you win or you die.';

// BEGIN (write your solution here)
console.log(text.slice(4, 15).trim().length);
// END
