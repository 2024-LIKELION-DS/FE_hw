let input = prompt("숫자를 입력하세요!!");

let number = parseInt(input, 10);

number % 2 == 1
  ? alert(number + "는 홀수입니다.")
  : alert(number + "는 짝수입니다.");
