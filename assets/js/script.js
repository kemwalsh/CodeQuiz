// Quiz Questions
const questions = [
  {
    q: "What are the kids names in Bob's Burgers?",
    a: "Gene, Louise, Tina",
    choices: {
      a: "Frank, Katy, Marcie",
      b: "Gene, Louise, Tina",
      c: "Gene, Emily, Beth",
      d: "Bob, Maggie, Gina",
    },
  },
  {
    q: "What is Bob's wife's name?",
    a: "Linda",
    choices: {
      a: "Marge",
      b: "Phyllis",
      c: "Annie",
      d: "Linda",
    },
  },
  {
    q: "What is Louise's typical hat?",
    a: "Bunny Ears Hat",
    choices: {
      a: "Tophat",
      b: "Bunny Ears Hat",
      c: "Helmet",
      d: "Nothing",
    },
  },
  {
    q: "Which of the Belcher's is a huge music fan?",
    a: "Gene",
    choices: {
      a: "Gene",
      b: "Tina",
      c: "Bob",
      d: "Linda",
    },
  },
  {
    q: "What business is always next door to the restaurant?",
    a: "Funeral Home",
    choices: {
      a: "Yoga Studio",
      b: "Grocery Store",
      c: "Bank",
      d: "Funeral Home",
    },
  },
  {
    q: "Who is Bob's rival?",
    a: "Jimmy Pesto",
    choices: {
      a: "Jimmy Pesto",
      b: "Frank Ferry",
      c: "Matt Gravel",
      d: "Sara Silk",
    },
  },
  {
    q: "Who is Bob's closest friend?",
    a: "Teddy",
    choices: {
      a: "Jimmy",
      b: "Danny",
      c: "Teddy",
      d: "Mort",
    },
  },
  {
    q: "Who does Tina have a huge crush on?",
    a: "Jimmy Pesto Jr.",
    choices: {
      a: "Zeke",
      b: "Jimmy Pesto Jr.",
      c: "Regular-Sized Rudy",
      d: "Boo Boo",
    },
  },
];

var currentIndex = 0;

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
  setTime();

  var startContainer = document.querySelector(".startContainer");
  startContainer.classList.add("hide");

  displayQuestion()
});

function displayQuestion () {
  var quizContainer = document.querySelector(".quizContainer");

  quizContainer.innerHTML = "";

  var questionH2 = document.createElement("h2");
  questionH2.textContent = questions[currentIndex].q;

  quizContainer.append(questionH2);

  for(choice in questions[currentIndex].choices) {
    var choicesBtn = document.createElement("button");
    choicesBtn.textContent = questions[currentIndex].choices[choice];
    choicesBtn.addEventListener("click", function (event) {
      // get the value of the button
      console.log(event.target.textContent)

      // get the value of the correct answer
      console.log(questions[currentIndex].a)

      // compare
      if(event.target.textContent === questions[currentIndex].a) {
        alert("Correct!");
      } else {
        // take off 10 seconds
        secondsLeft-=10
        // secondsLeft = secondsLeft - 10
      }

      // move to the next question
      currentIndex++;
      displayQuestion()

    })

    quizContainer.append(choicesBtn)
  }
}
