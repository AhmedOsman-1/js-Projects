const data = [
  {
    id: 1,
    question: "Who is the best Freefire Player in The World???",
    answer: [
      { answer: "Red1 Ahmed", isCorrect: false },
      { answer: "Anayet Ullah", isCorrect: false },
      { answer: "Ahmed Osman", isCorrect: true },
      { answer: "Tuhin", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who is the retired legend in Freefire history???",
    answer: [
      { answer: "Tuhin", isCorrect: false },
      { answer: "Anayet Ullah", isCorrect: false },
      { answer: "Red1 Ahmed", isCorrect: false },
      { answer: "Ahmed Osman", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Who was best for rush alone and wive out the full squad???",
    answer: [
      { answer: "Ahmed Osman", isCorrect: true },
      { answer: "Red1 Ahmed", isCorrect: false },
      { answer: "Anayet Ullah", isCorrect: false },
      { answer: "Tuhin", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "If you want to rush which place is best for land???",
    answer: [
      { answer: "Gf's arms", isCorrect: false },
      { answer: "Peak", isCorrect: true },
      { answer: "Clock Tower", isCorrect: false },
      { answer: "In a Resturant", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Eating Mashromee while fasting in freefire is not allow!! Who's quote is this? ",
    answer: [
      { answer: "Choto hujur", isCorrect: false },
      { answer: "Tuhin(Gorib er id)", isCorrect: false },
      { answer: "Asif Mahmud", isCorrect: false },
      { answer: "Baba DewanBagi", isCorrect: true },
    ],
  },
  {
    id: 6,
    question: "Which was the best peak time in freefire history?",
    answer: [
      { answer: "When Tuhin was gorib er id'", isCorrect: false },
      { answer: "When Redwan was Red1", isCorrect: true },
      { answer: "When Osman was O6MN", isCorrect: true },
      { answer: "When Anayet was A98", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer = null;

// Play again function
const playAgain = () => {
  correctCount = 0;
  wrongCount = 0;
  qIndex = 0;
  selectedAnswer = null;
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  showQuestion(qIndex);
};

// Show results function
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(".correct-score").textContent = `✅ Correct Answers: ${correctCount}`;
  resultScreen.querySelector(".wrong-score").textContent = `❌ Wrong Answers: ${wrongCount}`;
  resultScreen.querySelector(".total-score").textContent = `🏆 Score: ${correctCount * 10 - wrongCount * 5}`;
};

// Show question function
const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();

  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answers.innerHTML = data[qNumber].answer
    .map(
      (item, index) =>
        `<div class="answer">
          <input name="answer" type="radio" id="answer${index}" value="${item.isCorrect}">
          <label for="answer${index}">${item.answer}</label>
        </div>`
    )
    .join("");

  selectAnswer();
};

// Select answer function
const selectAnswer = () => {
  answers.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

// Submit answer function
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      if (JSON.parse(selectedAnswer) === true) {
        correctCount++;
      } else {
        wrongCount++;
      }
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("⛔ Please select an answer before submitting!");
    }
  });
};

// Set up result screen
resultScreen.innerHTML = `
  <h2>Game Over</h2>
  <p class="correct-score"></p>
  <p class="wrong-score"></p>
  <p class="total-score"></p>
  <button class="play">Play Again</button>
`;

// Event listener for play again button
document.querySelector(".play").addEventListener("click", playAgain);

submitAnswer();
showQuestion(qIndex);
