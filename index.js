// dice1

var randomNumber1 = Math.floor(Math.random()*6)+1; //random number 1 to 6

var randomDieceImage1 = "dice" + randomNumber1 +".png";  //diece 1 to 6

var randomImageSource1 = "images/"+ randomDieceImage1; // appending source folder

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


// dice2

var randomNumber2 = Math.floor(Math.random()*6)+1; //random number 1 to 6

var randomDieceImage2 = "images/dice" + randomNumber2 +".png";  //diece 1 to 6

document.querySelectorAll("img")[1].setAttribute("src", randomDieceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML ="🚩Player 1 Wins!";
}else if (randomNumber2 > randomNumber1)  {
  document.querySelector("h1").innerHTML ="Player 2 Wins!🚩";
}else{
  document.querySelector("h1").innerHTML ="Guess what? draw!";
}
