//Q1
let lion = () => "Hello LikeLion12";

//Q2
let input = prompt("숫자를 입력하세요!!");
let number = parseInt(input, 10);

let result =
  number % 2 == 0 ? number + "는 짝수입니다." : number + "는 홀수입니다.";
alert(result);

//Q3

do {
  input = prompt("100을 초과하는 숫자를 입력해주세요.");
} while (input <= 100);

//Q4
let str = prompt("문자열을 입력하세요.");
console.log(str.slice(2, 5));

//Q5
const date = new Date("May 27, 2022 12:30:00");
alert(date);

//Q6
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let getSecondsToday = hours * 60 * 60 + minutes * 60 + seconds;
alert(getSecondsToday);

//Q7
var randomNum = [];
for (var i = 1; i <= 3; i++) {
  let num = Math.floor(Math.random() * 101);
  randomNum.push(num);
}
document.write("첫번째 랜덤 난수 : ", randomNum[0], "<br>");
document.write("두번째 랜덤 난수 : ", randomNum[1], "<br>");
document.write("세번째 랜덤 난수 : ", randomNum[2]);
