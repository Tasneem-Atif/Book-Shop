document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    message.textContent = "";

    if (!name) {
      message.textContent = "Name is required.";
      message.style.color = "red";
      return;
    }

    if (!email) {
      message.textContent = "Email is required.";
      message.style.color = "red";
      return;
    }

    if (!validateEmail(email)) {
      message.textContent =
        "Please enter a valid email address in the format word@word.word";
      message.style.color = "red";
      return;
    }

    if (!password) {
      message.textContent = "Password is required.";
      message.style.color = "red";
      return;
    }

    if (!validatePassword(password)) {
      message.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter and one lowercase letter.";
      message.style.color = "red";
      return;
    }

    if (!confirmPassword) {
      message.textContent = "Please confirm your password";
      message.style.color = "red";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match";
      message.style.color = "red";
      return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userExists = users.some(function (user) {
      return user.email === email;
    });

    if (userExists) {
      message.textContent = "User with this email already exists.";
      message.style.color = "red";
      return;
    }

    users.push({ name: name, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    //

    //

    message.textContent = "Registration successful!";
    message.style.color = "green";

    setTimeout(function () {
      window.location.href = "../Login/login.html";
    }, 1500);

    document.getElementById("registrationForm").reset();
  });

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
}

var inputs = document.querySelectorAll("#registrationForm input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    var message = document.getElementById("message");
    message.textContent = "";
  });
}
