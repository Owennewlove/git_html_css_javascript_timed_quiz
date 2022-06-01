
var timerEl = document.getElementById('timer');
var startEl = document.querySelector(".startBtn");

var page1 = document.querySelector(".firstPage");
var questions = document.querySelector(".question");
var statement = document.getElementById("startStatement");
var check = document.getElementById("check");
var firstButton = document.getElementById("button1");
var secondButton = document.getElementById("button2");
var thirdButton = document.getElementById("button3");
var fourthButton = document.getElementById("button4");
var setFifthButton = firstButton.setAttribute("id", "button5");
var setSixthButton = secondButton.setAttribute("id", "button6");
var setSeventhButton = thirdButton.setAttribute("id", "button7");
var setEigthButton = fourthButton.setAttribute("id", "button8");


var checkTimer = 3;
var timeLeft = 75;

function buildQuiz(){

    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers){

                answers.push(
                    `<label>
                        <input type = "radio" name = "question${questionNumber}" value = "${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                    
                );
            }

            output.push(
                `<div class = "question"> ${currentQuestion.question} </div>
                <div class = "answers"> ${answers.join('')} </div>`
            );
        }
    );

    firstPage.innerHTML = output.join('');
}

const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",

        answers: {
            a: "strings",
            b: "boolean",
            c: "alerts",
            d: "numbers"
        },
    },

    {
        question: "The condition in an if/else statement is enclosed within ______. ",

        answers: {

            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets"

        },
    },

    {

        question: "Arrays in JavaScript can be used to store _____.",

        answers: {

            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },

    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",

        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses"
        },
    },

    {

        question: "A very useful tool used during development and debugging for printing content to the debugger is:",

        answers: {

            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console log"
        }
    }





]





function countdown() {


    var timeInterval = setInterval(function () {


        if (timeLeft > 0) {

            timer.textContent = ""

            timeLeft--;

            timerEl.textContent = "Time: " + timeLeft


        }






    }, 1000);
}


startEl.addEventListener("click", function () {
    console.log("click")

    question.textContent = "Commonly used data types do NOT include:"
    startEl.remove();
    statement.remove();
    firstButton.textContent = "boolean"
    secondButton.textContent = "strings"
    thirdButton.textContent = "alerts"
    fourthButton.textContent = "numbers"
    firstButton.setAttribute("style", "background-color: teal; color: white")
    secondButton.setAttribute("style", "background-color: teal; color: white")
    thirdButton.setAttribute("style", "background-color: teal; color: white")
    fourthButton.setAttribute("style", "background-color: teal; color: white")



    countdown();



    firstButton.addEventListener("click", function () {

        console.log("button 1 clicked")
        var correctInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Correct";
                checkTimer--;
            }
            else {
                check.textContent = "";
            }

        }, 1000);

        checkTimer = 3

        setFifthButton;
        setSixthButton;
        setSeventhButton;
        setEigthButton;















    });



    secondButton.addEventListener("click", function () {

        var checkTimer = 3;
        console.log("button 2 clicked")
        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer--;
            }
            else {
                check.textContent = "";
            }

        }, 1000);
        checkTimer = 3
        timeLeft -= 15;

    });

    thirdButton.addEventListener("click", function () {

        console.log("button 1 clicked")
        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer--;
            }
            else {
                check.textContent = "";
            }

        }, 1000);

        timeLeft -= 15;
        checkTimer = 3;

    });

    fourthButton.addEventListener("click", function () {

        console.log("button 4 clicked")

        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer--;
            }
            else {
                check.textContent = "";
            }

        }, 1000);

        timeLeft -= 15;
        checkTimer = 3;

    });
















});



var fifthButton = document.getElementById("button5");
var sixthButton = document.getElementById("button6");
var seventhButton = document.getElementById("button7");
var eigthButton = document.getElementById("button8");

fifthButton.textContent = "quotes"
sixthButton.textContent = "curly brackets"
seventhButton.textContent = "parentheses"
eigthButton.textContent = "square brackets"


fifthButton.addEventListener("clicked", function () {

    var wrongInterval = setInterval(function () {
        if (checkTimer > 0) {
            check.textContent = "Wrong";
            checkTimer--;
        }
        else {
            check.textContent = "";
        }

    }, 1000);
    console.log("fifth button clicked")

    checkTimer = 3;
    timeLeft -= 15;




})











/*    if (ev.currentTarget.id = "button2") {
            wrongInterval;
            console.log("button 2 clicked")
        }

        if (ev.currentTarget.id = "button3") {
            wrongInterval;
            console.log("button 3 clicked")
        }

        if (ev.currentTarget.id = "button4") {
            wrongInterval;
            console.log("button 4 clicked")
        }  */

/* <section class="secondPage" data-state="hidden" >
            
<h2 class = "question">Commonly used data types do <bold>NOT</bold> include:</h2>

<ul class = "answers">
<li><button>boolean</button></li>
<li><button>strings</button></li>
<li><button>alerts</button></li>
<li><button>numbers</button></li>
</ul>
 </section> */
