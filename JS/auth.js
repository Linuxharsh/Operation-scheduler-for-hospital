import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { logAction } from "./logger.js";

window.register = function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("User Registered", email);
      alert("Registration Successful");
      window.location.href = "login.html";
    })
    .catch(err => alert(err.message));
};

window.login = function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("User Logged In", email);
      if (email === "admin@hospital.com") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "user-dashboard.html";
      }
    })
    .catch(err => alert(err.message));
};
