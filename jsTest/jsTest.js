// // # 1 
// const lion = () => "Hello LikeLion12";

// // # 2
// let input = prompt("숫자를 입력하세요.");
// let number = parseInt(input, 10);
// let result = (number % 2 === 0) ? "짝수" : "홀수";
// alert(number + "은 " + result + "입니다.");

// // # 3 
// do {
//     number = prompt("100을 초과하는 숫자를 입력해주세요.");
//     number = parseInt(number, 10);
// } while (number <= 100);
// alert("입력한 숫자는 100을 초과합니다: " + number)

// // # 4 
// let str = prompt("문자열을 입력하세요");
// console.log(str.substring(2,5))

// // # 5
// const date = new Date(2022, 4, 27, 0, 30);
// alert(date);

// // # 6
// function getSecondsToday() {
//     let now = new Date(); // 현재 날짜 및 시간
//     let todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 오늘 시작 시간 (0시 0분 0초)
//     let diff = now - todayStart; // 현재 시간과 오늘 시작 시간의 차이 (밀리초 단위)
//     return Math.floor(diff / 1000); // 밀리초를 초로 변환
// }
// console.log(getSecondsToday());

// // # 7
// function randomNum() {
//     return Math.floor(Math.random() * 101);
// }
// document.write("첫 번째 랜덤 난수: " + randomNum() + "<br>");
// document.write("두 번째 랜덤 난수: " + randomNum() + "<br>");
// document.write("세 번째 랜덤 난수: " + randomNum() + "<br>");


// # 8
function change() {
    var spanElement = document.getElementById("name"); // ID가 'name'인 요소를 찾음
    var currentValue = spanElement.innerHTML; // 현재 텍스트 값
    switch(currentValue) {
        case "likelion_1":
            spanElement.innerHTML = "likelion_2";
            break;
        case "likelion_2":
            spanElement.innerHTML = "likelion_3";
            break;
    }
}