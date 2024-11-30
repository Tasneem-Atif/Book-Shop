function logout() {
  window.location.href = "../Login/login.html";
}

function goToHome() {
  window.location.href = "../Home/home.html";
}

function goToProducts() {
  window.location.href = "../Products/products.html";
}

var users = JSON.parse(localStorage.getItem("users"));

var usernameElement = document.getElementById("username");

if (users[0].name != null || users[0].name != undefined) {
  usernameElement.innerHTML = users[0].name;
} else {
  usernameElement.innerHTML = "Guest";
}

function goToCart() {
  window.location.href = "../cart/cart.html";
}

function addToCart(productName, productPrice, productImg) {
  var cartCount = document.getElementById("cart-count");
  cartCount.textContent = parseInt(cartCount.textContent) + 1;

  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var price = parseFloat(productPrice.replace("$", ""));
  //
  cart.push({
    name: productName,
    price: price,
    img: productImg,
    quantity: 1,
  });

  localStorage.setItem("cart", JSON.stringify(cart));
}

var product = JSON.parse(localStorage.getItem("selectedProduct"));

function proDetail(product) {
  var containerDesc = document.getElementById("productDetails");
  if (product) {
    containerDesc.innerHTML = `
    <img src="${product.img}">
    <div class="info">
    <h1>${product.title}</h1>
    <p class="price">${product.price}</p>
    <button onclick="addToCart('${product.title}',
    '${product.price}',
    '${product.img}')">Add to Cart</button>
    </div>
    `;
  } else {
    containerDesc.innerText = "Product not found.";
  }
}

proDetail(product);
