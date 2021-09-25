var chalk = require("chalk");
var readlineSync = require("readline-sync")
var userName = readlineSync.question("Your name please: ");
console.log(chalk.yellow("Welcome " + userName + "! Are you a true Dhoni fan? \n Let's See"));
console.log(chalk.black("---------------------------------"))


var score = 0;

function game(i, options, question, answer) {
    console.log("Q" + (i + 1))
    var userAnswer = readlineSync.keyInSelect(options, question);

    if (userAnswer + 1 === answer) {
        score = score + 1;
        console.log(chalk.green("Your are a true MSDian!\nYour current score is: " + score));

    }
    else {
        console.log(chalk.red("To your knowledge, the correct answer is " + answer + "\nYour current score is: " + score))

    }
}

var highscore = [
    {
        name: "Neaaa",
        score: 5,
    },
    {
        name: "Bansi",
        score: 4,
    }
]

var questions = [
    {
        question: "When did Dhoni play his first Test match? ",
        option: ["2005", "2003", "2001"],
        answer: 1
    },
    {
        question: "Which railway zone did dhoni work for, as a TTE? ",
        option: ["South Eastern Railways", "Western Railways", "Northen Railways"],
        answer: 1,
    },
    {
        question: "Which team did Dhoni make his Ranji trophy debut for?  ",
        option: ["Ranchi", "Bihar", "Madhya Pradesh"],
        answer: 2
    },
    {
        question: "Apart form cricket, which sport does Dhoni play? ",
        option: ["Badminton", "Football", "Hockey"],
        answer: 2
    },
    {
        question: "Dhoni's favourite pet's name is ",
        option: ["Roney", "Joe", "Sam"],
        answer: 3
    },
]


for (var i = 0; i < questions.length; i++) {
    game(i, questions[i].option, questions[i].question, questions[i].answer)

    console.log("---------------------------------")
}

console.log(chalk.cyan("Your final score is: " + score));
console.log(chalk.yellow("\nHighscore: \n Name:" + highscore[0].name + "  Score:" + highscore[0].score + "\n Name:" + highscore[1].name + "  Score:" + highscore[1].score + "\n If you exceed the highscore, pls ping me I will update."));

