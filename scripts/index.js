
const products = [
    { name: "Product 1", price: 10.99, image: "/img/laptop.jpg" },
    { name: "Product 2", price: 19.99, image: "/img/laptop2.jpg" },
    { name: "Product 3", price: 102.99, image: "/img/laptop3.jpg" },
    { name: "Product 4", price: 120.99, image: "/img/phone1.jpg" },
    { name: "Product 5", price: 15130.99, image: "/img/phone2.jpg" },
    { name: "Product 6", price: 14210.99, image: "/img/phone3.jpg" },
    { name: "Product 7", price: 16450.99, image: "/img/pc1.jpg" },
    { name: "Product 8", price: 109.99, image: "/img/pc2.jpg" },
    { name: "Product 9", price: 1097.99, image: "/img/pc3.jpg" }
    
    
  ];
  
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
  
    return card;
  }
  
  
  const productContainer = document.querySelector("#product-container");
  
  products.forEach(product => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });