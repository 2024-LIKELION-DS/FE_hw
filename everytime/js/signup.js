const sub1 = document.getElementById("label1");
const sub2 = document.getElementById("label2");
const sub3 = document.getElementById("label3");
const sub4 = document.getElementById("label4");
const sub5 = document.getElementById("label5");
const btn = document.getElementById("submit");

function checkInputs() {
  if (sub1.value && sub2.value && sub3.value && sub4.value && sub5.value) {
    btn.style.backgroundColor = "#f91f15";
  } else {
    btn.style.backgroundColor = ""; // 입력이 모두 안 되었을 때 배경색 초기화
  }
}

// 입력 필드에 이벤트 리스너를 추가하여 입력이 변경될 때마다 확인합니다.
sub1.addEventListener("input", checkInputs);
sub2.addEventListener("input", checkInputs);
sub3.addEventListener("input", checkInputs);
sub4.addEventListener("input", checkInputs);
sub5.addEventListener("input", checkInputs);
