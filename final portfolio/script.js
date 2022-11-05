setInterval(myTimer, 500);

var list = ['linear-gradient(rgb(76, 76, 247),rgb(174, 27, 174)','rgb(255, 128, 0), rgb(239, 141, 43)','linear-gradient(rgb(100, 100, 223) , rgb(35, 173, 118)' ];

function myTimer() {
var num = Math.floor(Math.random() *3);
// document.getElementById("html-id").style.color = list[num];
document.getElementById("project-1").style.backgroundImage = list[num];
checkIndex(num);
// document.getElementById("css-id").style.color = list[num];
document.getElementById("project-2").style.backgroundImage = list[num++];
checkIndex(num);
// document.getElementById("c-id").style.color = list[num];
document.getElementById("project-3").style.backgroundImage = list[++num];
checkIndex(num);
 
}

function checkIndex(num) {
    if(num==3){
        num=0;
    }
}