let D = new Date();

function getSecondsToday() {
  let H = D.getHours();
  let M = D.getMinutes();
  let S = D.getSeconds();
  let totalSec = H * 60 * 60 + M * 60 + S;

  alert(totalSec);
}

getSecondsToday();
