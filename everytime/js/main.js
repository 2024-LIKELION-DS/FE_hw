const newPost = document.getElementsByClassName("new_post")[0];
const post = document.getElementsByClassName("post")[0];
const aside = document.getElementsByClassName("aside_live")[0];

newPost.addEventListener("click", function () {
  aside.style.visibility = "hidden";

  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;

          let question = document.getElementById("formQ_img");
          let anonymous = document.getElementById("formA_img");
          let ques_txt = document.getElementById("ques_txt");

          let isClickedQ = false;
          let isClickedA = false;

          question.addEventListener("click", function () {
            console.log("클릭됨");
            if (isClickedQ) {
              question.src = "img/container.articles.write.question.png";
              ques_txt.style.display = "none";
            } else {
              question.src = "img/container.articles.write.question.active.png";
              ques_txt.style.display = "block";
            }
            isClickedQ = !isClickedQ;
          });

          anonymous.addEventListener("click", function () {
            console.log("클릭됨");
            if (isClickedA) {
              anonymous.src = "img/container.articles.write.anonym.png";
            } else {
              anonymous.src = "img/container.articles.write.anonym.active.png";
            }
            isClickedA = !isClickedA;
          });
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});

// newPost.addEventListener("click", write);
