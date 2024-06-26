const button = document.querySelector("button");
const id = document.querySelector("#id_username");
const pw = document.querySelector("#id_password");

id.addEventListener("keyup", activeEvent);
pw.addEventListener("keyup", activeEvent);

function activeEvent() {
  switch (!(id.value && pw.value)) {
    case true:
      button.disabled = false;
      break;
    case false:
      button.disabled = true;
      break;
  }
}
