
// 1.	*Написати функцію, яка повертає значення гіпотенузи прямокутного трикутника за заданими довжинами його катетів. Використати методи об'єкту Math для обчислення квадратних коренів та піднесення до степеня.
// let katet_first = 6;
// let katet_second = 8;

// function triangle_func(){
//     let katet_first = Math.pow(6, 2);
//     let katet_second = Math.pow(8, 2);
//     let triangle_sum = Math.sqrt(katet_first + katet_second)
//     return (triangle_sum)



// }
// console.log (triangle_func())



// 2.	*Написати функцію, яка випадковим чином повертає число від 0 до 1 з заданою точністю десяткового запису (наприклад, з точністю до 2 знаків після коми). Використати методи об'єкту Math для генерації випадкового числа та округлення значення.

// function mathematical_func(){
// let number;
// return(Math.random(number)).toFixed(2)
// }
// console.log(mathematical_func())

// Методи роботи з масивами:
// 1.	Написати функцію, яка приймає масив чисел та повертає масив тих же чисел, але в зворотному порядку. Використати методи масивів для зміни порядку елементів.
// const arr_letters = [2, 3, 5, 6, 9, 10]

// function show_arr(){
//     arr_letters.reverse()
//     return (arr_letters)



// }
// document.write(show_arr())

// 2.	Написати функцію, яка приймає масив чисел та повертає суму всіх чисел, які є парними. Використати методи масивів для фільтрування елементів та обчислення суми.

// const arr_num = [7, 34, 62, 2, 21, 14, 88, 77]

// function show_arr(){
//     arr_num.sort();
    
//     let summ = 0;
//     for(let i=0; i<arr_num.length;i++){
//         if(arr_num[i]%2==0){
//             summ+=arr_num[i];
//             console.log("Це число парне "+arr_num[i]);
            
            
//         }
        
//     }
//     console.log(summ);





// }
// document.write(show_arr())

// 3.	Написати функцію, яка приймає масив строк та повертає масив тих же строк, але з видаленими пробілами з початку та кінця. Використати методи масивів для зміни елементів
// let arr_num = [" first element", "second elemnt", "third element "]
// let arr_new =[]
// function show_arr(){
//     for(let i =0; i<arr_num.length;i++){
//        let str = arr_num[i].trim();
//        arr_new.push(str)
//     }
//     console.log(arr_new)
    
    
// }
// console.log(show_arr())
// 1.	Написати функцію, яка приймає число та виводить таблицю множення на це число від 1 до 10. Використати цикл for для створення таблиці.
// const arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function show_arr(){
//     let question_num = prompt("Введіть число")
//     for(let i = 0; i<arr_num.length; i++){
                      
//             let result = question_num*arr_num[i]
//             console.log(result)
//         }


//     }



// console.log(show_arr())
// 2.	Написати функцію, яка приймає масив чисел та повертає масив, який містить тільки унікальні числа. Використати цикл for для перевірки на унікальність та методи масивів для створення нового масиву.
// let arr_num = [2,2,2,3,3,3,1,2,3,4,5,6]
// function uni(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
    
//     return result;
//   }
//   console.log(uni(arr_num))
//   3.	Написати функцію, яка приймає масив строк та повертає найдовшу строку з масиву. Використати цикл for для перебору елементів та методи масивів для порівняння довжин строк.
// let arr_sentences = ["roses are red", "car", "facility", "prehistorical"]

// function thelongeststringfounder(){
//     let thelongeststring = "";
//     for(let i = 0; i<arr_sentences.length; i++){
//         if(thelongeststring.length<arr_sentences[i].length){
//              thelongeststring = arr_sentences[i];
//         }
       
//     }
//     return thelongeststring;
// }
// console.log(thelongeststringfounder())
// 4.	Написати функцію, яка приймає масив чисел та повертає масив, в якому кожен елемент масиву піднесений до квадрата. Використати цикл for для перебору елементів та методи масивів для створення нового масиву.

// let arr_numbers = [2, 4, 6, 8]

// function numberstep () {
//     let new_arr = [];
//     for (let i = 0; i<arr_numbers.length; i++){
//        if(arr_numbers[i]**2 > new_arr){
//         new_arr = arr_numbers[i] ** 2;
//        } 
//     }
//   return new_arr;
// }
// console.log(numberstep())
// 5.	Написати функцію, яка приймає масив строк та повертає масив, в якому кожна строка переведена в нижній регістр. Використати цикл for для перебору елементів та методи масивів для створення нового масиву.
// const arr_caps_sentences = ["HIGHLIGHT", "PUNISHMENT", "INTERAPTION", "SIDEWAY"]

// function show_verbswithout_caps(){
// let new_arr_uncaps = [];
// for (let i = 0; i < arr_caps_sentences.length; i++){
//     new_arr_uncaps.push(arr_caps_sentences[i].toLowerCase())
// }

// return new_arr_uncaps;
// }
// console.log(show_verbswithout_caps())
// 6.	Написати функцію, яка приймає масив чисел та повертає середнє значення цих чисел. Використати цикл for для обчислення суми та методи масивів для обчислення кількості елементів.
// const arr_numbers = [2, 6, 21, 76]
// function Sum_method(total, num){
// return total + num
// }

// function arr_num_sum(){
// let middle_num = 0;
// for (let i = 0; i<arr_numbers.length; i++){
// let sum = arr_numbers.reduce(Sum_method);
// let arr_length = arr_numbers.length;
// middle_num = sum / arr_length;

// }
// return middle_num;




// }
// console.log(arr_num_sum())
