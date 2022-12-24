/* Найдите в программе необъявленную переменную и объявите ее, присвоив ей значение 'Dragon';

После выполнения программы результат на экране должен выглядеть так:

Targaryen
and
Dragon */

/* eslint prefer-const: 0 */

let family = 'Targaryen';

// BEGIN
let pet = 'Dragon';
// END

console.log(family);
console.log('and');
console.log(pet);