//

//

function logout() {
  window.location.href = "../Login/login.html";
}

function goToProducts() {
  window.location.href = "../Products/products.html";
}

var users = JSON.parse(localStorage.getItem("users"));

var usernameElement = document.getElementById("username");

// if (users[0].name != null || users[0].name != undefined) {
//   usernameElement.innerHTML = users[0].name;
// } else {
//   usernameElement.innerHTML = "Guest";
// }

function goToCart() {
  window.location.href = "../cart/cart.html";
}

var slideIndex = 0;
let slides = document.getElementsByClassName(".slide");
var slideTimeout;

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  // if (slideIndex > slides.length) {
  //   slideIndex = 0;
  // } else if (slideIndex < 0) {
  //   slideIndex = slides.length - 1;
  // }
  // slides[slideIndex - 1].style.display = "block"; // TypeError: Cannot set property 'display' of undefined
  // slides[slideIndex - 1].style.display = "block";
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  console.log(slides[slideIndex - 1]); // undefined
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(showSlides, 2000);
}
showSlides();

function prevSlide() {
  slideIndex--;
  showSlides();
}
function nextSlide() {
  slideIndex++;
  showSlides();
}
// function prevSlide() {
//   slideIndex -= 2;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlides();
// }

// function nextSlide() {
//   showSlides();
// }

// function prevSlide() {
//   showSlides(slideIndex);
//   showSlides();
// }

// function nextSlide() {
//   showSlides(slideIndex);
//   // showSlides();
// }

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
