// class Product {
//     constructor (name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     discount(){
        
//         let discount = 30
//         console.log(`До цього продукту примінилась знижка - 20грн, тобто ціна: ${this.price - discount}`)
//     }

   
    
// }
// let myProduct = new Product('bike', 270)

// console.log(myProduct.discount());


//2
// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     sMath(){
//         console.log(this.width * this.height / 2)
//     }


// }

// let myRectangle = new Rectangle(10, 4)
// myRectangle.sMath();

//3

// class Client {
//     constructor (name,email){
//       this.name = name;
//       this.email = email;  
//     }

   
// }
// // write ur email here!!!
// let email = 'f';


// function validateEmail(){
//     return email.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
    
// }
// console.log(validateEmail())


//4
// class Transport{
//     constructor(brand,model){
//         this.brand = brand;
//         this.model = model;
//     }
    
//     showInfo() {
//         console.log(Transport.brand,model)
//     }

// }

// class Car extends Transport{
//     constructor(brand,model,year){
//         super(brand,model)
//         this.year = year;

//     }

//     showInfo(){
//         console.log(Car.brand,model,year)
        
//     }
// }


// class Motorcycle extends Transport{
//     constructor(brand,model,engineCapacity){
//         super(brand,model)
//         this.engineCapacity = engineCapacity;

//     }

//     showInfo(){
//         console.log(Car.brand,model,year)
        
//     }
// }


// let transport = new Transport('mercedess','e63');
// let car = new Car('toyota','supra','1999');
// let motorcycle = new Motorcycle('suzuki','KATANA','12')
// transport.showInfo;
// car.showInfo;
// motorcycle.showInfo;
// console.log(transport, car, motorcycle)






