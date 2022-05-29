
timerEl = document.getElementById('timer');
startEl = document.querySelector(".startBtn")

function countdown() {
    var timeLeft = 75;
    
    var timeInterval = setInterval(function() {

        if (timeLeft > 0 ) {

            timeLeft--;

            timerEl.textContent = "Time: " + timeLeft


        }

       



    }, 1000);
}

startEl.addEventListener("click", function() {
    console.log("click")
    countdown();

});

