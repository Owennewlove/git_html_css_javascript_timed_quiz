
var timerEl = document.getElementById('timer');
var startEl = document.querySelector(".startBtn");

var page1 = document.querySelector(".firstPage");
var questions = document.querySelector(".question");
var statement = document.getElementById("startStatement")

var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var button1 = document.createElement("button")
var button2 = document.createElement("button")
var button3 = document.createElement("button")
var button4 = document.createElement("button")
var check = document.getElementById("check")



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


startEl.addEventListener("click", function () {
    console.log("click")

    question.textContent = "Commonly used data types do NOT include:"
    startEl.remove();
    statement.remove();

    page1.appendChild(listEl).innerHTML;
    listEl.appendChild(li1).innerHTML;
    listEl.appendChild(li2).innerHTML;
    listEl.appendChild(li3).innerHTML;
    listEl.appendChild(li4).innerHTML;
    li1.appendChild(button1).innerHTML;
    li2.appendChild(button2).innerHTML;
    li3.appendChild(button3).innerHTML;
    li4.appendChild(button4).innerHTML;
    listEl.setAttribute("style", "list-style: none; margin-top: 60px; text-align: start;");
    button1.textContent = "boolean"
    button2.textContent = "strings"
    button3.textContent = "alerts"
    button4.textContent = "numbers"
    li1.setAttribute("style", "padding: 10px")
    li2.setAttribute("style", "padding: 10px")
    li3.setAttribute("style", "padding: 10px")
    li4.setAttribute("style", "padding: 10px")
    button1.setAttribute("style", "background-color: teal; color: white")
    button2.setAttribute("style", "background-color: teal; color: white")
    button3.setAttribute("style", "background-color: teal; color: white")
    button4.setAttribute("style", "background-color: teal; color: white")
    button1.setAttribute("id", "button1")
    button2.setAttribute("id", "button2")
    button3.setAttribute("id", "button3")
    button4.setAttribute("id", "button4")
    var firstButton = document.getElementById("button1");
    var secondButton = document.getElementById("button2");
    var thirdButton = document.getElementById("button3");
    var fourthButton = document.getElementById("button4");





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
    
    
    });
    
    secondButton.addEventListener("click", function () {
        
        var checkTimer = 3;
        console.log("button 2 clicked")
        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer --;
            }
            else {
                check.textContent = "";
            }
        
        }, 1000);
        checkTimer = 3
        timeLeft -=15;
    
    });
    
    thirdButton.addEventListener("click", function () {
       
        console.log("button 1 clicked")
        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer --;
            }
            else {
                check.textContent = "";
            }
        
        }, 1000);

        timeLeft-=15;
        checkTimer = 3;
    
    });
    
    fourthButton.addEventListener("click", function () {
        
        console.log("button 4 clicked")
    
        var wrongInterval = setInterval(function () {
            if (checkTimer > 0) {
                check.textContent = "Wrong";
                checkTimer --;
            }
            else {
                check.textContent = "";
            }
        
        }, 1000);

        timeLeft -=15;
        checkTimer = 3;
    
    });











});












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
