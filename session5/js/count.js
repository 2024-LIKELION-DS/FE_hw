const textValue1 = document.getElementById("text1");
const textValue2 = document.getElementById("text2");

const oT = document.getElementById("operatingTime");

// 현재 시각
var currentTime = new Date();
var cT = currentTime.getTime();
var cT_locale = currentTime.toLocaleTimeString();

// 오픈 시간
var startTime = new Date(
  currentTime.getFullYear(),
  currentTime.getMonth(),
  currentTime.getDate(),
  8,
  0,
  0
);
var sT = startTime.getTime();
var sT_hour = startTime.getHours();
var sT_min = startTime.getMinutes();

// 미감 시간
var endTime = new Date(
  currentTime.getFullYear(),
  currentTime.getMonth(),
  currentTime.getDate(),
  23,
  0,
  0
);
var eT = endTime.getTime();
var eT_hour = endTime.getHours();
var eT_min = endTime.getMinutes();

//운영 시간
function show() {
  oT.textContent = `${sT_hour}시 ${sT_min}분 ~ ${eT_hour}시 ${eT_min}분`;
}

// 카운트 다운
function count() {
  if (cT < sT) {
    // 현재 시간이 오픈 시간 이전이면 ...
    textValue1.textContent = "금일 오픈까지 남은 시간";
    isOpen(sT - cT);
  } else if (cT > eT) {
    textValue1.textContent = "금일 마감";
  } else {
    textValue1.textContent = "금일 마감까지 남은 시간";
    isOpen(eT - cT);
  }
}

function isOpen(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  textValue2.textContent = `${hours}시간 ${minutes}분 ${seconds}초`;
}

//현재시각
var crr = document.getElementById("crr");
crr.textContent = `현재 시각은 ${cT_locale}`;

show();
count();
