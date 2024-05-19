const button = document.querySelector("button");
const names = document.querySelector("#name");
const nickname = document.querySelector("#nickname");
const email = document.querySelector("#email");
const pw = document.querySelector("#password");
const re_pw = document.querySelector("#re_password");

names.addEventListener("keyup", activeEvent);
nickname.addEventListener("keyup", activeEvent);
email.addEventListener("keyup", activeEvent);
pw.addEventListener("keyup", activeEvent);
re_pw.addEventListener("keyup", activeEvent);

function activeEvent() {
  switch (
    !(names.value && nickname.value && email.value && pw.value && re_pw.value)
  ) {
    case true:
      button.disabled = false;
      break;
    case false:
      button.disabled = true;
      break;
  }
}
