"use strict";

const inputs = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.getElementById("loginBtn");

const handleInput = function () {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkValue(idValue);
  const isValidPw = checkValue(pwValue);

  if (isValidId && isValidPw) {
    handleBtn(true);
  } else {
    handleBtn(false);
  }
};

function checkValue(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function handleBtn(btnValid) {
  // 3항 연산자
  // loginBtn.disabled = !btnValid ? true : false;
  // loginBtn.style.opacity = btnValid ? 1 : 0.5;
  // loginBtn.style.cursor = btnValid ? "pointer" : "default";

  if (btnValid) {
    // button active
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    loginBtn.style.cursor = "pointer";

    if (window.event.keyCode === 13) {
      success();
    }
  } else {
    // button deactive
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.5;
    loginBtn.style.cursor = "default";
  }
}

function success() {
  alert("환영합니다!");
  location.replace("http://127.0.0.1:5500/main.html");
}

function init() {
  inputs.addEventListener("input", handleInput);
  inputs.addEventListener("keyup", handleInput);
  loginBtn.addEventListener("click", success);
}

init();
