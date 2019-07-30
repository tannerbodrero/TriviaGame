function runResults() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    if (question1 == "Sacramento") {
        correct++;
    } else if (question1 == "Los Angeles" || question1 == "San Diego" || question1 == "San Francisco") {
        incorrect++;
    } else {
        unanswered++
    }
    if (question2 == "Albany") {
        correct++;
    } else if (question2 == "New York" || question2 == "Buffalo" || question2 == "Rochester") {
        incorrect++;
    } else {
        unanswered++
    }
    if (question3 == "Austin") {
        correct++;
    } else if (question3 == "Houston" || question3 == "Dallas" || question3 == "San Antonio") {
        incorrect++;
    } else {
        unanswered++
    }
    if (question4 == "Tallahassee") {
        correct++;
    } else if (question4 == "Miami" || question4 == "Jacksonville" || question4 == "Tampa") {
        incorrect++;
    } else {
        unanswered++
    }
    if (question5 == "Cheyenne") {
        correct++;
    } else if (question5 == "Casper" || question5 == "Laramie" || question5 == "Gillette") {
        incorrect++;
    } else {
        unanswered++
    }
    document.getElementById("after_submit").style.display = "block";
    document.getElementById("quiz").style.visibility = "hidden";
    document.getElementById("correct_answers").innerHTML = "Correct Answers: " + correct;
    document.getElementById("incorrect_answers").innerHTML = "Incorrect Answers: " + incorrect;
    document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
};
$(document).ready(function () {
    $("#button").on("click", function () {
        runResults()
    });
});
$(document).ready(function () {
    setTimeout(function () {
        runResults()
    }, 20 * 1000);
});
var number = 20;
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;

    $("#timer").html("Time Remaining: " + number);
};
run();