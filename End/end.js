function goToProducts() {
  window.location.href = "../products/products.html";
}

function goToCart() {
  window.location.href = "../cart/cart.html";
}

function logout() {
  window.location.href = "../Login/login.html";
}

function goToHome() {
  window.location.href = "../Home/home.html";
}

var users = JSON.parse(localStorage.getItem("users"));

var usernameElement = document.getElementById("username");

if (users[0].name != null || users[0].name != undefined) {
  usernameElement.innerHTML = users[0].name;
} else {
  usernameElement.innerHTML = "Guest";
}
