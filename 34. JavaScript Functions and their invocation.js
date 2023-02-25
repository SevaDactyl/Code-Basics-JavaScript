/* 
В коде программы определены две константы, содержащие имена компаний. Посчитайте их общую длину в символах и выведите ее на экран.
*/

import { length } from 'hexlet-basics/string';

const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN (write your solution here)
const sum = length(company1) + length(company2);
console.log(sum);
// END