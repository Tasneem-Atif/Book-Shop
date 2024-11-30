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

function goToCart() {
  window.location.href = "../cart/cart.html";
}

var products = [
  {
    img: "./book1.webp",
    title: "Wolfsong",
    price: "29.99 $",
    quantity: 1,
  },
  {
    img: "./book2.webp",
    title: "Dragonfall",
    price: "34.05 $",
    style: "height: 100%",
    quantity: 1,
  },
  {
    img: "./book3.webp",
    title: "Apprentice to the Villain",
    price: "19.40 $",
    style: "height: 100%",
    quantity: 1,
  },
  {
    img: "./book4.webp",
    title: "Under the Whispering Door",
    price: "21.23 $",
    quantity: 1,
  },
  {
    img: "./book5.webp",
    title: "The House in the Cerulean Sea",
    price: "38.04 $",
  },
  {
    img: "./book6.webp",
    title: "Beastologist",
    price: "25.92 $",
    style: "height: 100%",
  },
  {
    img: "./book7.webp",
    title: "The Phantom Tollbooth",
    price: "24.10 $",
    style: "height: 100%",
  },
  {
    img: "book8.webp",
    title: "Percy Jackson",
    price: "19.06 $",
    style: "height: 100%",
  },
  {
    img: "book9.webp",
    title: "Adventure Time",
    price: "34.99 $",
    style: "height: 100%",
  },
  {
    img: "book10.webp",
    title: "Daydream",
    price: "38.00 $",
    style: "height: 100%",
  },
  {
    img: "book11.webp",
    title: "Twelfth Knight",
    price: "29.19 $",
  },
  {
    img: "book12.webp",
    title: "We Deserve Monuments",
    price: "24.90 $",
  },
  {
    img: "book13.webp",
    title: "Swift River",
    price: "15.30 $",
    style: "height: 100%",
  },
  {
    img: "book14.webp",
    title: "bookshops & Bonedust",
    price: "34.70 $",
  },
  {
    img: "book15.webp",
    title: "Legends & Lattes",
    price: "39.29 $",
  },
  {
    img: "book16.webp",
    title: "Assistant To The Villain",
    price: "29.79 $",
    style: "height: 100%",
  },
  {
    img: "book17.webp",
    title: "Wood Pellet Smoker And Girl",
    price: "24.95 $",
  },
  {
    img: "book18.webp",
    title: "Outdoor Cookery",
    price: "59.90 $",
    style: "height: 100%",
  },
  {
    img: "book19.webp",
    title: "Cooking The books",
    price: "34.45 $",
    style: "height: 100%",
  },
  {
    img: "book20.webp",
    title: "Be Ready When The Luck Happens",
    price: "39.40 $",
    style: "height: 100%",
  },
];

var kids = [
  {
    img: "book1.webp",
    title: "Wolfsong",
    price: "29.99 $",
  },
  {
    img: "book2.webp",
    title: "Dragonfall",
    price: "34.05 $",
    style: "height: 100%",
  },
  {
    img: "book3.webp",
    title: "Apprentice to the Villain",
    price: "19.40 $",
    style: "height: 100%",
  },
  {
    img: "book4.webp",
    title: "Under the Whispering Door",
    price: "21.23 $",
  },
  {
    img: "book5.webp",
    title: "The House in the Cerulean Sea",
    price: "38.04 $",
  },
  {
    img: "book6.webp",
    title: "Beastologist",
    price: "25.92 $",
    style: "height: 100%",
  },
  {
    img: "book7.webp",
    title: "The Phantom Tollbooth",
    price: "24.10 $",
    style: "height: 100%",
  },
  {
    img: "book8.webp",
    title: "Percy Jackson",
    price: "19.06 $",
    style: "height: 100%",
  },
  {
    img: "book9.webp",
    title: "Adventure Time",
    price: "34.99 $",
    style: "height: 100%",
  },
];

var romance = [
  {
    img: "book10.webp",
    title: "Daydream",
    price: "38.00 $",
    style: "height: 100%",
  },
  {
    img: "book11.webp",
    title: "Twelfth Knight",
    price: "29.19 $",
  },
  {
    img: "book12.webp",
    title: "We Deserve Monuments",
    price: "24.90 $",
  },
  {
    img: "book13.webp",
    title: "Swift River",
    price: "15.30 $",
    style: "height: 100%",
  },
  {
    img: "book14.webp",
    title: "bookshops & Bonedust",
    price: "34.70 $",
  },
  {
    img: "book15.webp",
    title: "Legends & Lattes",
    price: "39.29 $",
  },
  {
    img: "book16.webp",
    title: "Assistant To The Villain",
    price: "29.79 $",
    style: "height: 100%",
  },
];

var cook = [
  {
    img: "book17.webp",
    title: "Wood Pellet Smoker And Girl",
    price: "24.95 $",
  },
  {
    img: "book18.webp",
    title: "Outdoor Cookery",
    price: "59.90 $",
    style: "height: 100%",
  },
  {
    img: "book19.webp",
    title: "Cooking The books",
    price: "34.45 $",
    style: "height: 100%",
  },
  {
    img: "book20.webp",
    title: "Be Ready When The Luck Happens",
    price: "39.40 $",
    style: "height: 100%",
  },
];

function displayProducts(productsArray) {
  var container = document.getElementById("products");

  container.innerHTML = "";

  for (var i = 0; i < productsArray.length; i++) {
    var product = productsArray[i];
    var productDiv = document.createElement("div");
    productDiv.className = "product";

    var imgStyle = product.style ? 'style="' + product.style + '"' : "";
    productDiv.innerHTML = `
    <img src="${product.img}"
    ${imgStyle}
    onclick="showProDesc('${product.title}')" />
    <div class="product-info">
    <p>${product.title}</p>
    <p class="price">${product.price}</p>
    <button onclick="addToCart('${product.title}',
    '${product.price}',
    '${product.img}')">Add to Cart</button>
    </div>
    `;

    container.appendChild(productDiv);
  }
}

//
function showProDesc(name) {
  for (var i = 0; i < products.length; i++) {
    if (name == products[i].title)
      localStorage.setItem("selectedProduct", JSON.stringify(products[i]));
  }
  window.location.href = "../product/product.html?product=";
}

//

displayProducts(products);

document.getElementById("all").addEventListener("click", function () {
  displayProducts(products);
});

document.getElementById("kids").addEventListener("click", function () {
  displayProducts(kids);
});

document.getElementById("romance").addEventListener("click", function () {
  displayProducts(romance);
});

document.getElementById("cook").addEventListener("click", function () {
  displayProducts(cook);
});

//

var topButton = document.getElementById("topButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

topButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function addToCart(productName, productPrice, productImg) {
  var cartCount = document.getElementById("cart-count");
  cartCount.textContent = parseInt(cartCount.textContent) + 1;

  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var price = parseFloat(productPrice.replace("$", ""));

  cart.push({
    name: productName,
    price: price,
    img: productImg,
    quantity: 1,
  });

  localStorage.setItem("cart", JSON.stringify(cart));
}

//
