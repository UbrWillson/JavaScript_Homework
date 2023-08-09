
const products = [
    { name: "Product 1", price: 10.99, image: "product1.jpg" },
    { name: "Product 2", price: 19.99, image: "product2.jpg" },
    
  ];
  
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card"); 
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
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