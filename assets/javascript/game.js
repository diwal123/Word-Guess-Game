//I am having some problem with scoring system and the game only starts when I press a key.

var totalLives = 7;

var chr = "abcdefghijklmnopqrstuvwxyz";
var aToZ = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var countries = [
  "history",
  "party",
  "within",
  "result",
  "change",
  "morning",
  "reason",
  "research",
  "early",
  "before",
  "moment",
  "himself",
  "teacher",
  "force",
  "offer",
  "enough",
  "education",
  "across",
  "although",
  "remember",
  "second",
  "maybe",
  "toward",
  "policy",
  "everything",
  "process",
  "music",
  "including",
  "consider",
  "appear",
  "actually",
  "probably",
  "human",
  "serve",
  "market",
  "expect",
  "sense",
  "build",
  "nation",
  "college",
  "interest",
  "death",
  "course",
  "someone",
  "experience",
  "behind",
  "reach",
  "local",
  "remain",
  "effect",
  "suggest",
  "class",
  "control",
  "raise",
  "perhaps",
  "little",
  "field",
  "former",
  "major",
  "sometimes",
  "require",
  "along",
  "development",
  "themselves",
  "report",
  "better",
  "economic",
  "effort",
  "decide",
  "strong",
  "possible",
  "heart",
  "leader",
  "light",
  "voice",
  "whole",
  "police",
  "finally",
  "return",
  "military",
  "price",
  "report",
  "according",
  "decision",
  "explain",
  "develop",
  "relationship",
  "carry",
  "drive",
  "federal",
  "break",
  "better",
  "difference",
  "thank",
  "receive",
  "value",
  "international",
  "building",
  "action",
  "model",
  "season",
  "society",
  "because",
  "director",
  "early",
  "position",
  "player",
  "agree",
  "especially",
  "record",
  "paper",
  "special",
  "space",
  "ground",
  "support",
  "event",
  "official",
  "whose",
  "matter",
  "everyone",
  "center",
  "couple",
  "project",
  "activity",
  "table",
  "court",
  "produce",
  "teach",
  "situation",
  "industry",
  "figure",
  "street",
  "image",
  "itself",
  "phone",
  "either",
  "cover",
  "quite",
  "picture",
  "clear",
  "practice",
  "piece",
  "recent",
  "describe",
  "product",
  "doctor",
  "patient",
  "worker",
  "movie",
  "certain",
  "north",
  "personal",
  "support",
  "simply",
  "third",
  "technology",
  "catch",
  "computer",
  "attention",
  "source",
  "nearly",
  "organization",
  "choose",
  "cause",
  "point",
  "century",
  "evidence",
  "window",
  "difficult",
  "listen",
  "culture",
  "billion",
  "chance",
  "brother",
  "energy",
  "period",
  "course",
  "summer",
  "realize",
  "hundred",
  "available",
  "plant",
  "likely",
  "opportunity",
  "short",
  "letter",
  "condition",
  "choice",
  "place",
  "single",
  "daughter",
  "administration",
  "south",
  "husband",
  "floor",
  "campaign",
  "material",
  "population",
  "economy",
  "medical",
  "hospital",
  "church",
  "close",
  "thousand",
  "current",
  "future",
  "wrong",
  "involve",
  "defense",
  "anyone",
  "increase",
  "security",
  "myself",
  "certainly",
  "sport",
  "board",
  "subject",
  "officer",
  "private",
  "behavior",
  "performance",
  "fight",
  "throw",
  "quickly",
  "second",
  "order",
  "author",
  "represent",
  "focus",
  "foreign",
  "blood",
  "agency",
  "nature",
  "color",
  "recently",
  "store",
  "reduce",
  "sound",
  "before",
  "movement",
  "enter",
  "share",
  "common",
  "other",
  "natural",
  "concern",
  "series",
  "significant",
  "similar",
  "language",
  "usually",
  "response",
  "animal",
  "factor",
  "decade",
  "article",
  "shoot",
  "seven",
  "artist",
  "scene",
  "stock",
  "career",
  "despite",
  "central",
  "eight",
  "treatment",
  "beyond",
  "happy",
  "exactly",
  "protect",
  "approach",
  "serious",
  "occur",
  "media",
  "ready",
  "thought",
  "individual",
  "simple",
  "quality",
  "pressure",
  "accept",
  "answer",
  "resource",
  "identify",
  "meeting",
  "determine",
  "prepare",
  "disease",
  "whatever",
  "success",
  "argue",
  "particularly",
  "amount",
  "ability",
  "staff",
  "recognize",
  "indicate",
  "character",
  "growth",
  "degree",
  "wonder",
  
];
var word = countries[Math.floor(Math.random() * countries.length)];
var finalDisplay;

guessedLetter = [];
guessesCharacter = [];

//var guessedLetterSplit = guessedLetter.split("");
//console.log(guessedLetterSplit);

//Initial Display for player before sliced out
var toDisplay = "_________________________________________________";
// console.log (toDisplay);

//Initial Display for player after sliced out
var anotherDisplay = toDisplay.slice(0, word.length);
console.log(anotherDisplay);

alert(
  "Welcome to Hangman. You will get 7 chances to guess. Please click on OK and press ENTER to start"
);

//typed letter
document.onkeypress = function(guess) {
  var userGuess = guess.key;

  document.getElementById("mysteryWord").innerHTML = anotherDisplay;
  document.getElementById("chancesSpan").innerHTML = totalLives;

  // all the guesses

  for (var j = 0; j < aToZ.length; j++) {
    if (userGuess === chr.charAt(j)) {
      guesses(guessedLetter, userGuess);
      document.getElementById("allGuessesSpan").innerHTML = guessedLetter;
    }
  }

  var flag = false;
  for (var i = 0; i < word.length; i++) {
    if (userGuess === word.charAt(i)) {
      console.log(anotherDisplay);
      anotherDisplay = replaceAt(anotherDisplay, i, word[i]);
      flag = true;
      document.getElementById("mysteryWord").innerHTML = anotherDisplay;

      if (anotherDisplay === word) {
        document.getElementById("resultsSpan").innerHTML = "Winner";
        alert("The word is: " + word + "." + " YOU WIN");
        location.reload();
      }
    }
  }
  if (!flag) {
    if (totalLives == 0) {
      alert("The word is: " + word + "." + " YOU LOOSE");
      location.reload();
      return;
    }
    totalLives = totalLives - 1;
  }
};

// Function that replaces a letter in a string by position (index)
// string - original string
// position - index to replace at
// newChar - character to be replaced with
function replaceAt(string, position, newChar) {
  array = string.split("");
  array[position] = newChar;
  string = array.join("");
  return string;
}

function guesses(a, b) {
  a.push(b);
  console.log(guessedLetter);
}
