// 공감 +1
let likeCheck = 0;
function countLike() {
  let like = document.getElementById("like");
  if (likeCheck == 0) {
    like.innerHTML = parseInt(like.innerHTML) + 1;
    likeCheck++;
  } else {
    like.innerHTML = parseInt(like.innerHTML) - 1;
    likeCheck--;
  }
}

let likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", countLike);

// 스크랩 +1
let scrapCheck = 0;
function countScrap() {
  let scrap = document.getElementById("scrap");
  if (scrapCheck == 0) {
    scrap.innerHTML = parseInt(scrap.innerHTML) + 1;
    scrapBtn.innerHTML = "스크랩 취소";
    scrapBtn.style.width = "85px";
    scrapCheck++;
  } else {
    scrap.innerHTML = parseInt(scrap.innerHTML) - 1;
    scrapBtn.innerHTML = `<img src="img/container.articles.buttons.scrap.png" alt="스크랩" width=11"
    height="12">
스크랩`;
    scrapBtn.style.width = "63px";
    scrapCheck--;
  }
}

let scrapBtn = document.getElementById("scrapBtn");
scrapBtn.addEventListener("click", countScrap);

// 대댓글 입력창
let subcommentBtnClick = 0;

function subcommentInput() {
  let subcommentWrite = document.getElementById("subcomment_input");
  if (subcommentBtnClick == 0) {
    subcommentWrite.style.display = "block";
    subcommentBtnClick++;
  } else {
    subcommentWrite.style.display = "none";
    subcommentBtnClick--;
  }
}

let subcommentBtn = document.getElementById("subcomment_btn");
subcommentBtn.addEventListener("click", subcommentInput);

/*익명 버튼 색 변경*/
function changeColor(obj) {
  if (obj.checked) {
    obj.parentNode.style.color = "red";
  } else {
    obj.parentNode.style.color = "#a6a6a6";
  }
}

/*댓글 제출*/
let text = "";
function submitComment() {
  text = document.getElementById("comment_text").value;
}

let commentSubmitBtn = document.getElementsByClassName("comment_submit");
commentSubmitBtn[0].addEventListener("click", submitComment);

function showComment() {
  alert(text);
}

let commentImg = document.getElementById("comment_img");
commentImg.addEventListener("click", showComment);
