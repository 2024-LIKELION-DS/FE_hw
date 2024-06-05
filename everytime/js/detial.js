function addClassNm(element) {
  element.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const replyButtons = document.querySelectorAll(".childcomment");

  replyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const existingForm = this.parentNode.parentNode.querySelector(
        ".writecomment.child"
      );
      if (existingForm) {
        existingForm.remove();
      }

      const replyForm = document.createElement("form");
      replyForm.className = "writecomment child";
      replyForm.innerHTML = `
        <input type="text" name="text" maxlength="300" autocomplete="off" placeholder="대댓글을 입력하세요." class="text">
        <ul class="option">
          <li title="익명" class="anonym" onclick="addClassNm(this)"></li>
          <li title="완료" class="submit"></li>
        </ul>
        <div class="clearBothOnly"></div>
      `;

      const parentArticle = this.closest("article");
      parentArticle.insertAdjacentElement("afterend", replyForm);
    });
  });
});

function posvote() {
  const voteElement = document.querySelector(".status.left .vote");
  let count = parseInt(voteElement.innerText);
  if (voteElement.classList.contains("voted")) {
    alert("이미 공감하였습니다.");
  } else {
    if (confirm("이 글에 공감하십니까?")) {
      count++;
      voteElement.innerText = count;
      voteElement.classList.add("voted");
    } else {
    }
  }
}

function scrap() {
  const scrapElement = document.querySelector(".status.left .scrap");
  const scrapButton = document.querySelector(".buttons .scrap");
  let count = parseInt(scrapElement.innerText);

  if (scrapButton.innerText === "스크랩") {
    if (confirm("이 글을 스크랩하시겠습니까?")) {
      count++;
      scrapElement.innerText = count;
      scrapButton.innerText = "스크랩 취소";
    } else {
    }
  } else {
    if (confirm("이 글의 스크랩을 취소하시겠습니까?")) {
      count--;
      scrapElement.innerText = count;
      scrapButton.innerText = "스크랩";
    } else {
    }
  }
}
