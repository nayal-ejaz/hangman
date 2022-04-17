var word = "POKEMON";
var wordArray = word.split("");
var wordLength = word.length;
var input;
var position;
var guess;
var blankSpace;
var incorrectGuess;
var incorrectGuessCount = 0;
var correctGuessCount = 0;
var gameOver = false;

window.onload = function () {
    initialize ();
}

function initialize () {
    // create blank spaces for correct guesses
    for (let x=0; x < wordLength ; x++) {
        blankSpace = document.createElement("span");
        blankSpace.id = x;
        blankSpace.classList.add("blankSpace");
        blankSpace.innerText = "";
        document.getElementById("word").appendChild(blankSpace);
    }

    // create tiles for incorrect guesses
    for (let i=0; i < 6 ; i++) {
        let incorrectGuess = document.createElement("span");
        incorrectGuess.id = "incorrect-guess-" + i.toString();
        incorrectGuess.classList.add("incorrectGuess");
        incorrectGuess.innerText = "";
        document.getElementById("incorrect-guesses-list").appendChild(incorrectGuess);
    }

    takeInput();
}


function takeInput () {
    document.addEventListener("keyup", (checkAlphabet) => {
        if ("KeyA" <= checkAlphabet.code && checkAlphabet.code <= "KeyZ") {
            input = checkAlphabet.code[3];
            if (word.includes(input)) {
                guess = true;
                printCorrectGuess();
            }
            else {
                guess = false;
                penalty();
            }
        }
    })
}


function printCorrectGuess () {
    if (gameOver == false) {
        // for a word where all characters are distinct. eg. "drum"
        // position = word.indexOf(input); // gets 1st occurence index of a repetitive character

        // for a word containing repetitive characters. eg. "pOkemOn"
        for (position = 0 ; position < wordLength ; position ++) {  // to do avoid iterating over occupied array places
            // let blankElementCheck = document.getElementById(position).innerText;
            if (input == wordArray[position]) {
                document.getElementById(position).innerText = input;
                correctGuessCount += 1;
            }
        }
        
        if (correctGuessCount == wordLength) { 
            manImage = "hmYaSaved.png";
            document.getElementById("man").src = manImage;
            gameOver = true;
        }
    }
}


function penalty () {

    // check if duplicate exists in the list
    var incorrectGuessIsDuplicate = false;
    let newAlphabetToBeChecked = input;
    for (let i = 0 ; i < incorrectGuessCount ; i ++) {
        // console.log(document.getElementById("incorrect-guess-" + i.toString()).innerText);
        let guessListAlphabetToBeCheckedAgainst = document.getElementById("incorrect-guess-" + i.toString()).innerText;
        if (newAlphabetToBeChecked == guessListAlphabetToBeCheckedAgainst) {
            incorrectGuessIsDuplicate = true;
        }
        else {
            incorrectGuessIsDuplicate = false;
        }
    }


    //print in incorrect guess list
    if (incorrectGuessIsDuplicate == false) {
        if (gameOver == false) {
            if (incorrectGuessCount < 5) {
                document.getElementById("incorrect-guess-" + incorrectGuessCount.toString()).innerText = input;
                manImage = "hm" + incorrectGuessCount.toString() + ".png";
                document.getElementById("man").src = manImage;
                incorrectGuessCount += 1;
            }
            else if (incorrectGuessCount == 5) {
                document.getElementById("incorrect-guess-" + incorrectGuessCount.toString()).innerText = input;
                manImage = "hmYaDed.png";
                document.getElementById("man").src = manImage;
                gameOver = true;
            }  
        }
    }
}

function answerReveal () {
    //you couldnt guess <word>. tch tch.
}





