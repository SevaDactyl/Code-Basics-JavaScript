/*
Функция из теории учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2
*/

/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count += 1;
        }
        i += 1;
    }
    return count;
};
// END

export default countChars;
