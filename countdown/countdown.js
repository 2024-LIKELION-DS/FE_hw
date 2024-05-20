function remaindTime() {
  const now = new Date();
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    50,
    0
  );
  const open = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    9,
    0,
    0
  );

  const nt = now.getTime();
  const ot = open.getTime();
  const et = end.getTime();

  const timeTitle = document.querySelector("p.time-title");
  const timeElement = document.querySelector(".time");
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  let sec, day, hour, min;

  if (nt < ot) {
    timeElement.style.display = "block";
    timeTitle.innerHTML = "금일 오픈까지 남은 시간";
    sec = parseInt((ot - nt) / 1000);
  } else if (nt > et) {
    timeTitle.innerHTML = "금일 마감";
    timeElement.style.display = "none";
    return;
  } else {
    timeElement.style.display = "block";
    timeTitle.innerHTML = "금일 마감까지 남은 시간";
    sec = parseInt((et - nt) / 1000);
  }

  day = parseInt(sec / 60 / 60 / 24);
  sec = sec - day * 60 * 60 * 24;
  hour = parseInt(sec / 60 / 60);
  sec = sec - hour * 60 * 60;
  min = parseInt(sec / 60);
  sec = parseInt(sec - min * 60);

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hoursElement.innerHTML = hour;
  minutesElement.innerHTML = min;
  secondsElement.innerHTML = sec;
}

setInterval(remaindTime, 1000);
