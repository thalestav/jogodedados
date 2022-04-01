let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceeImage1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "images/" + randomDiceeImage1;
let selectImg1 = document.querySelectorAll("img")[1];
selectImg1.setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceeImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceeImage2;
let selectImg2 = document.querySelectorAll("img")[2];
selectImg2.setAttribute("src", randomImageSource2);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins, show me the money baby!"
}
else if (randomNumber2>randomNumber1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins, I'm the boss, ok ?"

}
else{
    document.querySelector("h1").innerHTML = "Nobody is greater than nobody just the House!"
};