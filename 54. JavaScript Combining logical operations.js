/*
Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true
*/

// Первое решение

// BEGIN (write your solution here)
const isInternationalPhone = (number) => 
{
    const firstSymbol = number[0];
    return firstSymbol === "+";
}
// END

export default isInternationalPhone;

// Второе решение

// BEGIN (write your solution here)
const isInternationalPhone = (phone) => phone[0] === '+';
// END

export default isInternationalPhone;
