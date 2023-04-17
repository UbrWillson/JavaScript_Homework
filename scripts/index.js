// // 1.	Напишіть програму, яка перевіряє, чи є введене число парним або непарним, та виводить відповідне повідомлення за допомогою конструкції if.
// let number = prompt('Введіть цифру')
// if (number % 2 == 0){
//     alert('число парне')
// }
// else if (number % 2 != 0) {
//     alert('число не парне')
// }

// // 2.	Напишіть програму, яка перевіряє, чи є введене число меншим за 10, більшим за 5 або рівним 7, та виводить відповідне повідомлення за допомогою конструкції if else if.
// let number = prompt('Введіть значення');

// if (number === 7) {
//     alert('Значення рівне 7');
// }
// else if (number >= 5 && number <= 10) {
//     alert('Значення більше ніж 5 та меньше ніж 10'); 
// }
// else if (number <= 5){
//     alert('Значення меньше ніж 5')
// }
// else if (number >= 10){
//     alert('Значення більше ніж 10')
// }

// 3.	*Напишіть програму, яка перевіряє, яка пора року зараз (за місяцем), та виводить відповідне повідомлення за допомогою конструкції switch, на вході номер місяця.
// let season = prompt('Введіть місяць');

// switch(season){
//     case 'січень':
//         alert('Зараз зима' + ' Перший місяць')
//         break;

// case 'лютий':
// alert('Зараз зима' + ' Другий місяць')
// break;

// case 'березень':
// alert('Зараз зима' + ' Третій місяць')
// break;

// case 'квітень':
// alert('Зараз зима' + ' Четвертий місяць')
// break;

// case 'травень':
// alert('Зараз зима' + ' Пятий місяць')
// break;

// case 'червень':
// alert('Зараз зима' + ' Шостий місяць')
// break;

// case 'липень':
// alert('Зараз зима' + ' Сьомий місяць')
// break;

// case 'серпень':
// alert('Зараз зима' + ' Восьмий місяць')
// break;

// case 'вересень':
// alert('Зараз зима' + ' Девятий місяць')
// break;

// case 'жовтень':
// alert('Зараз зима' + ' Десятий місяць')
// break;

// case 'листопад':
// alert('Зараз зима' + ' Одинадцятий місяць')
// break;

// case 'грудень':
// alert('Зараз зима' + ' Дванадцятий місяць')
// break;

// default:
//     alert('Будь-ласка введіть місяць на українській')
// }


// 4.	Напишіть функцію, яка приймає два аргументи - число і потужність, і повертає число, піднесене до відповідної потужності.
// let number = 0;
// let grade = 0;
// function showMessage() {
// let number = prompt('Введіть цифру')
// let grade =  prompt('Ведіть степінь')
// if(number == grade){
//     alert(number + grade)
// }
// else{
//     alert('степінь з числом не співпадають')
// }

// }

// alert(showMessage())

// 5.	*Напишіть функцію, яка приймає два аргументи - число і рядок, і повертає рядок, який складається з числа повторених копій введеного рядка.
// let number;
// let line_text;

// function show_massage(){
//     let number = prompt('Введіть цифру')
//     if(number){
//      return('кількість рядків:' + number)
//     }
// }
// document.write(show_massage())


// 6.	*Створіть програму, яка використовує вбудований метод Math.random (), щоб створити генератор випадкових чисел.
// let number;

// function show_massage(){
//     return Math.random();
    

// }
// document.write(show_massage())
// 7.	Створіть програму, яка знаходить і виводить на екран найбільше число з масиву чисел.

// function show_highest_number(){
//     const arr = [1, 13, 12, 11, 15]
//     return (Math.max(...arr));
// }
// alert(show_highest_number())

// 8.	Створіть функцію яка перевіряє валідність пароля і повтора пароля, повертає булевий результат.
// let password = 0;

// function valid_password_checker(){
// let password = prompt('Введіть пароль')
// let password_check = prompt('Повторіть пароль')
// if(password != password_check){
//     alert ("паролі не співпадають")
// }
// if(password == '651234'){
//     return Boolean(true)
// }
// if(password_check == '651234'){
//     return Boolean(true)
// }
// if(password != password_check){
//     alert ("паролі не співпадають")
// }
// else{
//     return Boolean(false)
// }




// }
// document.write(valid_password_checker())

// 9.	Напишіть функцію, яка приймає два числа і повертає їх суму, використовуючи метод Math.abs() для отримання абсолютного значення одного з чисел, а потім додавши його до іншого числа.
// let first_number = 0;
// let second_number = 0;

// function show_massage(){
//     let first_number = 3;
//     let second_number = 7;
//     let sum_numbers = first_number + second_number
//     return(Math.abs(first_number + second_number))
// }
// document.write(show_massage())

// 10.	Напишіть функцію, яка генерує випадкове число від 1 до 10 і повертає його, використовуючи метод Math.random().
// let number;

// function show_massage(){
//     return Math.floor(Math.random() * 11)
// }
// document.write(show_massage())

// 11.	Напишіть функцію, яка приймає число і повертає його факторіал, використовуючи метод Math.floor() для округлення числа до цілого числа і цикл для обчислення факторіалу.
// let number = 0;

// function show_massage(){
//     let number = prompt('Введіть число')
//     return Math.floor(number)

// }
// document.write(show_massage())

// 12.	Напишіть функцію, яка приймає число та перевіряє, чи є воно простим, використовуючи метод Math.sqrt() для знаходження квадратного кореня числа та цикл для перевірки дільників числа.
// let number = 0;

// function show_massage(){
//     let number = prompt('Введіть число')
//     return Math.sqrt(number)
// }
// document.write(show_massage())