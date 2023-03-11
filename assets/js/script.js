//Start the quiz
    //Press the Start Quiz button 
        // Hide the default screen
            //How can I hide the default screen?
                //Replace the start class in the div element with the hide class 
        // Display the first question and list of answers 
            //How can I display the questions?
                //Create a question bank
                //Remove the class hide from the div element
                //Repace the text in the h2 element
            //How can I display the answers?
                //Create the element
                //Set the text
                //Append to the html area

        // Display the total time and start the countdown 
            //How can I display the total time?
                //Replace the number within the span element
            //How can I start the timer?
                //
//Select answers
    // Click the button of the potential answer
    // Move to the next question
    // Deduct from the remaining time if selection is incorrect.
 
//Finish quiz  
    //End quiz when timer reaches 0 or all questions are answered
    //Allow user to add their intials and save their score
    //Allow user to clear their intials and start over.

//Create variables for the HTML elements
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let choicesEl = document.querySelector("#choices")
let questionBox = document.querySelector("#question-title")
let time = document.querySelector("#time");
let endScreen = document.querySelector("#end-screen");
let scoreEl = document.querySelector("#final-score");


// Create an array of objects for all questions and answers
let questionSet = [
    {
        question: "The symbol [ ] represents a(n):",
        choices: ["a. Object", "b. Variable", "c. Array", "d. Class"],
        answer: "c. Array"
    },
    {
        question: "Which of the following is a scope for variables?",
        choices: ["a. Regional", "b. Global", "c. International", "d. National"],
        answer: "b. Global"
    },
    {
        question: "Which HTML element links to a Javascript file?",
        choices: ["a. <script>", "b. <link>", "c. <meta>", "d. <header>"],
        answer: "a. <script>" 
    },
    {
        question: "Which of the following is the syntax for an If statement?",
        choices: ["a. if(condition)", "b. if(condition)< >", "c. if-condition{ }", "d. if(condition){ }"],
        answer: "d. if(condition){ }"
    }
];


let currentQuestion = 0;        //Variable for current question index
let timer = 100;                //Variable for total time
let countdownTimer = 0;         //Variable for timer
let score = 0;                  //Variable for the final score

//Create an event listener on the start button
startButton.addEventListener("click", startQuiz);

//Function to start the quiz
function startQuiz(){

    startScreen.classList.add("hide");      //Hide the start quiz button
    questionEl.classList.remove("hide");    //Display the first question
    currentQuestion = 0;
    
    //Start the countdown
    countdownTimer = setInterval(function(){
        
        timer--;                            //Deduct time by 1 
        time.textContent = timer;            //Display remaining time 

    }, 1000);                              //Change time every second    
    
    //Render the questions
    renderquestionSet();
}


//Function to display the current question and options
function renderquestionSet(){
    // Display the question
    let currentQuestionObject = questionSet[currentQuestion];
    questionBox.textContent = currentQuestionObject.question;

    // Clear previous choices
    while (choicesEl.firstChild) {
        choicesEl.removeChild(choicesEl.firstChild);
    }

    currentQuestionObject.choices.forEach(function(choice){

            //Increment through the full set of questions
            let choiceButton = document.createElement("button");                  //Create a button element in the html file      
            choiceButton.textContent = choice;                           //Display the answers within the buttons
            choicesEl.appendChild(choiceButton)                                   //Place the buttons within the choices div
            choiceButton.classList.add("btn");
            
            choiceButton.addEventListener("click", function(event){
                if(event.target.matches("button")){
                            checkAnswer(choice);
                            console.log(choice);  
                        }
    })
            
        });
}; 

// Function to check answer
function checkAnswer(choice) {
    let currentQuestionObject = questionSet[currentQuestion];
    if (choice !== currentQuestionObject.answer) {
        timer -= 10; // Deduct 5 seconds from timer for wrong answer
        score= timer;
        scoreEl.textContent = score;
    } else {
        score= timer;
        scoreEl.textContent = score;
    }
    console.log(score, timer);
    currentQuestion++;
    endQuiz();

}

// Function to end quiz
function endQuiz() {

    if (currentQuestion >= questionSet.length || timer<=0) {
        endScreen.classList.replace("hide", "start");      //show the end screen
        clearInterval(countdownTimer);
    } else {
        renderquestionSet();
    }
    // startScreen.classList.add("hide");      //Hide the start quiz button
    // questionEl.classList.remove("hide");    //Display the first question

}


//Place each question in the html area for question title
    // Generate a button for each item 
        //Consider a block element or div within the choices div in index.html 
        //Ensure to loop over and generate the buttons from the choices
        //Determine the index of the button the user selects
            //Consider the data-index lesson from yesterday

//Consider event delegation to loop into the area for the buttons
//Create a variable to track the index of the active question
    //Render the questions and answers to the active question variable and re-render as necessary
//Create a variable that connects to the html section for the questions
// Create a variable for the total amount of time
// create an variable for the interval that counts down the alloted time
//Create an interval to subtract from the timer every time the user clicks 
//Create a function to stop the timer when all questions are answered or timer gets to zero
