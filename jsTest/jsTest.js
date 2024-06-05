// 채점 결과: 3점/8점

//Q1 (O)
let lion = () => "Hello LikeLion12";

//Q2 (O)
let input = prompt("숫자를 입력하세요!!");
let number = parseInt(input, 10);
let result =
  number % 2 == 0
    ? alert(number + "는 짝수입니다.")
    : alert(number + "는 홀수입니다.");

//Q3 (X) - 오답 수정 완
let num_input;
do {
  num_input = parseInt(prompt("100을 초과하는 숫자를 입력해 주세요."), 10);
} while (num_input <= 100);

//Q4 (X) - 오답 수정 완
let str = prompt("문자열을 입력하세요:");
console.log("ke1");

//Q5 (O)
let date = new Date("May 27, 2022 12:30:00");
alert(date);

//Q6 (X) - 오답 수정 완
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let milli_seconds = now - today;
  return Math.floor(milli_seconds / 1000);
}

let secondsToday = getSecondsToday();
alert(secondsToday);

//Q7 (X) - 오답 수정 완

function randomNum() {
  return Math.floor(Math.random() * 101);
}

let firstRandomNum = randomNum();
let secondRandomNum = randomNum();
let thirdRandomNum = randomNum();
document.write("첫번째 랜덤 난수 : " + firstRandomNum);
document.write("두번째 랜덤 난수 : " + secondRandomNum);
document.write("세번째 랜덤 난수 : " + thirdRandomNum);

//Q8 (X) - 오답 수정 완
function change() {
  var elem = document.getElementById("name");
  if (elem.innerHTML === "likelion_1") {
    elem.innerHTML = "likelion_2";
  } else if (elem.innerHTML === "likelion_2") {
    elem.innerHTML = "likelion_3";
  } else {
    elem.innerHTML = "likelion_1";
  }
}
