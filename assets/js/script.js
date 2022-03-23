var timeEl = document.querySelector(".timer");

var secondsLeft = 60;

// Timer Function
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft);
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

// Quiz Questions
const Questions = [
  {
    id: 0,
    q: "What are the kids names in Bob's Burgers?",
    a: [
      { text: "Frank, Katy, Marcie", isCorrect: false },
      { text: "Gene, Louise, Tina", isCorrect: true },
      { text: "Gene, Emily, Beth", isCorrect: false },
      { text: "Bob, Maggie, Gina", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is Bob's wife's name?",
    a: [
      { text: "Marge", isCorrect: false },
      { text: "Phyllis", isCorrect: false },
      { text: "Annie", isCorrect: false },
      { text: "Linda", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "What is Louise's typical hat?",
    a: [
      { text: "Tophat", isCorrect: false },
      { text: "Bunny Ears Hat", isCorrect: true },
      { text: "Helmet", isCorrect: false },
      { text: "Nothing", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Which of the Belcher's is a huge music fan?",
    a: [
      { text: "Gene", isCorrect: true },
      { text: "Tina", isCorrect: false },
      { text: "Bob", isCorrect: false },
      { text: "Linda", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "What business is always next door to the restaurant?",
    a: [
      { text: "Yoga Studio", isCorrect: false },
      { text: "Grocery Store", isCorrect: false },
      { text: "Bank", isCorrect: false },
      { text: "Funeral Home", isCorrect: true },
    ],
  },
  {
    id: 5,
    q: "Who is Bob's rival?",
    a: [
      { text: "Jimmy Pesto", isCorrect: true },
      { text: "Frank Ferry", isCorrect: false },
      { text: "Matt Gravel", isCorrect: false },
      { text: "Sara Silk", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Who is Bob's closest friend?",
    a: [
      { text: "Jimmy", isCorrect: false },
      { text: "Danny", isCorrect: false },
      { text: "Teddy", isCorrect: true },
      { text: "Mort", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Who does Tina have a huge crush on?",
    a: [
      { text: "Zeke", isCorrect: false },
      { text: "Jimmy Pesto", isCorrect: true },
      { text: "Regular-Sized Rudy", isCorrect: false },
      { text: "Boo Boo", isCorrect: false },
    ],
  },
];
