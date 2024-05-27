function randomNum() {
  let num = Math.round(Math.random() * 100);
  return num;
}

document.write("첫번째 랜던 난수 : " + randomNum() + "<br>");
document.write("두번째 랜던 난수 : " + randomNum() + "<br>");
document.write("세번째 랜던 난수 : " + randomNum() + "<br>");
