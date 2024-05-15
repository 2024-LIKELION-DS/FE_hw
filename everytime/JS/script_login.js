let user_id = document.querySelector("#user_id");
let user_pw = document.querySelector("#user_pw");
let submit = document.querySelector("#submit");

function submitColor() {
  if (user_id.value !== "" && user_pw.value !== "") {
    //trim():
    submit.style.backgroundColor = "#ff0000";
  } else {
    submit.style.backgroundColor = "#989898";
  }
}

submitColor(); //초기값 - 회색으로 설정
user_id.addEventListener("input", submitColor); //값이 입력될 때마다 함수 실행!!
user_pw.addEventListener("input", submitColor);
