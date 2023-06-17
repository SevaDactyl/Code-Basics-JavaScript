/*
Допишите функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.

Функция принимает два параметра:

Строка, которую нужно обрезать
Число символов, которые нужно оставить
Пример того, как должна работать написанная вами функция:

// Передаём текст напрямую
// Обрезаем текст, оставляя 2 символа
truncate('hexlet', 2); // he...

// Через переменную
const text = 'it works!';
// Обрезаем текст, оставляя 4 символа
truncate(text, 4); // it w...
Вам нужно самостоятельно реализовать функцию truncate(), в JavaScript такой функции не существует. Реализовать эту функцию можно различными способами, подскажем лишь один из них. Для решения этим способом вам понадобится взять подстроку из строки, переданной первым параметром в функцию. Используйте для этого метод slice(). Подумайте, исходя из задания, с какого индекса и по какой вам надо извлечь подстроку?

  const word = 'welcome';
  // Передавать параметры в метод можно через переменные
  const index = 3;
  word.slice(0, index); // wel
С точки зрения проверочной системы не имеет значения, каким из способов будет реализована функция truncate() внутри, главное – чтобы она выполняла поставленную задачу
*/

const truncate = (text, length) => {
  // BEGIN (write your solution here)
  const result = `${text.slice(0, length)}...`;
  return result;
  // END
};

export default truncate;
