// 함수 표현식과 선언
// change랑 input의 차이  => input event : value가 변할 때
//init 의 이유


const inputs = document.querySelectorAll("input");
// const inputs = document.getElementsByClassName("loginBoxWrapper")[0];
const loginBtn = document.getElementById("loginBtn");

function handleBtn(btn){
  if(btn){
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    loginBtn.style.cursor = "pointer";

    if(window.event.keyCode === 13){
      success();
    }
  } else {
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.5;
    loginBtn.style.cursor = "default";
  }
}

function checkValidation(value, id){
  if(id === "id" && value.length > 0){
    return true;
  } else if(id === "id" && !value.length) {
    return false;
  } else if(id === "pw" && value.length > 0){
    return true;
  } else if (id === "pw" && !value.length) {
    return false;
  }
}

function handleInput(e) {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkValidation(idValue, e.target.id);
  const isValidPw = checkValidation(pwValue, e.target.id);

  if(isValidId && isValidPw){
    handleBtn(true);
  } else {
    handleBtn(false);
  }
}

function success() {
  alert("환영합니다!");
  // window.open("http://127.0.0.1:5500/main.html");
  location.replace("http://127.0.0.1:5500/main.html");
}

init = () => {
  inputs.forEach(input => input.addEventListener("input", handleInput));
  loginBtn.addEventListener("click", success);
  inputs.forEach(input => input.addEventListener("keyup", handleInput));
  // inputs.addEventListener("input", activeBtn)
}

init();