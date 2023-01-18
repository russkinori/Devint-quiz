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
    //Allow user to clears their intials and start over.

//Create variables for the HTML elements
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let choicesEl = document.querySelector("#choices")
let questionBox = document.querySelector("#question-title")
let time = document.querySelector("#time");
let wrapperEl = document.querySelector("#wrapper");

// Create an array of objects for all questions and answers
let questionSet = [
    {
        question: "The symbol [ ] represents a(n):",
        answer: ["a. Object", "b. Variable", "c. Array", "d. Class"],
        correctAnswer: "c"
    },
    {
        question: "Which of the following is a scope for variables?",
        answer: ["a. Regional", "b. Global", "c. International", "d. National"],
        correctAnswer: "b"
    },
    {
        question: "Which HTML element links to a Javascript file?",
        answer: ["a. <script>", "b. <link>", "c. <meta>", "d. <header>"],
        correctAnswer: "a" 
    },
    {
        question: "Which of the following is the syntax for an If statement?",
        answer: ["a. if(condition)", "b. if(condition)< >", "c. if-condition{ }", "d. if(condition){ }"],
        correctAnswer: "d"
    }
];


let currentQuestion = 0;        //Variable for current question index
let timer = 100;                //Variable for total time
let countdownTimer = 0          //

//Create an event listener on the start button
startButton.addEventListener("click", startQuiz);

//Function to start the quiz
function startQuiz(){

    startButton.classList.replace("start", "hide");      //Hide the default screen
    startScreen.classList.add("hide");      //Hide the start quiz button
    questionEl.classList.remove("hide");    //Display the first question
    currentQuestion = 0;
    
    //Start the countdown
    countdownTimer = setInterval(function(){
        
        timer--;                            //Deduct time by 1 
        time.textContent = timer;            //Display remaining time 

    }, 1000);                              //Change time every second    
}



// console.log(questionSet)
// function showQuestions(question) {
//   questions.textContent = question.question;
// }





//Render the questions
renderquestionSet();

//Function to display the answers
function renderquestionSet(){
    // choicesEl.innerHTML = "";
    questionBox.textContent = questionSet[currentQuestion].question;
    //Increment through the full set of questions
    for (let i = 0; i < questionSet[currentQuestion].answer.length; i++) {        
        
        let button = document.createElement("button");                  //Create a button element in the html file      
        button.textContent = questionSet[currentQuestion].answer[i];    //Display the answers within the buttons
        choicesEl.appendChild(button)                                   //Place the buttons within the choices div
        // button.classList.add("btn");
    };
    
    choicesEl.addEventListener("click", function(event){
     if(event.target.matches("button")){
        console.log(event.target.getattribute("data-index"));
     }
    
    
    console.log(choicesEl);
});
};
clearInterval(countdownTimer)
console.log(currentQuestion)

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
