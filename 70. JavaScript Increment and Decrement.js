/*
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'
*/

/* eslint-disable no-plusplus */

// BEGIN (write your solution here)
const makeItFunny = (text, n) => {
    let i = 1;
    let result = "";
    while (i < text.length + 1) 
    {
        if (i % n === 0) 
        {
            result = result + text[i - 1].toUpperCase();
        } else 
        {
            result = result + text[i - 1];
        }
        i += 1;
    }
    return result;
}
// END

export default makeItFunny;
