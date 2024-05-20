const nameValue = document.getElementById("name");
const nicknameValue = document.getElementById("nickname");
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("password");
const password2Value = document.getElementById("password2");

const submitBtn = document.getElementById("submit");

function color() {
  if (
    nameValue.value.length > 0 &&
    nicknameValue.value.length > 0 &&
    emailValue.value.length > 0 &&
    passwordValue.value.length > 0 &&
    password2Value.value.length > 0
  ) {
    submitBtn.style.backgroundColor = "#f91f15";
  } else {
    submitBtn.style.backgroundColor = "#8e8b8b";
  }
}

nameValue.addEventListener("input", color);
nicknameValue.addEventListener("input", color);
emailValue.addEventListener("input", color);
passwordValue.addEventListener("input", color);
password2Value.addEventListener("input", color);
