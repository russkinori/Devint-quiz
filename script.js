// Variables for quiz
let currentQuestion = 0;
let timer = 60;
let countdownTimer = 0;
let score = 0;
let questionSet = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Madrid", "Rome", "London"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Jupiter", "Mars", "Earth", "Venus"],
        answer: "Jupiter"
    }
];

// Create elements to display quiz
let startButton = document.querySelector("#start-button");
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");
let timeEl = document.querySelector("#time");
let scoreEl = document.querySelector("#score");
let initialsEl = document.querySelector("#initials");
let submitButton = document.querySelector("#submit-button");

// Add event listener to start button
// startButton.addEventListener("click", startQuiz);
//Create an event listener on the start button
startButton.addEventListener("click", function (event) {
    console.log(this.event.target)
});

// Function to start quiz
function startQuiz() {
    startButton.classList.replace("start", "hide");      //Hide the default screen
    startScreen.classList.add("hide");      //Hide the start quiz button
    questionEl.classList.remove("hide");    //Display the first question
    currentQuestion = 0;

    // Start countdown
    countdownTimer = setInterval(function () {
        timer--; // Deduct time by 1 
        timeEl.textContent = timer; // Display remaining time 
        if (timer <= 0 || currentQuestion >= questionSet.length) {
            endQuiz();
        }
    }, 1000);

    // Display first question
    displayQuestion();
}

// Function to display question
function displayQuestion() {
    let currentQuestionObj = questionSet[currentQuestion];
    questionEl.textContent = currentQuestionObj.question;

    // Clear previous choices
    while (choicesEl.firstChild) {
        choicesEl.removeChild(choicesEl.firstChild);
    }

    // Display answer choices
    currentQuestionObj.choices.forEach(function (choice) {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choicesEl.appendChild(choiceButton);
        choiceButton.addEventListener("click", function () {
            checkAnswer(choice);
        });
    });
}

// Function to check answer
function checkAnswer(choice) {
    let currentQuestionObj = questionSet[currentQuestion];
    if (choice === currentQuestionObj.answer) {
        score++;
        scoreEl.textContent = score;
    } else {
        timer -= 10; // Deduct 10 seconds from timer for wrong answer
    }

    currentQuestion++;

    if (currentQuestion >= questionSet.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

// Function to end quiz
function endQuiz() {
    clearInterval(countdownTimer);
    questionEl.classList.add("hide");
    choicesEl.classList.add("hide");
    timeEl.classList.add("hide");
    initialsEl.classList.remove("hide");
    submitButton.classList.remove("hide");
}


