class CountdownTimer {
  constructor(openTime, closeTime) {
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.interval = null;
  }

  // 현재 시간을 HH:MM:SS 형식으로 반환
  get currentTime() {
    const now = new Date();
    //padStart : 두자리로 만들기 위해 2, 만약 한자리라면 앞에 "0" 작성
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  }

  // 시간을 초로 변환
  timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
    //배열의 요소를 map을 이용해 각 요소를 숫자로 바꾼 후, 초로 변환하기 위해 3600, 60을 곱한 것을 모두 더함
    //그렇게 하면 총 시간을 초로 변환하여 비교하기 편리
  }

  // 초를 HH:MM:SS 형식으로 변환
  formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }

  // 한국어 형식으로 시간 변환
  formatTimeToKorean(time) {
    let [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "오후" : "오전";
    hours = hours % 12 || 12; //0시를 12시로 표시하기 위함
    return `${period} ${hours}시 ${minutes}분`;
  }

  // 카운트다운 업데이트
  updateCountdown() {
    const now = this.currentTime;
    const nowSeconds = this.timeToSeconds(now);
    const openSeconds = this.timeToSeconds(this.openTime);
    const closeSeconds = this.timeToSeconds(this.closeTime);
    let message, remainingSeconds;

    if (nowSeconds < openSeconds) {
      message = `오픈시간까지 남은 시간`;
      remainingSeconds = openSeconds - nowSeconds;
    } else if (nowSeconds < closeSeconds) {
      message = `마감시간까지 남은 시간`;
      remainingSeconds = closeSeconds - nowSeconds;
    } else {
      message = "금일 마감";
      remainingSeconds = null;
    }
    document.getElementById("open").textContent = this.openTime;
    document.getElementById("close").textContent = this.closeTime;

    document.getElementById("message").textContent = message;
    document.getElementById("time").textContent =
      remainingSeconds !== null ? this.formatTime(remainingSeconds) : "";
  }

  // 카운트다운 시작
  start() {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  // 카운트다운 중지
  stop() {
    clearInterval(this.interval);
  }
}

// 운영 시작 시간과 종료 시간 설정
const timer = new CountdownTimer("23:00:00", "24:00:00");

// 페이지 로드 시 카운트다운 시작
timer.start();
