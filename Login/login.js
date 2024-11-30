document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    message.textContent = "";

    if (!email) {
      message.textContent = "Email is required";
      message.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      message.textContent = "Please enter a valid email address";
      message.style.color = "red";
      return;
    }

    if (!password) {
      message.textContent = "Password is required";
      message.style.color = "red";
      return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function (user) {
      return user.email === email;
    });

    if (!user) {
      message.textContent =
        "User does not exist. Redirecting to registration page...";
      message.style.color = "red";
      setTimeout(function () {
        window.location.href = "../Register/register.html";
      }, 3000);
      return;
    }

    if (user.password !== password) {
      message.textContent = "Incorrect password";
      message.style.color = "red";
      return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";

    setTimeout(function () {
      window.location.href = "../Home/home.html";
    }, 1500);
  });

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
