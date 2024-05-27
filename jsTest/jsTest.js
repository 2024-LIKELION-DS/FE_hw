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

//Q3 (X)
do {
  let num_input = prompt("100을 초과하는 숫자를 입력해주세요.");
} while (num_input <= 100);

//Q4 (X)
let str = prompt("문자열을 입력하세요:");
console.log(str);

//Q5 (O)
let date = new Date("May 27, 2022 12:30:00");
alert(date);

//Q6 (X)
const now = now.toISOString();
const today = now.toISOString().split("T")[0];
let getSecondsToday = () => (seconds = ((now - today) / 1000) % 60);

alert(getSecondsToday);

//Q7 (X)

function randomNum() {
  "첫번째 랜덤 난수 : " + Math.random(0, 100);
  "두번째 랜덤 난수 : " + Math.random(0, 100);
  "세번째 랜덤 난수 : " + Math.random(0, 100);
}

document.write(randomNum());

//Q8 (X)
//죄송합니다... 시간이 부족해 못풀었습니다...
