//시험 결과 : 2점

// # 1 1점
// let lion = () => "Hello LikeLion12";

// # 2 1점
//
function showPrompt() {
  let input = prompt("숫자를 입력하세요!!");
  let number = parseInt(input, 10);
  let result = number % 2;
  result == 0
    ? alert(number + "는 짝수입니다.")
    : alert(number + "는 홀수입니다.");
}

// # 3 0점
//
function print100() {
  let numInput;
  do {
    numInput = prompt("100을 초과하는 숫자를 입력해주세요.");
    numInput = Number(numInput);
  } while (numInput <= 100 || isNaN(numInput));
}

// # 4 0점
//
function findK() {
  let str = prompt("문자열을 입력하세요:");
  let kel = str.indexOf("k");
  let res = str.substring(kel, kel + 3);
  console.log(res);
}

// # 5 0점
//
let date = new Date(2022, 4, 27, 0, 30);
alert(date);

// # 6 0점
//
function getSecondsToday() {
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
alert(getSecondsToday());

// # 7 0점
//
function randomNum() {
  for (let i = 1; i <= 100; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(i + "번째 랜덤난수: " + randomNumber);
  }
}

// # 8 0점
//
function change() {
  let spanElement = document.getElementById("name");
  let currentText = spanElement.textContent;

  if (currentText === "a") spanElement.textContent = "b";
  else if (currentText === "b") spanElement.textContent = "c";
  else spanElement.textContent = "a";
}
