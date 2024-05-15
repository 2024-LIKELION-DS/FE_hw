let cdContent = document.querySelector("#cd_content");
let cdTime = document.querySelector("#time");

function countdown() {
  let today = new Date();
  let todayHour = today.getHours();
  let todayMin = today.getMinutes();
  let todaySec = today.getSeconds();

  const openTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDay(),
    13,
    0
  );
  const closeTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDay(),
    17,
    0
  );

  let restHour;
  let restMin;
  let restSec;

  if (todayHour < openTime.getHours()) {
    restHour = openTime.getHours() - todayHour - 1;
    restMin = 59 - todayMin;
    restSec = 59 - todaySec;
    cdContent.innerText = `금일 오픈까지 남은 시간`;
    cdTime.innerText = `${restHour}:${restMin}:${restSec}`;
  } else if (todayHour < closeTime.getHours()) {
    restHour = closeTime.getHours() - todayHour - 1;
    restMin = 59 - todayMin;
    restSec = 59 - todaySec;
    cdContent.innerText = `금일 마감까지 남은 시간`;
    cdTime.innerText = `${restHour}:${restMin}:${restSec}`;
  } else {
    cdContent.innerText = "금일 마감";
  }
}

countdown();
let interval = setInterval(countdown, 1000);
// setInterval(함수, 시간간격): 첫 번째 매개변수로 전달된 함수를 두 번째 매개변수로 지정된 시간 간격(밀리초 단위)마다 반복적으로 호출
