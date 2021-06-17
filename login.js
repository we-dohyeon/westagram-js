const inputs = document.querySelectorAll("input");
const loginBtn = document.getElementById("loginBtn");

let idValue = false;
let pwValue = false;

// 함수 표현식과 선언
// 인자와 파라미터
function activeBtn(e, input){

  console.log(e.target.id);
  console.log(e.target.value.length);
  if(e.target.id === id && e.target.value.length > 0) {
    console.log(1);
    idValue = true;
  }

  if(e.target.id === pw && e.target.value.length > 0) {
    console.log(2);
    pwValue = true;
  }

  console.log(idValue, pwValue);

  // if(idValue.length > 0 && pwValue.length > 0){
  //   loginBtn.removeAttribute('disabled');
  // }
}

// input event : value가 변할 때
// change랑 input의 차이
inputs.forEach(input => input.addEventListener("input", e => activeBtn(e, input)));

loginBtn.addEventListener("click", () => {console.log(11)});
