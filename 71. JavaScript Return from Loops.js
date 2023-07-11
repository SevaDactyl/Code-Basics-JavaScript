/*
Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву. Функция принимает два параметра:

Строка
Буква для поиска
hasChar('Hexlet', 'H'); // true
hasChar('Hexlet', 'h'); // false
hasChar('Awesomeness', 'm'); // true
hasChar('Awesomeness', 'd'); // false
*/

// BEGIN (write your solution here)
const hasChar = (str, char) => {
    let i = 0;
    while (i < str.length) 
    {
        if (str[i] === char) 
        {
            return true;
        }
        i += 1;
    }
    return false;
};
// END

export default hasChar;
