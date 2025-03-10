const data = [
  {
    id: 1,
    question: "Who is the best Freefire Player in The World???",
    answer: [
      { text: "Red1 Ahmed", isCorrect: false },
      { text: "Anayet Ullah", isCorrect: false },
      { text: "Ahmed Osman", isCorrect: true },
      { text: "Tuhin", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who is the retired legend in Freefire history???",
    answer: [
      { text: "Tuhin", isCorrect: false },
      { text: "Anayet Ullah", isCorrect: false },
      { text: "Red1 Ahmed", isCorrect: false },
      { text: "Ahmed Osman", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Who was best for rush alone and wipe out the full squad???",
    answer: [
      { text: "Ahmed Osman", isCorrect: true },
      { text: "Red1 Ahmed", isCorrect: false },
      { text: "Anayet Ullah", isCorrect: false },
      { text: "Tuhin", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "If you want to rush, which place is best for landing???",
    answer: [
      { text: "Gf's arms", isCorrect: false },
      { text: "Peak", isCorrect: true },
      { text: "Clock Tower", isCorrect: false },
      { text: "In a Restaurant", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Eating Mashromee while fasting in Freefire is not allowed! Who's quote is this?",
    answer: [
      { text: "Choto hujur", isCorrect: false },
      { text: "Tuhin (Gorib er id)", isCorrect: false },
      { text: "Asif Mahmud", isCorrect: false },
      { text: "Baba DewanBagi", isCorrect: true },
    ],
  },
  {
    id: 6,
    question: "Which was the best peak time in Freefire history?",
    answer: [
      { text: "When Tuhin was 'Gorib er id'", isCorrect: false },
      { text: "When Redwan was Red1", isCorrect: true },
      { text: "When Osman was O6MN", isCorrect: true },
      { text: "When Anayet was A98", isCorrect: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
const pointsPerCorrectAnswer = 10;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = data[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.isCorrect) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score += pointsPerCorrectAnswer;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("blurred");
    }
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < data.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  let totalPoints = data.length * pointsPerCorrectAnswer;
  let message = "";

  if (score === totalPoints) {
    message = "🔥 You have such a great knowledge in Freefire!";
  } else if (score > data.length / 2) {
    message = "🎮 Played well! You know a bit about Freefire history!";
  } else {
    message = "😢 Try again! You can do better!";
  }

  questionElement.innerHTML = `
    <div class="score-container">
      <h2>Your Score:</h2>
      <h1 class="score">${score} Out of ${totalPoints}</h1>
      <p class="score-message">${message}</p>
    </div>
  `;

  nextButton.innerHTML = "🔄 Play again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < data.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();



// // Play again function
// const playAgain = () => {
//   correctCount = 0;
//   wrongCount = 0;
//   qIndex = 0;
//   selectedAnswer = null;
//   resultScreen.style.display = "none";
//   gameScreen.style.display = "block";
//   showQuestion(qIndex);
// };

// // Show results function
// const showResult = () => {
//   resultScreen.style.display = "block";
//   gameScreen.style.display = "none";

//   resultScreen.querySelector(".correct-score").textContent = `✅ Correct Answers: ${correctCount}`;
//   resultScreen.querySelector(".wrong-score").textContent = `❌ Wrong Answers: ${wrongCount}`;
//   resultScreen.querySelector(".total-score").textContent = `🏆 Score: ${correctCount * 10 - wrongCount * 5}`;
// };

// // Show question function
// const showQuestion = (qNumber) => {
//   if (qIndex === data.length) return showResult();

//   selectedAnswer = null;
//   question.textContent = data[qNumber].question;
//   answers.innerHTML = data[qNumber].answer
//     .map(
//       (item, index) =>
//         `<div class="answer">
//           <input name="answer" type="radio" id="answer${index}" value="${item.isCorrect}">
//           <label for="answer${index}">${item.answer}</label>
//         </div>`
//     )
//     .join("");

//   selectAnswer();
// };

// // Select answer function
// const selectAnswer = () => {
//   answers.querySelectorAll("input").forEach((el) => {
//     el.addEventListener("click", (e) => {
//       selectedAnswer = e.target.value;
//     });
//   });
// };

// // Submit answer function
// const submitAnswer = () => {
//   submit.addEventListener("click", () => {
//     if (selectedAnswer !== null) {
//       if (JSON.parse(selectedAnswer) === true) {
//         correctCount++;
//       } else {
//         wrongCount++;
//       }
//       qIndex++;
//       showQuestion(qIndex);
//     } else {
//       alert("⛔ Please select an answer before submitting!");
//     }
//   });
// };

// // Set up result screen
// resultScreen.innerHTML = `
//   <h2>Game Over</h2>
//   <p class="correct-score"></p>
//   <p class="wrong-score"></p>
//   <p class="total-score"></p>
//   <button class="play">Play Again</button>
// `;

// // Event listener for play again button
// document.querySelector(".play").addEventListener("click", playAgain);

// submitAnswer();
// showQuestion(qIndex);
