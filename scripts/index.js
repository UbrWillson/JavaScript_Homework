// 1.	TASK => {
//     SubTask1: “Створіть об'єкт, який представляє вашу улюблену тварину. Додайте властивості, такі як ім'я, вид, вік та характеристики.”,
//     Subtask2: “Створіть функцію, яка виводить на екран всі властивості об'єкта, який ви створили в попередньому завданні.”,
//     SubTask3: “Створіть функцію, яка змінює значення властивості вашого об'єкта.”
//     };
    
//     let animal_descr = {id:1,type:"cat",name:"jack",age:12,speed:"120 km per second"}

//     function show_animal(){
//         return animal_descr
        
//     }
//     console.log(show_animal())
//     function speed_fix(){
//         animal_descr.speed = "10 km per hour"
//         return animal_descr;
//     }
// console.log(speed_fix())
//     console.log(speed_fix())
// 2.	TASK => {
//     SubTask1:  “Створіть два об'єкти, які представляють дві різні машини. Включіть властивості, такі як марка, модель, рік випуску та характеристики. Порівняйте ці два об'єкти та виведіть на екран результат порівняння.” ,
//     SubTask2: “Створіть функцію, яка видаляє властивість з вашого об'єкта.”
//     };

// let car_1 = {car_brand:"mercedes",model:"GLS",year_of_develop:2016, horse_power:340, type_of_fuel:"diesel"}


// let car_2 = {car_brand:"bmw",model:"x6",year_of_develop:2016, horse_power:355, type_of_fuel:"diesel"}


// function show_car_aspects(car_1, car_2){
   
//             if(car_1.car_brand === car_2.car_brand
//                 && car_1.car_model === car_2.model
//                 && car_1.year_of_develop === car_2.year_of_develop
//                 && car_1.horse_power === car_2.horse_power
//                 && car_1.type_of_fuel === car_2.type_of_fuel
//                 ){
//                     return "that cars are identical"
//                 }
//                 else {
//                     return "That cars have some differences"
//                 }
//         }
    
    
    

// console.log(show_car_aspects(car_1, car_2))

// function object_deleter(obj, item){
// delete obj[item]

// }
// object_deleter(car_2, "horse_power")
// console.log(car_2)

// 3.	TASK => {
//     SubTask1: “Створіть об'єкт, який представляє користувача вашого веб-сайту. Включіть властивості, такі як ім'я, електронна пошта, пароль та інші персональні дані.” ,
//     Subtask2: “Створіть функцію, яка перевіряє, чи введений користувачем пароль співпадає з паролем, збереженим у вашому об'єкті.”,
//     SubTask3: “Створіть функцію, яка перебирає всі властивості вашого об'єкта та виводить їх на екран.”
//     };    

// let personal_user_data = {name:"Jack",email:"gfkjgdfsh@gmail.com",password:1234567,surname:"Jackson"}

// function password_checker(obj){
//     let enter_password = prompt("Введіть пароль")
// if(enter_password == obj.password){
//     alert ("the password is correct")
// } 
// else{
//     alert("the password is not correct")
// } 
// }
// password_checker(personal_user_data)
// function transcribing(object){
// for(let item in object){
//     console.log(item + ":" + object[item])
// }

// }

// transcribing(personal_user_data)

// 4.	TASK => {
//     SubTask1:  “Створіть об'єкт, який представляє електронний магазин. Включіть властивості, такі як назва, адреса, список товарів та їх характеристики.” ,
//     SubTask2: “Створіть функцію, яка сортує товари у вашому електронному магазині за ціною від найвищої до найнижчої.” (Метод сортування array.sort())
//     };
    
let shops =[ {name:"SIlpo", adress:"metro_Tarasa_shevchenka", list_of_items: "sausage", price:200},
{name:"ATB", adress:"shuliavska_street", list_of_items: "cabage", price:100},
{name:"Novus", adress:"maidan_nezalezhnosti_street", list_of_items: "tomato", price:300}
]

function item_sorter(object){
    for(let item in object){
        object.sort(object.price)
    }
}
item_sorter(shops)
console.log(shops)
