let goodNum = 502;
let scrapNum = 0;

function goodpl1() {
  goodNum++;
  let goodpl = document.querySelector(".good1");
  goodpl.innerHTML =
    "<img src='./img/good.png' width = 11px height= 11px></img> " + goodNum;
}

function scrappl1() {
  let scrappl = document.querySelector(".scrap1");

  if (scrapox.innerHTML == "스크랩") {
    scrapox.innerHTML = "스크랩 취소";
    scrapNum++;
    scrappl.innerHTML =
      "<img src='./img/star.png' width = 11px height= 11px></img> " + scrapNum;
  } else {
    scrapox.innerHTML = "스크랩";
    scrapNum--;
    scrappl.innerHTML =
      "<img src='./img/star.png' width = 11px height= 11px></img> " + scrapNum;
  }
}

let goodClick = document.querySelector(".let_good");
let scrapClick = document.querySelector(".let_scrap");
let scrapox = document.getElementById("let_letscrap");

let coment = document.querySelector(".cotime");
function cocoment() {
  let cocoment = document.createElement("div");
  cocoment.innerHTML = `
  <form class="newcom2">
    <div class="let_com"><input type="text" placeholder="대댓글을 입력하세요."></div>
      <div class="let_submit">
      <div class="ano_check"><input type="checkbox" class="anocheckclass">익명</div>
        <button type="submit" class = "subBtn"><img src="./img/whitepencil.png" width=40 height=40></button>
    </div>
  </form>
  <style>
  
.let_com input {
  border: 0;
  outline: none;

  font-size: 14px;
  font-weight: 400;

  padding-top: 12px;
  padding-bottom: 5px;
  padding-left: 10px;

  background-color: rgb(240, 240, 240);
}

.newcom2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top : 15px;
  width : 760px;

  background-color: rgb(240, 240, 240);

  border: solid 1px rgb(230, 230, 230);
}

.let_submit {
  display: flex;
  flex-direction: row;
}

.ano_check {
  font-size: 14px;
  color: rgb(139, 139, 139);

  display: flex;
  align-items: center;
  margin-right: 5px;

  accent-color: red;
}
.subBtn {
  background-color: rgb(255,0,0);

  border: 0;
  width: 40px;
  height: 40px;

  padding: 0;
}

</style>`;
  coment.append(cocoment);
  let anocheckclass = document.querySelector(".anocheckclass");
  let ano_check = document.querySelector(".ano_check");

  anocheckclass.addEventListener("change", function () {
    if (anocheckclass.checked) {
      ano_check.style.color = "red";
    } else {
      ano_check.style.color = "rgb(139, 139, 139)";
    }
  });
}

let anocheckclass = document.querySelector(".anocheckclass");
let ano_check = document.querySelector(".ano_check");

anocheckclass.addEventListener("change", function () {
  if (anocheckclass.checked) {
    ano_check.style.color = "red";
  } else {
    ano_check.style.color = "rgb(139, 139, 139)";
  }
});

let coment_content = document.querySelector(".co_content");
function co_alert() {
  alert(coment_content.innerText);
}
