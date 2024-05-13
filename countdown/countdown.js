document.addEventListener("DOMContentLoaded", function () {
  const openTimeDisplay = document.getElementById("open_time");
  const closeTimeDisplay = document.getElementById("close_time");
  const closedDisplay = document.getElementById("close");

  function updateCountdown() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const today = now.toISOString().split("T")[0]; // 날짜만 저장하는 방법
    const openTime = new Date(today + " 07:00:00");
    const closeTime = new Date(today + " 23:30:00");
    const dayEnd = new Date(today + " 23:59:59");

    const timeUntilOpen = openTime - now;
    const timeUntilClose = closeTime - now;

    if (hours < 7) {
      openTimeDisplay.querySelector("p").innerText = // querySelector() -> 조건에 일치하는 첫 번째 요소만 반환
        "금일 오픈까지 남은 시간 \n\n" + msToTime(timeUntilOpen);
      openTimeDisplay.style.display = "block";
      closeTimeDisplay.style.display = "none";
      closedDisplay.style.display = "none";
    } else if (hours < 23 || (hours === 23 && minutes < 30)) {
      closeTimeDisplay.querySelector("p").innerText =
        "금일 마감까지 남은 시간 \n\n" + msToTime(timeUntilClose);
      openTimeDisplay.style.display = "none";
      closeTimeDisplay.style.display = "block";
      closedDisplay.style.display = "none";
    } else {
      openTimeDisplay.style.display = "none";
      closeTimeDisplay.style.display = "none";
      closedDisplay.style.display = "block";
      closedDisplay.querySelector("p").innerText = "금일 마감";
    }
  }

  // 시:분:초 로 나오도록 계산하는 함수
  function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60), //밀리초 단위로 되어있는 숫자를 초단위로 바꾼 뒤 60으로 나눠서 나온 나머지가 초임
      minutes = Math.floor((duration / (1000 * 60)) % 60), //{밀리초 단위로 되어있는 숫자를 60000밀리초(=60초=1분)로 나눈 뒤} = {숫자를 분단위으로 바꾼 뒤} 60으로 나눠서 나온 나머지가 분 *여기서 몫은 시라서 버리는 거
      hours = Math.floor(duration / (1000 * 60 * 60)); // 숫자를 60분으로 나눈 몫이 시

    if (seconds < 0) {
      seconds += 60;
    }
    if (minutes < 0) {
      minutes += 60;
    }
    if (hours < 0) {
      hours += 24;
    }

    //시간을 두자리로 표현하기 위한 식
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  // 함수를 1초마다 실행 (1000밀리초 = 1초)
  setInterval(updateCountdown, 1000);
});
