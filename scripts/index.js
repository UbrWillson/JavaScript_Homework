// FIRST EXERCISE
// •	Визначте дві змінні: admin і name.
let admin;
let name;

// // •	Запишіть рядок "Джон" у змінній name.
let name_1 = "Джон";

// •	Перезапишіть значення зі змінної name до admin.

admin = name_1;
// // •	Виведіть на екран значення admin, використовуючи функцію alert(має показати «Джон»).
alert(admin);
// // SECOND EXERCISE
// // •	Створіть змінну назви нашої планети. Як би ви її назвали?
let Planet = "Earth";
// // •	Створіть змінну для зберігання імені відвідувача сайту. Як би ви назвали таку змінну?
let Login = "UserName";
// // •	Після виведіть їх у консоль у вигляді console.info
console.log(Planet, Login);
// // 3. Створити 3 змінні, отримати їх значення з prompt і вивести їх одна за одною в консоль у вигляді варнінга.
let Country = prompt("Ukraine");
let Region = prompt("Kyivska Region");
let City = prompt("Kyiv");
console.warn("Ukraine");
console.warn("Kyivska Region");
console.warn("Kyiv");
// 4. З prompt отримати рік народження та ім’я, при умові що особі буде більше 18 дозволити гуляти, у випадку якщо ні то заборонити.
let YearOfBirth = prompt("Якого ви року народження?");
if (YearOfBirth > 2005) alert("Тобі не можна гуляти");
if (YearOfBirth < 2005) alert("Тобі можна гуляти");
if (YearOfBirth == 2005) alert("Тобі можна гуляти");
let Name = prompt("Яке ваше ім'я?");
if (Name == "Владислав") {
  alert("Дякую за відповідь!");
} else {
  alert("Дякую за відповідь!");
}
// З prompt отримати число і вивести чи входить воно до діапазону чисел від 10 до 1100 включно.
let number = prompt("Введіть число");
if (number < 10) alert("Це число не входить в діапазон.");
if (number > 1100) {
  alert("Це число не входить в діапазон.");
} else {
  alert("Це число входить в діапазон");
}
