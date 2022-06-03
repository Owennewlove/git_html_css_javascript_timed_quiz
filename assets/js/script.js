
var timerEl = document.getElementById('timer');
var startEl = document.querySelector(".startBtn");

var page1 = document.querySelector(".firstPage");
var page2 = document.querySelector(".secondPage");
var page3 = document.querySelector(".thirdPage");
var page4 = document.querySelector(".fourthPage");
var page5 = document.querySelector(".fifthPage");
var page6 = document.querySelector(".sixthPage");
var page7 = document.querySelector(".seventhPage");
var page8 = document.querySelector(".eigthPage");
var pageAll = document.querySelectorAll("section")
var questions = document.querySelector(".question");
var statement = document.getElementById("startStatement");
var check = document.getElementById("check");
var firstButtons = document.querySelectorAll("#button1");
var secondButton = document.getElementById("button2");
var thirdButtons = document.querySelectorAll("#button3")
var fourthButton = document.getElementById("button4");
var fifthButtons = document.querySelectorAll("#button5");
var sixthButton = document.getElementById("button6");
var seventhButtons = document.querySelectorAll("#button7");
var eigthButton = document.getElementById("button8");
var ninthButtons = document.querySelectorAll("#button9");
var tenthButton = document.getElementById("button10");
var check = document.getElementById("check");
var finalScore = document.getElementById("finalScore");
var initialEnterText = document.getElementById("initialEnter");
var initialsEl = document.getElementById("initials");
var submitEl = document.getElementById("submitButton");
var highscoreButton = document.getElementById("highscore")
var clearScoresButton = document.getElementById("clearHighscores")
var goBackEl = document.getElementById("goBackButton")
var scores = [];


var checkTimer = 2;
var timeLeft = 75;




function countdown() {


    var timeInterval = setInterval(function () {


        if (timeLeft > 0) {

            timerEl.textContent = ""

            timeLeft--;

            timerEl.textContent = "Time: " + timeLeft


        }

        if (timeLeft <= 0) {
            localStorage.setItem("score", JSON.stringify(timeLeft));
    
            page1.style.display = "none"
            page2.style.display = "none"
            page3.style.display = "none"
            page4.style.display = "none"
            page5.style.display = "none"
            page6.style.display = "none"
            page7.style.display = "block"
            clearInterval(timeInterval);
            finalScore.textContent = "Your score is: " + timeLeft
            initialEnterText.textContent = "Please enter your initials to save your score"
    
    
        };





    }, 1000);

    



    ninthButtons.forEach(button9 => {
        button9.addEventListener('click', function () {
            clearInterval(timeInterval);
            localStorage.setItem("score", JSON.stringify(timeLeft));


        });
    });

    tenthButton.addEventListener('click', function () {
        clearInterval(timeInterval);
        localStorage.setItem("score", JSON.stringify(timeLeft));
    });

}



startEl.addEventListener('click', function () {
    console.log("click")

    countdown();

    page1.style.display = "none"
    page2.style.display = "block"




});

firstButtons.forEach(button1 => {
    button1.addEventListener('click', function () {
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
        checkTimer = 2
        if (timeLeft <= 0) {
            localStorage.setItem("score", JSON.stringify(timeLeft));
    
            page1.style.display = "none"
            page2.style.display = "none"
            page3.style.display = "none"
            page4.style.display = "none"
            page5.style.display = "none"
            page6.style.display = "none"
            page7.style.display = "block"
            finalScore.textContent = "Your score is: " + timeLeft
            initialEnterText.textContent = "Please enter your initials to save your score"
    
    
        };
    });
});


secondButton.addEventListener('click', function () {
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

    checkTimer = 2
});

thirdButtons.forEach(button3 => {
    button3.addEventListener('click', function () {
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
        checkTimer = 2
        if (timeLeft <= 0) {
            localStorage.setItem("score", JSON.stringify(timeLeft));
    
            page1.style.display = "none"
            page2.style.display = "none"
            page3.style.display = "none"
            page4.style.display = "none"
            page5.style.display = "none"
            page6.style.display = "none"
            page7.style.display = "block"
            finalScore.textContent = "Your score is: " + timeLeft
            initialEnterText.textContent = "Please enter your initials to save your score"
    
        };
    });

})


fourthButton.addEventListener('click', function () {
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

    checkTimer = 2
});

fifthButtons.forEach(button5 => {
    button5.addEventListener('click', function () {
        page4.style.display = "none"
        page5.style.display = "block"
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
        checkTimer = 2
        if (timeLeft <= 0) {
            localStorage.setItem("score", JSON.stringify(timeLeft));
    
            page1.style.display = "none"
            page2.style.display = "none"
            page3.style.display = "none"
            page4.style.display = "none"
            page5.style.display = "none"
            page6.style.display = "none"
            page7.style.display = "block"
            finalScore.textContent = "Your score is: " + timeLeft
            initialEnterText.textContent = "Please enter your initials to save your score"

    
    
        };
    });
    

})


sixthButton.addEventListener('click', function () {
    page4.style.display = "none"
    page5.style.display = "block"
    var correctInterval = setInterval(function () {
        if (checkTimer > 0) {
            check.textContent = "Correct";
            checkTimer--;
        }
        else {
            check.textContent = "";
        }

    }, 1000);

    checkTimer = 2
});

seventhButtons.forEach(button7 => {
    button7.addEventListener('click', function () {
        page5.style.display = "none"
        page6.style.display = "block"
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
        checkTimer = 2
        if (timeLeft <= 0) {
            localStorage.setItem("score", JSON.stringify(timeLeft));
    
            page1.style.display = "none"
            page2.style.display = "none"
            page3.style.display = "none"
            page4.style.display = "none"
            page5.style.display = "none"
            page6.style.display = "none"
            page7.style.display = "block"
            finalScore.textContent = "Your score is: " + timeLeft
            initialEnterText.textContent = "Please enter your initials to save your score"
    
    
        };
    });

})


eigthButton.addEventListener('click', function () {
    page5.style.display = "none"
    page6.style.display = "block"
    var correctInterval = setInterval(function () {
        if (checkTimer > 0) {
            check.textContent = "Correct";
            checkTimer--;
        }
        else {
            check.textContent = "";
        }

    }, 1000);

    checkTimer = 2
});

ninthButtons.forEach(button9 => {
    button9.addEventListener('click', function () {
        page6.style.display = "none"
        page7.style.display = "block"
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
        checkTimer = 2
        finalScore.textContent = "Your score is: " + timeLeft
        initialEnterText.textContent = "Please enter your initials to save your score"
    });

})


tenthButton.addEventListener('click', function () {
    clearInterval(countdown);
    page6.style.display = "none"
    page7.style.display = "block"
    var correctInterval = setInterval(function () {
        if (checkTimer > 0) {
            check.textContent = "Correct";
            checkTimer--;
        }
        else {
            check.textContent = "";
        }

    }, 1000);

    checkTimer = 2
    finalScore.textContent = "Your score is: " + timeLeft
    initialEnterText.textContent = "Please enter your initials to save your score"
});

function renderScores() {


    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
        page8.appendChild(li);

    }

}

function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        scores = storedScores;
    }

    // This is a helper function that will render scores to the DOM
    renderScores();
}

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

submitEl.addEventListener("click", function (event) {
    event.preventDefault();

    var initialsText = initialsEl.value.trim();

    // Return from function early if submitted initialsText is blank
    if (initialsText === "") {
        return;
    }


    scores.push(initialsText + "    Score:     " + timeLeft);
    initialsEl.value = "";


    storeScores();
    renderScores();
});

highscoreButton.addEventListener("click", function () {
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
    page5.style.display = "none"
    page6.style.display = "none"
    page7.style.display = "none"
    page8.style.display = "block"


})


init();

clearScoresButton.addEventListener("click", function () {
    localStorage.clear();

})

goBackEl.addEventListener("click", function () {
    timeLeft = 75
    page8.style.display = "none"
    page1.style.display = "block"
    timerEl.textContent = "Time: 75"


})





