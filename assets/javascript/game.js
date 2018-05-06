document.addEventListener("DOMContentLoaded", function() {
var wins = 0;
var losses = 0;
var words = ["gyriffindor", "hufflepuff", "slytherin", "ravenclaw"];
var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("letters").innerHTML = letter;
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
       answerArray[i] = "_";
    } 
       var remainingLetters = word.length;
       document.getElementById("word").innerHTML = answerArray.join("");
       while (remainingLetters >0) {
        
       }
    
}
 






});