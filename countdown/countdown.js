function countDownTimer() {
  const now = new Date();
  const openTime = new Date();
  openTime.setHours(22, 0, 0, 0);
  const closeTime = new Date();
  closeTime.setHours(24, 0, 0, 0);

  const timerElement = document.getElementById("timer");
  let message = "";
  let currentTime;

  if (now < openTime) {
    message = "금일 오픈까지 남은 시간";
    currentTime = openTime;
  } else if (now >= openTime && now < closeTime) {
    message = "금일 마감까지 남은 시간";
    currentTime = closeTime;
  } else {
    timerElement.textContent = "금일 마감";
    return;
  }

  const leftTime = currentTime - now;
  const hours = String(
    Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = String(
    Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = String(Math.floor((leftTime % (1000 * 60)) / 1000));

  timerElement.innerHTML = `${message}<br>${hours}:${minutes}:${seconds}`;
}

setInterval(countDownTimer, 1000);
