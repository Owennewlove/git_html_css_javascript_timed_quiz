
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


function countdown() {
    var timeLeft = 75;
    
    var timeInterval = setInterval(function() {

        if (timeLeft > 0 ) {

            timer.textContent = ""

            timeLeft--;

            timerEl.textContent = "Time: " + timeLeft


        }

       



    }, 1000);
}

startEl.addEventListener("click", function() {
    console.log("click")

    question.textContent = "Commonly used data types do NOT include:"
    startEl.remove();
    statement.remove();

    page1.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    li1.appendChild(button1);
    li2.appendChild(button2);
    li3.appendChild(button3);
    li4.appendChild(button4);
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





    countdown();

    listEl.addEventListener("click", function(ev) {
        var checkTimer = 3;
        var correctInterval = setInterval(function() {
            if (checkTimer > 0) {
                check.textContent = "Correct";
                checkTimer--;
            }
            else {
                check.textContent = "";
            }

        },1000);

        if (ev.currentTarget.id = "button1"){
            correctInterval;
            console.log("button 1 clicked")
            


        }

        
        
        
        

    });

  

});



/* <section class="secondPage" data-state="hidden" >
            
<h2 class = "question">Commonly used data types do <bold>NOT</bold> include:</h2>

<ul class = "answers">
<li><button>boolean</button></li>
<li><button>strings</button></li>
<li><button>alerts</button></li>
<li><button>numbers</button></li>
</ul>
 </section> */
