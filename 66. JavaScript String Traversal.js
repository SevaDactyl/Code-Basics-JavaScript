/*
Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, как в примере из теории, но делает это в обратном порядке.

const word = 'Hexlet';

printReversedWordBySymbol(word);
// => t
// => e
// => l
// => x
// => e
// => H
*/

/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const printReversedWordBySymbol = (str) => {
    let i = str.length;

    while (i > 0) {
        console.log(str[i - 1])
        i = i - 1;
    }
}
// END

export default printReversedWordBySymbol;
