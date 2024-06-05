function show(id) {
  var newWrite = document.getElementById("newWrite");
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
    newWrite.style.display = "none";
  }
}

function changeColor() {
  var checkbox2 = document.getElementById("writeRed2");
  var textElement2 = document.getElementById("text2");

  if (checkbox2.checked) {
    checkbox2.style.backgroundColor = "#f91f15"; // 체크박스 배경색 변경
    textElement2.style.color = "#f91f15"; // 텍스트 색상 변경
    textElement2.style.fontWeight = "700"; // 텍스트 색상 변경
  } else {
    checkbox2.style.backgroundColor = ""; // 체크박스 배경색 원래대로
    textElement2.style.color = ""; // 텍스트 색상 원래대로
  }
}
// function changeColor2() {
//     var checkbox = document.getElementById("writeRed");
//     var textElement = document.getElementById("text");

//     if (checkbox.checked) {
//       checkbox.style.backgroundColor = "#7bd8d4"; // 체크박스 배경색 변경
//       textElement.style.color = "#7bd8d4"; // 텍스트 색상 변경
//       textElement.style.fontWeight = "700"; // 텍스트 색상 변경
//     } else {
//       checkbox.style.backgroundColor = ""; // 체크박스 배경색 원래대로
//       textElement.style.color = ""; // 텍스트 색상 원래대로
//     }
//   }

function show_qna(id) {
  var question = document.getElementById(id);
  var qcheck = document.getElementById("writeRed");
  question.style.display = "block";

  if (qcheck.checked) {
    question.style.display = "block";
  } else {
    question.style.display = "none";
  }
}
