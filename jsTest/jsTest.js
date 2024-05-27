// 총점 : 1/8점
//1 => 1점
lion = function () {
  return "Hello LikeLion12";
};
let lion = () => "Hello LikeLion12";

//2 => 0점
let input = prompt("숫자를 입력하세요!!!");
let number = parseInt(input, 10);
let result = () => {
  if (number / 2 == 0) {
    return alert(result + "는 짝수입니다.");
  } else {
    return alert(result + "는 홀수입니다.");
  }
};

//3 => 0점
do {
  let num = prompt("100을 초과하는 숫자를 입력해주세요.");
} while (num >= 100);

//4 => 0점 
// 피드백 : slice를 이용해서 풀어주세요!
let str = prompt("문자열을 입력하세요 : ");
let num4 = () => {
  if ((str = "likelion")) {
    console.log("ke1");
  }
};

//5 => 0점
let date = new Date();
let setFullYear = setFullYear("2022");
let setMonth = setMonth("5");
let setDate = setDate("27");
let setHours = setHours("12");
let setMinutes = setMinutes("30");

let art = () => {
  document.write(
    date.getFullYear +
      "년" +
      date.getMonth +
      "월" +
      date.getDate +
      "일" +
      date.getHours +
      "시" +
      date.getMinutes +
      "분 입니다."
  );
};

//6 => 0점
function getSecondsToday() {
  let date = new Date();
  let result = getTime(date);
  return alert(result);
}

//7 => 0점
function randomNum() {
  for (let i = 1; i < 11; i++) num = Math.random(0, 101);
  document.write(i + "번째 랜덤 난수 : ", random_num);
}

//8 => 0점
function change() {
  const btn = document.getElementById("name");
  let count = 0;
  if (btn.onclick) {
    count++;
    btn.textContent = "likelion_2";
  } else if (btn.onclick) {
    btn.textContent = "likelion_3";
  }
}
