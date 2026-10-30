
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style a web page?",
        answers: [
            "Java",
            "Python",
            "CSS",
            "C++"
        ],
        correct: 2
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        answers: [
            "int",
            "let",
            "define",
            "variable"
        ],
        correct: 1
    },
    {
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "getElementsByClass()",
            "queryById()",
            "selectElement()"
        ],
        correct: 0
    },
    {
        question: "Which event occurs when a user clicks a button?",
        answers: [
            "change",
            "mouseover",
            "click",
            "submit"
        ],
        correct: 2
    }
];

const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Display the current question
function showQuestion() {
    answered = false;

    const currentQuestion = questions[currentQuestionIndex];

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    questionElement.textContent = currentQuestion.question;

    answerButtons.replaceChildren();
    feedback.textContent = "";
    nextButton.hidden = true;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";
        button.type = "button";

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answerButtons.appendChild(button);
    });
}

// Check the selected answer
function selectAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestionIndex].correct;
    const buttons = answerButtons.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        feedback.textContent = "Correct Answer!";
        feedback.style.color = "green";
    } else {
        selectedButton.classList.add("incorrect");
        feedback.textContent = "Incorrect! Green option is correct.";
        feedback.style.color = "red";
    }

    nextButton.hidden = false;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Show Result";
    } else {
        nextButton.textContent = "Next Question";
    }
}

// Move to the next question or show result
function nextQuestion() {
    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Display final score
function showResult() {
    quizBox.hidden = true;
    resultBox.hidden = false;

    scoreElement.textContent =
        `Your Score: ${score} / ${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    quizBox.hidden = false;
    resultBox.hidden = true;

    nextButton.textContent = "Next Question";

    showQuestion();
}

// Add button click events
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Start the quiz
showQuestion();
