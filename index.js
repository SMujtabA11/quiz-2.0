var start = document.getElementById("start");
start.addEventListener("click",function(){
    window.open('./game.html','_blank');
});
var exit = document.getElementById("exit");
exit.addEventListener("click",function(){
    window.close('./index.html');
});


var playerScore = document.getElementById("playerScore");
playerScore.addEventListener("click",function(){
    alert(scoreArray);
});
