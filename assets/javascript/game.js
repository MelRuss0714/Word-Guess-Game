document.addEventListener("DOMContentLoaded", function() {
//grab reference to Dom elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholder = document.getElementById('placeholder');
var $guessLetter = document.getElementById('guess-letter');
var $guessesLeft = document.getElementById('guess-left');
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $trivia = document.getElementById("trivia");

            



//Create Varibles for game ( word bank, wins, loses, picked word, guesses left, game running, answer array, letters picked answer bank, incorrect letters bank )
var wordbank = ["Slytherin", "Griffindor", "Ravenclaw", "Hufflepuff"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var answer = "";
var answerArray = [];
var guessLetter = [];
var wrongLetter = [];


//Create a new game function to reset all stats and pick a new word and create placeholders
function newGame () {
    //reset all game info
    gameRunning = true;
    guessesLeft = 10;
    guessLetter = [];
    wrongLetter = [];
    answerArray = [];
//Pick new word
    answer = wordbank[Math.floor(Math.random() * wordbank.length)];
//Create placeholders
for (var i = 0; i < answer.length; i++){
    if (answer[i]===" "){
        answerArray.push(" ");
    }
    else {
        answerArray.push("_");
    }
}
//Write all new game stuff to the DOM
$guessesLeft.textContent = guessesLeft;
$placeholder.textContent = "Word: " + answerArray.join(" ");
$guessLetter.textContent = wrongLetter;
}
//Letter guess function takes in the letter you guesses and sees if it's in the selected word
function letterGuess (letter){
    if (gameRunning === true && guessLetter.indexOf(letter) === -1){
        //Run Game Logic
        guessLetter.push(letter);
        // check letter to see if it is right
        for (var i = 0; i < answer.length; i++){
            if (answer[i].toLowerCase() === letter.toLowerCase()){
                answerArray[i] = answer[i];
            }
        }
        $placeholder.textContent = "Word: " + answerArray.join(" ");
        checkWrong(letter);
    }
    else {
        if (gameRunning === false){
            alert("Press New Game to begin.");
        } 
        else{
            alert("Try a new letter.");
        }
    }
} 

//check incorrect(letter)
function checkWrong(letter){
   if (answerArray.indexOf(letter.toLowerCase()) === -1 && 
     answerArray.indexOf(letter.toUpperCase()) === -1) {
        guessesLeft --;
        wrongLetter.push(letter);
        $guessLetter.textContent = wrongLetter.join(" ");
        $guessesLeft.textContent = guessesLeft;
    }
       
    checkLoss();
}
   
//check losing
function checkLoss(){
    if (guessesLeft === 0) {
        losses ++;
        gameRunning = false;
        $losses.textContent = ("Losses: " + losses);
        $placeholder.textContent = answer;
        changeImage();
        changeTrivia();
    }
    
}

//check win
function checkWin(){
    if (answer.toLowerCase === answerArray.join("").toLowerCase){
        wins ++;
        gameRunning = false;
        $wins.textContent = ("Wins: " + wins);
        changeImage();
        changeTrivia();
    }
}
checkWin();
//Change the image function
function changeImage() {
    if (answer === "Slytherin") {
        document.getElementById("picture").src = "https://vignette.wikia.nocookie.net/harrypotter/images/7/70/Slytherincrest.jpg/revision/latest?cb=20110401010320";
    }
    if (answer === "Griffindor") {
        document.getElementById("picture").src = "https://vignette.wikia.nocookie.net/pottermore/images/4/43/Gryffindor_LeviosaEye30794.gif/revision/latest?cb=20130130004308";
    }
    if (answer === "Ravenclaw") {
        document.getElementById("picture").src = "https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg";
    }
    if (answer === "Hufflepuff") {
        document.getElementById("picture").src = "https://images-na.ssl-images-amazon.com/images/I/61cuVMWomZL._UL1500_.jpg";
    }
}
//Change the trivia function
function changeTrivia() {
    if (answer === "Slytherin") {
        $trivia.textContent = ("One of the school houses in Hogwarts. Founded by Salazar Slytherin. The Slytherin coat of arms is a snake. The resident ghost is the Bloody Baron. Harry's arch-enemy, Draco Malfoy, is in Slytherin. Professor Snape is head of Slytherin house.")
    }
    if (answer === "Griffindor") {
        $trivia.textContent = ("One of the four houses in Hogwarts. Harry, Hermione Granger and the Weasleys are all in Gryffindor house. It was founded by Godric Gryffindor and the Gryffindor coat of arms features a lion. The resident ghost is Sir Nicholas de Mimsy-Porpington, also known as Nearly Headless Nick. Professor McGonagall is the head of Gryffindor house and Professor Dumbledore was in Gryffindor in his youth.")
    }
    if (answer === "Ravenclaw") {
        $trivia.textContent = ("One of the four school houses in Hogwarts. Founded by Rowena Ravenclaw. The Ravenclaw coat of arms bears an eagle. The resident ghost is the Grey Lady.")
     }
    if (answer === "Hufflepuff") {
        $trivia.textContent = ("One of the four houses in Hogwarts. It was founded by Helga Hufflepuff and their coat of arms bears a badger. The resident ghost is the Fat Friar.")
    }
}
//Play sound function


//Add event listenier for new game button
$newGameButton.addEventListener("click", newGame);
//Add onkey up event to trigger letter guess

 document.onkeyup = function(event){
     if (event.keyCode >= 65 && event.keyCode <= 90){
         letterGuess(event.key);   
     }
    
 }




});