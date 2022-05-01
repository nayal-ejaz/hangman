var word;
var wordArray;
var wordLength;
// var word = "POKEMON";    // to set one static word
// var wordArray = word.split("");
// var wordLength = word.length;
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

    setWordFromArray();

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

function setWordFromArray() {
    var wordListArray = [
        'ABRUPTLY',
        'ABSURD',
        'ABYSS',
        'AFFIX',
        'ASKEW',
        'AVENUE',
        'AWKWARD',
        'AXIOM',
        'AZURE',
        'BAGPIPES',
        'BANDWAGON',
        'BANJO',
        'BEEKEEPER',
        'BLITZ',
        'BLIZZARD',
        'BOGGLE',
        'BOOKWORM',
        'BUFFALO',
        'BUFFOON',
        'BUZZING',
        'BUZZWORDS',
        'CALIPH',
        'COBWEB',
        'CRYPT',
        'CYCLE',
        'DIZZYING',
        'DUPLEX',
        'DWARVES',
        'EMBEZZLE',
        'EQUIP',
        'ESPIONAGE',
        'EXODUS',
        'FAKING',
        'FISHHOOK',
        'FIXABLE',
        'FLOPPING',
        'FLUFFINESS',
        'FLYBY',
        'FRAZZLED',
        'FRIZZLED',
        'FUCHSIA',
        'FUNNY',
        'GALAXY',
        'GALVANIZE',
        'GAZEBO',
        'GIAOUR',
        'GIZMO',
        'GLOWWORM',
        'GLYPH',
        'GNARLY',
        'GNOSTIC',
        'GOSSIP',
        'GROGGINESS',
        'HAIKU',
        'HAPHAZARD',
        'HYPHEN',
        'ICEBOX',
        'INJURY',
        'IVORY',
        'IVY',
        'JACKPOT',
        'JAUNDICE',
        'JAWBREAKER',
        'JAZZIEST',
        'JAZZY',
        'JELLY',
        'JIGSAW',
        'JINX',
        'JIUJITSU',
        'JOCKEY',
        'JOGGING',
        'JOKING',
        'JOVIAL',
        'JOYFUL',
        'JUICY',
        'JUKEBOX',
        'JUMBO',
        'KAYAK',
        'KEYHOLE',
        'KHAKI',
        'KILOBYTE',
        'KIOSK',
        'KLUTZ',
        'KNAPSACK',
        'LARYNX',
        'LENGTHS',
        'LUCKY',
        'LUXURY',
        'LYMPH',
        'MARQUIS',
        'MATRIX',
        'MEGAHERTZ',
        'MICROWAVE',
        'MNEMONIC',
        'MYSTIFY',
        'NIGHTCLUB',
        'NOWADAYS',
        'NUMBSKULL',
        'NYMPH',
        'ONYX',
        'OVARY',
        'OXIDIZE',
        'OXYGEN',
        'PAJAMA',
        'PEEKABOO',
        'PHLEGM',
        'PIXEL',
        'PIZAZZ',
        'PNEUMONIA',
        'POLKA',
        'PSHAW',
        'PSYCHE',
        'PUPPY',
        'PUZZLING',
        'QUARTZ',
        'QUEUE',
        'QUIZ',
        'QUIZZES',
        'RAZZMATAZZ',
        'RHUBARB',
        'RHYTHM',
        'RICKSHAW',
        'SCHNAPPS',
        'SCRATCH',
        'SHIV',
        'SNAZZY',
        'SPHINX',
        'SPRITZ',
        'SQUAWK',
        'STAFF',
        'STRENGTH',
        'STRENGTHS',
        'STRETCH',
        'STRONGHOLD',
        'STYMIED',
        'SUBWAY',
        'SWIVEL',
        'SYNDROME',
        'THRIFTLESS',
        'THUMBSCREW',
        'TOPAZ',
        'TRANSCRIPT',
        'TRANSGRESS',
        'TRANSPLANT',
        'TRIPHTHONG',
        'TWELFTH',
        'TWELFTHS',
        'UNKNOWN',
        'UNWORTHY',
        'UNZIP',
        'UPTOWN',
        'VAPORIZE',
        'VIXEN',
        'VODKA',
        'VOODOO',
        'VORTEX',
        'WALKWAY',
        'WALTZ',
        'WAVE',
        'WAVY',
        'WAXY',
        'WELLSPRING',
        'WHEEZY',
        'WHISKEY',
        'WHIZZING',
        'WHOMEVER',
        'WIMPY',
        'WITCHCRAFT',
        'WIZARD',
        'WRISTWATCH',
        'XYLOPHONE',
        'YOUTHFUL',
        'YUMMY',
        'ZEPHYR',
        'ZIGZAG',
        'ZIGZAGGING',
        'ZIPPER',
        'ZODIAC',
        'ZOMBIE',
        'SLY',
        'ABLE',
        'ABOUT',
        'ACCOUNT',
        'ACID',
        'ACROSS',
        'ACT',
        'ADDITION',
        'ADJUSTMENT',
        'ADVERTISEMENT',
        'AFTER',
        'AGAIN',
        'AGAINST',
        'AGREEMENT',
        'AIR',
        'ALL',
        'ALMOST',
        'AMONG',
        'AMOUNT',
        'AMUSEMENT',
        'AND',
        'ANGLE',
        'ANGRY',
        'ANIMAL',
        'ANSWER',
        'ANT',
        'ANY',
        'APPARATUS',
        'APPLE',
        'APPROVAL',
        'ARCH',
        'ARGUMENT',
        'ARM',
        'ARMY',
        'ART',
        'AS',
        'AT',
        'ATTACK',
        'ATTEMPT',
        'ATTENTION',
        'ATTRACTION',
        'AUTHORITY',
        'AUTOMATIC',
        'AWAKE',
        'BABY',
        'BACK',
        'BAD',
        'BAG',
        'BALANCE',
        'BALL',
        'BAND',
        'BASE',
        'BASIN',
        'BASKET',
        'BATH',
        'BE',
        'BEAUTIFUL',
        'BECAUSE',
        'BED',
        'BEE',
        'BEFORE',
        'BEHAVIOUR',
        'BELIEF',
        'BELL',
        'BENT',
        'BERRY',
        'BETWEEN',
        'BIRD',
        'BIRTH',
        'BIT',
        'BITE',
        'BITTER',
        'BLACK',
        'BLADE',
        'BLOOD',
        'BLOW',
        'BLUE',
        'BOARD',
        'BOAT',
        'BODY',
        'BOILING',
        'BONE',
        'BOOK',
        'BOOT',
        'BOTTLE',
        'BOX',
        'BOY',
        'BRAIN',
        'BRAKE',
        'BRANCH',
        'BRASS',
        'BREAD',
        'BREATH',
        'BRICK',
        'BRIDGE',
        'BRIGHT',
        'BROKEN',
        'BROTHER',
        'BROWN',
        'BRUSH',
        'BUCKET',
        'BUILDING',
        'BULB',
        'BURN',
        'BURST',
        'BUSINESS'
    ];

    var randomWord =  Math.floor((Math.random() * wordListArray.length));
    word = wordListArray[randomWord];
    //console.log(word);

    wordArray = word.split("");
    wordLength = word.length;
}


// function setWordFromFile() {
    
// }


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
        for (position = 0 ; position < wordLength ; position ++) {  
            // avoid iterating over occupied array places
            // compare with 0 separately without blankCheck to allow correctGuessCount to increment for the first correct guess
            if (position == 0) {
                if (input == wordArray[position]) {
                    document.getElementById(position).innerText = input;
                    correctGuessCount += 1;
                }
            }
            else if (position > 0) {
                // avoid iterating over occupied array places
                let blankElementCheck = document.getElementById(position).innerText;
                if (blankElementCheck == "" && input == wordArray[position]) {
                    document.getElementById(position).innerText = input;
                    correctGuessCount += 1;
                }
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
        let guessListAlphabetToBeCheckedAgainst = document.getElementById("incorrect-guess-" + i.toString()).innerText;
        if (newAlphabetToBeChecked == guessListAlphabetToBeCheckedAgainst) {
            incorrectGuessIsDuplicate = true;
            break; 
            // without break, it goes on to execute for next incremented index and prints the duplicate chr 
            // eg: Q W Q
            // checks Q == inputQ at i=0 -> incorrectGuessIsDuplicate returned true. increments i
            // checks W != inputQ at i=1 -> incorrectGuessIsDuplicate returned false, thus allowing print func to execute. increments i
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
                revealWord();
                gameOver = true;
            }  
        }
    }
}

function revealWord () {
    //document.getElementById("answer").innerHTML = "ya couldn't even guess " + word.toString() + ". TCH. TCH.";
    for (a = 0 ; a < wordLength ; a ++) {
        document.getElementById(a).innerText = wordArray[a];
    }
}

function playAgain () {
    window.location.reload();
}





