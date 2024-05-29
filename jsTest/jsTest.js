//채점 결과 1점/8점

// #1 (O)
lion = () => "Hello LikeLion12";

// #2 (x)
let input = prompt("숫자를 입력하세요!!", "");
// prompt창에 안내문을 적고 입력을 받으려면 쉼표 앞에 안내문, 그 뒤는 따옴표로 비워둬야한다.
let number = parseInt(input, 10);
// prompt에서 입력받는건 문자형이기 때문에 정수형으로 바꿔줘야함.
let result = alert(
  number % 2 == 1 ? number + "는 홀수입니다." : number + "는 짝수입니다."
);
// = 말고 == 써야함 !

// #3 (X)
do {
  let q3 = prompt("100을 초과하는 숫자를 입력해주세요.", "");
  let q3Num = parseInt(q3, 10);
} while (q3Num > 100);
// while문 쓸 때 부등호 유의하기(반대로 썼었다..)

// #4 (X)
let str = prompt("문자열을 입력하세요:", "");
var result1 = str.split("i");
console.log(result1[1]);
// prompt를 잘못쓰고 result1변수 오타냈었음.

// #5 (X)
const date = new Date("May 27, 2022 0:30");
let dateString = date.toString();
//toString함수를 사용해서 문자열로 바꾸었어야하는데 빼먹음.
alert(dateString);

// #6 (X)
function getSecondsToday() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // Date() 객체 안에 있는 get함수를 이용하여 현재의 시간, 분, 초를 반환

  const today = hours * 3600 + minutes * 60 + seconds;
  // 반환한 단위(시간, 분, 초)를 초로 환산하여 더함.

  console.log(today);
}
getSecondsToday();

// #7 (X)
for (var i = 1; i <= 3; i++) {
  let random = Math.floor(Math.random() * 100) + 1;
  // 랜덤 난수가 소수점 단위이기 때문에 Math.floor를 사용하여 정수형으로 바꿔줌.
  switch (i) {
    case 1:
      console.log("첫번째 랜덤 난수:" + random);
      break;
    case 2:
      console.log("두번째 랜덤 난수:" + random);
      break;
    case 3:
      console.log("세번째 랜덤 난수:" + random);
      break;
  } // switch문을 사용하여 몇번째 난수인지 문자열과 함께 출력
}

// #8 (X)
let i = 1;
// changr 함수에서 벗어나지만.. 클릭 시에 숫자가 계속해서 늘어나도록 하기 위해 변수 초기화
function change() {
  i++;
  // 숫자 증가
  document.getElementById("name").innerHTML = "likelion_" + i;
  // getElementById를 사용하여 html문서에서 name이라는 id를 찾아내고 문자열을 바꿔줌.
}
