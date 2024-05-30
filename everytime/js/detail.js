let icon1 = document.querySelector(".vote-button");
let icon3 = document.querySelector(".scrap-button");
let num1 = document.querySelector(".vote-number");
let num3 = document.querySelector(".scrap-number");
let i = 0;
let j = 0;

icon1.addEventListener("click", () => {
  i++;
  num1.textContent = i;
});

icon3.addEventListener("click", () => {
  j++;
  num3.textContent = j;
});

function change() {
  const btn = document.getElementById("scrapBtn");
  if (btn.innerText === "스크랩") {
    btn.innerText = "스크랩 취소";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector("#check");
  var checkContent = document.querySelector(".check1");

  function checkState() {
    if ($("#check").is(":.checked")) {
      checkbox.classList.add("active");
    }
  }

  checkbox.addEventListener("input", checkState);
});
