//총점 7점

// #1 (정답)
// lion = () => {
//     return "Hello LikeLion12";
// };

// #2 (정답)
//let input = prompt("숫자를 입력하세요!!");

//let number = parseInt(input, 10);

// if (number % 2 == 0) {
//     alert(`${number}는 짝수입니다.`);
// } else {
//     alert(`${number}는 홀수입니다.`);
// }

// #3 (정답)
// do {
//     var input = prompt("100을 초과하는 숫자를 입력해주세요.");
//     var number = parseInt(input, 10);
// } while (number < 100);

// #4 (정답)
// let str = prompt("문자열을 입력하세요: ");
// console.log(str.slice(2, 5));

// #5 (정답)
// var date = new Date(2022, 4, 27, 0, 30);
// alert(date.toLocaleString());

// #6 (오답)

function getSecondsToday() {
  var date = new Date();

  var night = new Date(date);
  night.setHours(0, 0, 0, 0);

  var time = Math.floor((date - night) / 1000);

  alert(time);
}
getSecondsToday();

// #7 (정답)
// function randonNum() {
//     var number = Math.floor(Math.random() * 100 + 1);
//     return number;
// }

// document.write(`첫 번째 랜덤 난수: ${randonNum()}`);
// document.write(`두 번째 랜덤 난수: ${randonNum()}`);
// document.write(`세 번째 랜덤 난수: ${randonNum()}`);

// #8 (정답)
// function change() {
//     var btn = document.getElementById("name");

//     var num = btn.innerText.slice(9);
//     var numInt = parseInt(num, 10);
//     var number = numInt + 1;

//     if (number == 4) {
//         number = 1;
//     }

//     btn.textContent = "likelion_" + number;
// }
