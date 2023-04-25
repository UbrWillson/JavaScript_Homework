// Рекурсія:
// 1.	Написати рекурсивну функцію, яка рахує факторіал числа.
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }

//   alert( factorial(7) );
// 2.	Написати рекурсивну функцію, яка перевіряє, чи є слово паліндромом.
// function palindromFinder(verb) {
// return verb === verb.split("").reverse().join("");
// }
// console.log(palindromFinder("піп"))
// 3.	**Написати рекурсивну функцію, яка знаходить найбільший спільний дільник двох чисел.

// Робота з масивами:
// 1.	Написати функцію, яка повертає новий масив, де всі значення з попереднього масиву збільшені на 1, але тільки для тих значень, які були менші за середнє значення всього масиву.
// const arr_num = [4, 6, 8, 20, 60, 40, 80];

// function sum_method(total, num) {
//   return total + num;
// }

// function summered() {
//   for (let i = 0; i < arr_num.length; i++) {
//     let arr_length = arr_num.length;
//     let sum = arr_num.reduce(sum_method);
//     avarage_num = sum / arr_length;
//   }
//   return avarage_num;
// }

// function arr_plus(avarage_num) {
//   let new_arr_num = [];
//   for (let i = 0; i < arr_num.length; i++) {
//     if (arr_num[i] < avarage_num) {
//       new_arr_num.push(arr_num[i] + 1);
//     }
//   }
//   return new_arr_num;
// }

// let avarage_num = summered();
// console.log(arr_plus(avarage_num));

// 2.	Написати функцію, яка знаходить найдовше слово в реченні та повертає його разом з довжиною.
// function findLongestWord(sentence) {
//   let words = sentence.split(" ");

//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return [longestWord];
// }
// console.log(findLongestWord("один два три чотириииииии"))
// Написати функцію, яка перетворює масив чисел на масив букв відповідно до їх порядкового номера в алфавіті (1 = A, 2 = B, і т.д.).
// function convertToLetters(numbers) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const result = [];
  
//     for (let i = 0; i < numbers.length; i++) {
//       const index = numbers[i] - 1;
//       const letter = alphabet[index];
//       result.push(letter);
//     }
  
//     return result;
//   }
// 4.	Написати функцію, яка повертає новий масив, де всі елементи, які повторюються у попередньому масиві, відфільтровані.
// const arr_replic = ["a","d","r","s","f",];

// function filterDuplicates(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// }

// const filteredArr = filterDuplicates(arr_replic);
// console.log("Filtered array:", filteredArr);
// 5.	**Написати функцію, яка повертає новий масив, де кожен елемент масиву є сумою двох попередніх елементів (перші два елементи можуть бути задані вручну).
// const arr = [2, 4];

// function sumOfPrevTwo(arr) {
//   const newArr = [...arr];

//   for (let i = 2; i < arr.length; i++) {
//     newArr.push(arr[i-2] + arr[i-1]);
//   }

//   return newArr;
// }

// const newArr = sumOfPrevTwo(arr);
// console.log("New array:", newArr);
// 6.	**Намалювати в консолі дошку для гри в шахи приклад:

// const size = 8;


// function generateRow(rowNum) {
//   let row = '';
//   for (let i = 0; i < size; i++) {
//     if ((rowNum + i) % 2 === 0) {
//       row += '#';
//     } else {
//       row += ' ';
//     }
//   }
//   return row;
// }


// let rows = '';
// for (let i = 0; i < size; i++) {
//   rows += generateRow(i) + '\n';
// }


// console.log(rows);