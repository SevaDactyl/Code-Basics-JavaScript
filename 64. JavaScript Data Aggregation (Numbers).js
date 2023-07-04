/*
Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона. Пример вызова:

multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
multiplyNumbersFromRange(6, 6); // 6
*/

/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
function multiplyNumbersFromRange(start, finish) {
    let result = 1;
    let i = start;
    while (i <= finish) {
        result = result * i;
        i++;
    }
    return result;
}
// END

export default multiplyNumbersFromRange;
