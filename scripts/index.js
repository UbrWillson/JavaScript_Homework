
let products = [
    { name: "Product 1", price: 10.99, image: "/img/laptop.jpg" },
    { name: "Product 2", price: 19.99, image: "/img/laptop2.jpg" },
    { name: "Product 3", price: 102.99, image: "/img/laptop3.jpg" },
    { name: "Product 4", price: 120.99, image: "/img/phone1.jpg" },
    { name: "Product 5", price: 15130.99, image: "/img/phone2.jpg" },
    { name: "Product 6", price: 14210.99, image: "/img/phone3.jpg" },
    { name: "Product 7", price: 16450.99, image: "/img/pc1.jpg" },
    { name: "Product 8", price: 109.99, image: "/img/pc2.jpg" },
    { name: "Product 9", price: 1097.99, image: "/img/pc3.jpg" },
    
    
  ];
  let cart = [];
  

  

  const categorySelect = document.querySelector("#category");
const priceRange = document.querySelector("#price");
const priceValue = document.querySelector("#priceValue");
const productCont = document.querySelector("#product-container");
const btnCart = document.querySelector(".CartBtnAdd");
const CartOpener = document.querySelector("#cart");
const CartWindow = document.querySelector("#cart-window");
const CartCloser = document.querySelector(".btn-cart-closer");
const CartItems = document.querySelector(".cart-items");
const LoginWindow = document.querySelector(".login-window");
const LoginCloser = document.querySelector(".btn-login-closer");
const LoginOpener = document.querySelector("#login");
const usernameInpt = document.querySelector(".username");
const passwordInpt = document.querySelector(".password");
const submitBtn = document.querySelector(".submit");
const LogOutBtn = document.querySelector("#logout");
const addproductbtn = document.querySelector(".add_product_btn");
const creatorWindow = document.querySelector(".creator-window");
const creatorCloser = document.querySelector(".btn-creator-closer");
const CreatorOpener = document.querySelector(".add_product_btn");
const NameForProduct = document.querySelector(".Name_creator");
const PriceForProduct = document.querySelector(".price_creator");
const ImageForProduct = document.querySelector(".img_creator");
const submitCreation = document.querySelector(".create-prdct")


let trueUsername = "admin";
let truePassword = "admin";
let RegistrationValue = false;




  
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card"); 
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.classList.add('product-img')
    card.appendChild(image);
  
    const name = document.createElement("h3");
    name.textContent = product.name;
    card.appendChild(name);
  
    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;
    card.appendChild(price);

    const addCartbtn = document.createElement("button");
    addCartbtn.textContent = "ADD TO CART";
    addCartbtn.classList.add("CartBtnAdd");
    addCartbtn.addEventListener("click", () => {
        cart.push(product);
        updateCart(); 
    });
    card.appendChild(addCartbtn);
    
    submitCreation.onclick = function productCreation(){
    
      console.log(NameForProduct.value)
      console.log(PriceForProduct.value)
      console.log(ImageForProduct.value)
      products.push({name:NameForProduct.value,price:PriceForProduct.value,image:ImageForProduct.value});
      console.log(products)
      return products;
     }
    

    return card;
  }

  
  
function updateCart() {
  CartItems.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
        CartItems.appendChild(listItem);
    });
}
  
  function updatePriceValue() {
    priceValue.textContent = `$${priceRange.value}`;
}

function filterProducts() {
    const selectedCategory = categorySelect.value;
    const maxPrice = parseFloat(priceRange.value);

    productCont.innerHTML = ""; 

    products.forEach(product => {
        if ((selectedCategory === "all" || product.name.toLowerCase().includes(selectedCategory)) &&
            product.price <= maxPrice) {
            const card = createProductCard(product);
            
            const addCartBtn = card.querySelector(".CartBtnAdd");
            addCartBtn.addEventListener("click", () => {
                console.log("Added to cart:", product.name);
            });

            productCont.appendChild(card); 
        }
    });
}

// select btns
categorySelect.addEventListener("change", filterProducts);
priceRange.addEventListener("input", updatePriceValue);
priceRange.addEventListener("change", filterProducts);

updatePriceValue(); 
filterProducts();

//cart
CartOpener.onclick = function openCart() {
  CartWindow.style.display = "block";
    updateCart();
}


CartCloser.onclick = function closeCart(){
  CartWindow.style.display = "none"
}





//login
LoginOpener.onclick = function openLogin(){
  LoginWindow.style.display = "block"
 }
 
 LoginCloser.onclick = function closeLogin(){
  LoginWindow.style.display = "none"
 }

  

  submitBtn.onclick = function login(){
    if(usernameInpt.value === trueUsername && passwordInpt.value === truePassword){ 
      console.log(RegistrationValue);
      RegistrationValue = true;
      console.log(RegistrationValue)
      if(RegistrationValue === true){
      CartOpener.style.display = "block"; 
      LogOutBtn.style.display = "block";
        CreatorOpener.style.display = "block";

      LoginWindow.style.display = "none";
      LoginOpener.style.display = "none";
      usernameInpt.value = "";
      passwordInpt.value = "";


    }
      }
    else{alert("your password or username is incorrect!");
    usernameInpt.value = "";
    passwordInpt.value = "";

  }
    
  }

  LogOutBtn.onclick = function logOutProcess(){
    CartOpener.style.display = "none"; 
      LogOutBtn.style.display = "none";


      
      LoginOpener.style.display = "block";
  }


  // add product btn
  CreatorOpener.onclick = function openCreation(){
    creatorWindow.style.display = "block"
   }
   
   creatorCloser.onclick = function closeCreation(){
    creatorWindow.style.display = "none"
   }


   




  







