//1
lion = function () {
  return "Hello LikeLion12";
};
let lion = () => "Hello LikeLion12";

//2
let input = prompt("숫자를 입력하세요!!!");
let number = parseInt(input, 10);
let result = () => {
  if (number % 2 === 0) {
    return alert(result + "는 짝수입니다.");
  } else {
    return alert(result + "는 홀수입니다.");
  }
};
result();

//3
let num;
do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.");
} while (num !== null && (isNaN(num) || num <= 100));

//4
let str = prompt("문자열을 입력하세요 : ");
let new_str = str.slice(2, 5);
console.log(new_str);

//5
let date = new Date();
date.setFullYear(2022);
date.setMonth(5);
date.setDate(27);
date.setHours(12);
date.setMinutes(30);

let art = () => {
  alert(
    date.getFullYear() +
      "년" +
      date.getMonth() +
      "월" +
      date.getDate() +
      "일" +
      (date.getHours() < 12 ? "오전" : "오후") +
      (date.getHours() % 12 || 12) +
      "시" +
      date.getMinutes() +
      "분 입니다."
  );
};

//6
function getSecondsToday() {
  let now = new Date();
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let secondsToday = Math.floor((now - startOfDay) / 1000);
  alert(secondsToday);
}
getSecondsToday();

//7
function randomNum() {
  for (let i = 1; i < 11; i++) {
    let random_num = Math.floor(Math.random() * 101);
    document.write(i + "번째 랜덤 난수 : ", random_num + "<br>");
  }
}
randomNum();

//8
function change() {
  const btn = document.getElementById("name");
  let count = 0;
  btn.onclick = function () {
    count++;
    if (count % 2 === 1) {
      count++;
      btn.textContent = "likelion_2";
    } else if (btn.onclick) {
      btn.textContent = "likelion_3";
    }
  };
}
