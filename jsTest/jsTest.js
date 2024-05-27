//최종점수: 7점

//Q1(정답)
let lion = () => "Hello LikeLion12";

//Q2(정답)
let input = prompt("숫자를 입력하세요!!");

let number = parseInt(input, 10);

number % 2 == 0
    ? alert(number + "는 짝수입니다")
    : alert(number + "는 홀수입니다");

//Q3(오답)
let num1;
do {
    num1 = prompt("100을 초과하는 숫자를 입력해주세요.");
    num1 = parseInt(num1, 10);
} while (num1 <= 100);

//Q4(정답)
let str = prompt("문자열을 입력하세요:");
console.log(str.slice(2, 5));

//Q5(정답)
let date = new Date("May 27, 2022 12:30:00");
alert(date);

//Q6(정답)
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let totalSec = hour * 3600 + min * 60 + sec;

alert(totalSec);

//Q7(정답)
function randomNum() {
    let num1 = Math.floor(Math.random() * 101);
    let num2 = Math.floor(Math.random() * 101);
    let num3 = Math.floor(Math.random() * 101);

    document.write("첫번째 랜덤 난수 : " + num1 + "<br>");
    document.write("두번째 랜덤 난수 : " + num2 + "<br>");
    document.write("세번째 랜덤 난수 : " + num3 + "<br>");
}

//Q8(정답)
let num = 1;
function change() {
    let el = document.getElementById("name");
    num++;
    el.innerHTML = el.innerHTML.replace(`${num - 1}`, `${num}`);
}
