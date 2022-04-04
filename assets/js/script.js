// Quiz Questions
const questions = [
  {
    q: "What are the kids names in Bob's Burgers?",
    a: "Gene, Louise, Tina",
    c: [
      "Frank, Katy, Marcie",
      "Gene, Louise, Tina",
      "Gene, Emily, Beth",
      "Bob, Maggie, Gina",
    ],
  },
  {
    q: "What is Bob's wife's name?",
    a: "Linda",
    c: ["Marge", "Phyllis", "Annie", "Linda"],
  },
  {
    q: "What is Louise's typical hat?",
    a: "Bunny Ears Hat",
    c: ["Tophat", "Bunny Ears Hat", "Helmet", "Nothing"],
  },
  {
    q: "Which of the Belcher's is a huge music fan?",
    a: "Gene",
    c: ["Gene", "Tina", "Bob", "Linda"],
  },
  {
    q: "What business is always next door to the restaurant?",
    a: "Funeral Home",
    c: ["Yoga Studio", "Grocery Store", "Bank", "Funeral Home"],
  },
  {
    q: "Who is Bob's rival?",
    a: "Jimmy Pesto",
    c: ["Jimmy Pesto", "Frank Ferry", "Matt Gravel", "Sara Silk"],
  },
  {
    q: "Who is Bob's closest friend?",
    a: "Teddy",
    c: ["Jimmy", "Danny", "Teddy", "Mort"],
  },
  {
    q: "Who does Tina have a huge crush on?",
    a: "Jimmy Pesto Jr.",
    c: ["Zeke", "Jimmy Pesto Jr.", "Regular-Sized Rudy", "Boo Boo"],
  },
];

var timeEl = document.querySelector(".timer");

var secondsLeft = 60;

// Timer Function
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // console.log(secondsLeft);
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "You ran out of time :( Try again";
}

setTime();

// Questions Function

var startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", function () {
  questions[0].q;
  // console.log(questions[0].q);
  questions[0].a[0];
  // console.log(questions[0].a[0]);
});

const questionsString = JSON.stringify(questions[0].q);
// console.log(questionsString);
var questionContainer = document.querySelector(".questionContainer");
questionContainer.textContent = questionsString;

const optionContainer = JSON.stringify(questions[0].a[0]);
// console.log(optionContainer);

function optContainer() {
  var optA = document.createElement("button");
  var optB = document.createElement("button");
  var optC = document.createElement("button");
  var optD = document.createElement("button");
  optA.innerHTML = optionContainer;
  document.body.appendChild(optA);
}

// stringify answers
// create options elements
// do querySelector/text content to get the answers to screen
