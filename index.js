var readlineSync = require("readline-sync")
var userName = readlineSync.question("Your name please: ");
console.log("Welcome "+userName+ "! Are you a true Dhoni fan? \n Lte's See");
console.log("---------------------------------")


var score = 0;

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
    question:"When did Dhoni play his first Test match? ",
    a:"2002",
    b:"2003",
    c:"2005",
    answer:"2005"},
  {
    question:"Which railway zone did dhoni work for, as a TTE? ",
    a:"South Eastern Railways",
    b:"Western Railways",
    c:"Northen Railways",
    answer:"South Eastern Railways"},
  {
    question:"Which team did Dhoni make his Ranji trophy debut for?  ",
    a:"Ranchi",
    b:"Bihar",
    c:"Madhya Pradesh",
    answer:"Bihar"},
  {
    question:"Apart form cricket, which sport does Dhoni play? ",
    a:"Badminton",
    b:"Football",
    c:"Hockey",
    answer:"Football"
  },
  {
    question:"Dhoni's favourite pet's name is ",
    a:"Joe",
    b:"Sam",
    c:"Roney",
    answer:"Sam"
  },
  ]

for (var i = 0;i<questions.length;i++){
   game(questions[i].question, questions[i].answer,questions[i].a,questions[i].b,questions[i].c)

   console.log("---------------------------------")
  }

console.log("Your final score is: "+score)
console.log("\nHighscore: \nName:"+highscore[0].name+"  Score:"+highscore[0].score+"\nName:"+highscore[1].name+"  Score:"+highscore[1].score+"\n If you exceed the highscore, pls ping me I will update.");

  
function game(question, answer,a,b,c){
  console.log(question + "\na: "+a+"\nb: "+b+"\nc: "+c)
  var option = readlineSync.question("Write your answer:")
  if(option.toUpperCase() === answer.toUpperCase())
  {
    score = score + 1;
    console.log("Your are a true MSDian!\nYour current score is: "+score);

  }
  else{
    console.log("To your knowledge, the correct answer is "+answer+"\nYour current score is: "+score)

  }
}
  


