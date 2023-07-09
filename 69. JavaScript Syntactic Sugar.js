/*
Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в которой удален переданный символ во всех его позициях. Регистр символов важен.

const str = 'If I look back I am lost';
filterString(str, 'I'); // 'f  look back  am lost'
filterString('zz Zorro', 'z'); // ' Zorro'
*/

// BEGIN (write your solution here)
const filterString = (str, char) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        const currentChar = str[i];
        if (currentChar !== char) {
            result = `${result}${currentChar}`;
        }
        i += 1;
    }

    return result;
}
// END

export default filterString;
