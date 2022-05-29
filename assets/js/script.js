
var timerEl = document.getElementById('timer');
var startEl = document.querySelector(".startBtn");

var page1 = document.querySelector(".firstPage");
var questions = document.querySelector(".question")
var answers = document.querySelector(".answers")





    




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
    countdown();

  

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
