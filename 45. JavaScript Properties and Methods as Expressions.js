/*
Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:

First: N
Last: t
Ваша задача извлечь эти символы из строки и вставить в console.log(), не используя промежуточные переменные.
*/

const text = 'Never forget what you are, for surely the world will not';

// BEGIN (write your solution here)
console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);
// END
