var roll1 = Math.floor((Math.random() * 6) + 1);
var img1  = "dice" + roll1 + ".png"
var roll2 = Math.floor((Math.random() * 6) + 1);
var img2  = "dice" + roll2 + ".png"
document.querySelector(".dice1").setAttribute("src",img1);
document.querySelector(".dice2").setAttribute("src",img2);
if (img1>img2){
    document.querySelector(".title").textContent ="player 1 wins"
}
else if ( img1 == img2){
    document.querySelector(".title").textContent ="Draw"
}
else{
    document.querySelector(".title").textContent ="player 2 wins"
}
