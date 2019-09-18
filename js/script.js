var answers = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"];

window.onload = function() {
    var button = document.getElementById("button");
    var eight = document.getElementById("eight");
    var input = document.getElementById("input");
    var answer = document.getElementById("answer");

button.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Enter a question, foolish mortal!");
    } else {
        eight.innerText = "";
        var num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerText = answers[num];
    }
  });
};