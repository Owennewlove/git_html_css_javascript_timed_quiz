
var timerEl = document.getElementById('timer');
var startEl = document.querySelector(".startBtn");

var page1 = document.querySelector(".firstPage");
var page2 = document.querySelector(".secondPage");
var page3 = document.querySelector(".thirdPage");
var page4 = document.querySelector(".fourthPage");
var page5 = document.querySelector(".fifthPage");
var page6 = document.querySelector(".sixthPage");
var pageAll = document.querySelectorAll("section")
var questions = document.querySelector(".question");
var statement = document.getElementById("startStatement");
var check = document.getElementById("check");
const firstButtons = document.querySelectorAll("#button1");
var secondButton = document.getElementById("button2");
var thirdButtons = document.querySelectorAll("#button3")
var fourthButton = document.getElementById("button4");
var fifthButton = document.getElementById("button5");
var sixthButton = document.getElementById("button6");
var seventhButton = document.getElementById("button7");
var eigthButton = document.getElementById("button8");
var check = document.getElementById("check");


var checkTimer = 3;
var timeLeft = 75;




function countdown() {


    var timeInterval = setInterval(function () {


        if (timeLeft > 0) {

            timer.textContent = ""

            timeLeft--;

            timerEl.textContent = "Time: " + timeLeft


        }






    }, 1000);
}



startEl.addEventListener('click', function () {
    console.log("click")

    countdown();

    page1.style.display = "none"
    page2.style.display = "block"

 


});

firstButtons.forEach (button1 => {
    button1.addEventListener('click', function() {
        page2.style.display = "none"
        page3.style.display = "block"
        timeLeft -= 15
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
    });
});


secondButton.addEventListener('click', function() {
    page2.style.display = "none"
    page3.style.display = "block"
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
});

thirdButtons.forEach (button3 => {
    button3.addEventListener('click', function() {
        page3.style.display = "none"
        page4.style.display = "block"
        timeLeft -= 15
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
    });

})


fourthButton.addEventListener('click', function() {
    page3.style.display = "none"
    page4.style.display = "block"
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
});


   /*firstButton.addEventListener("click", function () {

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




        setFifthButton;
        setSixthButton;
        setSeventhButton;
        setEigthButton;







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




})*/











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


 /*const myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",

        answers: {
            1: "strings",
            2: "boolean",
            3: "alerts",
            4: "numbers"
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





]*/