// 총 점수 : 1/8

//Q1 (O)
/*
lion = () => "Hello LikeLion12";
*/

//Q2 (X)
let input = prompt("숫자를 입력해주세요!");
let number = parseInt(input, 10);

let result = alert(
    number % 2 ? `${number}는 홀수 입니다.` : `${number}는 짝수입니다.`);


//Q3 (X)
do {
    num = prompt("100을 초과하는 숫자를 입력해주세요.");
} while (num !== null && (isNaN(num) || num <= 100));


//Q4 (X)
let str =  prompt("문자열을 입력하세요:");
console.log(str.slice(2,5));


//Q5 (X)
let date = new Date(2022, 4, 27, 0, 30);
alert(date);


//Q6 (X)
function getSecondsToday() {
    let now = new Date(); 
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 오늘 0시 0분 0초

    let secondsToday = Math.floor((now - today)/ 1000); 
    alert(secondsToday);
}

getSecondsToday();


//Q7 (X)
function randomNum() {
    return Math.floor(Math.random() * 101); 
}

let firstNum = randomNum();
let secondNum = randomNum();
let thirdNum = randomNum();

console.log(`첫 번째 랜덤 낫수: ${firstNum}`);
console.log(`두 번째 랜덤 낫수: ${secondNum}`);
console.log(`세 번째 랜덤 낫수: ${thirdNum}`);

//Q8 (X)
let currentStep = 1; 

function change() {
    let span = document.getElementById('name'); 
    if (currentStep === 1) {
        span.innerText = 'likelion_2';
        currentStep = 2;
    } else if (currentStep === 2) {
        span.innerText = 'likelion_3';
        currentStep = 3;
    } else if (currentStep === 3) {
        span.innerText = 'likelion_1';
        currentStep = 1;
    }
}