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
let questions = document.querySelector("#questions");

// Create an array of objects for all questions and answers
let questionSet = [
    {
        question: "The symbol [] represents a(n):",
        answer: ["Object", "Variable", "Array", "Class"] 
    },
    {
        question: "Which of the following is a scope for variables?",
        answer: ["Regional", "Global", "International", "National"]
    },
    {
        question: "Which HTML element links to a Javascript file?",
        answer: ["<script>", "<link>", "<meta>", "<header>"] 
    },
    {
        question: "Which of the following is the syntax for an If statement?",
        answer: ["if(condition)", "if(condition)<>", "if-condition{}", "if(condition){}"]
    }
];

//Create an event listener on the start button
startButton.addEventListener("click", startQuiz)

//Function to start the quiz
function startQuiz(){
    console.log("started")

    startButton.classList.add("hide");      //Hide the default screen
    startScreen.classList.add("hide");      //Hide the start quiz button
    questions.classList.add("show");        //Display the first question

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
