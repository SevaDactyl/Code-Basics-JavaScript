/*
она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

printNumbers(4);
4
3
2
1
finished!
*/

// Первое решение

// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  while (initialNumber >= 1) 
  {
    console.log(initialNumber);
    initialNumber -= 1
  }
  console.log("finished!");
  // END
};

export default printNumbers;

// Второе решение

// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

export default printNumbers;
