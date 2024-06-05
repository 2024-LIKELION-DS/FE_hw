function is_checked() {
  const checkbox = document.getElementById("anony");

  const is_checked = checkbox.checked;

  document.getElementById("result").innerText = is_checked;
}
