#01 
let lion = () => "Hello LikeLion12";


#02
let input = prompt("숫자를 입력하세요!!");

let number = parseInt(input, 10);

let result = alert(number%2==0 ? `${number}는 짝수입니다.` : `${number}는 홀수입니다.`);



#03
do {
    num = prompt("100을 초과하는 숫자를 입력해주세요.");
}   while(num<=100 && num >= 0)



#04
let str = prompt("문자열을 입력하세요: ");

console.log(str.slice(2,5));



#05
let day = new Date(2022, 4, 27, 0, 30);
alert("출력" + day);


#06
function getSecondsToday(){
    let rightNow = new Date();
    let startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let nowSeconds = Math.floor((rightNow-startToday)/1000);
    return nowSeconds

    let 
}
alert(getSecondsToday);



#07
function randomNum() {
    return Math.floor(Math.random() * 101);
}

let Random1 = randomNum();
let Random2 = randomNum();
let Random3 = randomNum();

document.write("첫번째 랜덤 난수: " + Random1 + "<br>");
document.write("두번째 랜덤 난수: " + Random2 + "<br>");
document.write("세번째 랜덤 난수: " + Random3 + "<br>");




#08
function change() {
    number ++;
    if(number>3)

    document.getElementById("name").inntertext = "likelion_" + number;
}





