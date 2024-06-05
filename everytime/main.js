let let_write = document.querySelector(".newletter");
let child1 = document.querySelector(".newletter div");
let child2 = document.querySelector(".newletter img");
let let_new_write = document.createElement("form");
let let_write2 = document.createElement("div");
let writeparent = document.querySelector(".new_newwrite");

function newletter_detail() {
  let_write.style.display = "none";
  writeparent.appendChild(let_write2);

  let_new_write.innerHTML = `
        <div class="let_title">
            <input type="text" placeholder="네가 &quot;깃아 미안해&quot; 했잖아?">
        </div>

        <div class="let_content">
            <textarea></textarea>
        </div>

        <div class="sub_set">
            <div class="tag_att">
                <img src="./img/hashtag.png" alt="해시태그" width=40 height=40>
                <img src="./img/attach.png" alt="첨부파일" width=40 height=40>
            </div>


            <div class="typefin">
                <div class="qu"><input type="checkbox" class="quclass" onclick="is_checked()">질문</div>
                <div class="anony"><input type="checkbox">익명</div>
                <button type="submit"><img src="./img/pencil.png" width=40 height=40></button>
            </div>
        </div>

    <style>
    .newletter{
        border: solid 2px rgb(205, 205, 205);
        padding : 0;
    }
    [type="text"] {
        border: 0;
        outline: none;
      
        width: 768px;
        height: 40px;
      
        padding: 0;
        padding-left: 10px;
      
        border: solid 1px rgb(200, 200, 200);
      }
      
      .let_title {
        width: 768px;
        height: 40px;
      }
      
      textarea {
        border: solid 1px rgb(200, 200, 200);
        width: 768px;
        height: 340px;
      
        padding: 0;
        padding-left: 10px;
        padding-top: 10px;
      
        resize: none;
        outline: none;
      }
      
      .let_content {
        width: 768px;
        height: 350px;
      }


      .sub_set {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      
        margin-top: 0;
        width: 768px;
        height: 40px;
        border: solid 1px rgb(200, 200, 200);
      
        padding-left: 10px;
      }
      
      .anony {
        margin-right: 20px;
      }
      
      .tag_att {
        display: flex;
        flex-direction: row;
      }
      
      .typefin {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      
      button {
        background-color: rgb(230, 0, 0);
        display: flex;
        justify-content: center;
      
        padding: 0;
        width: 40px;
        height: 40px;
      
        border: none;
      }

      form{
        margin-top : 5px;
      }
      </style>`;
  let_write2.appendChild(let_new_write);
}

function is_checked() {
  let qu = document.querySelector(".quclass");

  qu.addEventListener("change", function () {
    let addQinfo = document.createElement("div");
    let sub_set = document.querySelector(".sub_set");
    let quinfo = document.querySelector(".quinfo");

    if (qu.checked) {
      addQinfo.innerHTML = `
        <div class= "quinfo">질문 글을 작성하면 게시판 상단에 일정 기간 동안 노출되어, 더욱 빠르게 답변을 얻을 수 있게 됩니다.<br>또한, 다른 학우들이 정성껏 작성한 답변을 유지하기 위해, 댓글이 달린 이후에는 <b>글을 수정 및 삭제할 수 없습니다.</b></div>
        <style>
        .quinfo{
          border-radius: 8px;
          margin: 10px;
          padding:10px;
          
          font-size: 12px;
          color: #05BCBC;
          background-color: #EDFFFE;
        }
  
        .qbox{
          border: solid 1px rgb(200, 200, 200);
        }
        </style>`;

      writeparent.parentNode.insertBefore(addQinfo, sub_set);
    }
  });
}
