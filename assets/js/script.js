// Quiz Questions
const questions = [
  {
    q: "What are the kids names in Bob's Burgers?",
    a: "b",
    choices: {
      a: "Frank, Katy, Marcie",
      b: "Gene, Louise, Tina",
      c: "Gene, Emily, Beth",
      d: "Bob, Maggie, Gina",
    },
  },
  {
    q: "What is Bob's wife's name?",
    a: "d",
    choices: {
      a: "Marge",
      b: "Phyllis",
      c: "Annie",
      d: "Linda",
    },
  },
  {
    q: "What is Louise's typical hat?",
    a: "b",
    choices: {
      a: "Tophat",
      b: "Bunny Ears Hat",
      c: "Helmet",
      d: "Nothing",
    },
  },
  {
    q: "Which of the Belcher's is a huge music fan?",
    a: "a",
    choices: {
      a: "Gene",
      b: "Tina",
      c: "Bob",
      d: "Linda",
    },
  },
  {
    q: "What business is always next door to the restaurant?",
    a: "d",
    choices: {
      a: "Yoga Studio",
      b: "Grocery Store",
      c: "Bank",
      d: "Funeral Home",
    },
  },
  {
    q: "Who is Bob's rival?",
    a: "a",
    choices: {
      a: "Jimmy Pesto",
      b: "Frank Ferry",
      c: "Matt Gravel",
      d: "Sara Silk",
    },
  },
  {
    q: "Who is Bob's closest friend?",
    a: "c",
    choices: {
      a: "Jimmy",
      b: "Danny",
      c: "Teddy",
      d: "Mort",
    },
  },
  {
    q: "Who does Tina have a huge crush on?",
    a: "b",
    choices: {
      a: "Zeke",
      b: "Jimmy Pesto Jr.",
      c: "Regular-Sized Rudy",
      d: "Boo Boo",
    },
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

// Questions Function

var startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", function () {
  questions[0].q;
  // console.log(questions[0].q);
  questions[0].c[0];
  // console.log(questions[0].c[0]);
  setTime();
});

function showQuestion(questions, quizContainer) {
  var output = [];
  var c;
  for (var i = 0; i < questions.length; i++) {
    choices = [];
  }
}

// const questionsString = JSON.stringify(questions[0].q);
// console.log(questionsString);
// var questionContainer = document.querySelector(".questionContainer");
// questionContainer.textContent = questionsString;

// const optionContainer = JSON.stringify(questions[0].a[0]);
// // console.log(optionContainer);

// function optContainer() {
//   var optA = document.createElement("buttonA");
//   var optB = document.createElement("buttonB");
//   var optC = document.createElement("buttonC");
//   var optD = document.createElement("buttonD");
//   optA.innerHTML = optionContainer;
//   document.body.appendChild(optA);
// }

// stringify answers
// create options elements
// do querySelector/text content to get the answers to screen
