let username = document.querySelector("#name_input");
let nickname = document.querySelector("#nickname_input");
let email = document.querySelector("#email_input");
let pw = document.querySelector("#pw_input");
let re_pw = document.querySelector("#pw_re_input");
let submit = document.querySelector("#signup_btn");

function btnActivate() {
  if (
    username.value !== "" &&
    nickname.value !== "" &&
    email.value !== "" &&
    pw.value !== "" &&
    re_pw.value !== ""
  ) {
    submit.style.backgroundColor = "#ff0000";
  } else {
    submit.style.backgroundColor = "#D6D6D6";
  }
}

btnActivate();
username.addEventListener("input", btnActivate);
nickname.addEventListener("input", btnActivate);
email.addEventListener("input", btnActivate);
pw.addEventListener("input", btnActivate);
re_pw.addEventListener("input", btnActivate);
