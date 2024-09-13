var playerName= prompt("Enter you name");
//IN THIS SECTION WE ARE DECLEARING ANSWER
const quizData = [
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
      answer: "B) Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["A) Au", "B) Ag", "C) Fe", "D) Pb"],
      answer: "A) Au"
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["A) 1905", "B) 1912", "C) 1923", "D) 1931"],
      answer: "B) 1912"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["A) William Shakespeare", "B) Charles Dickens", "C) Jane Austen", "D) George Orwell"],
      answer: "A) William Shakespeare"
    },
    {
      question: "What is the capital of Australia?",
      options: ["A) Sydney", "B) Melbourne", "C) Canberra", "D) Brisbane"],
      answer: "C) Canberra"
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["A) Helium", "B) Hydrogen", "C) Lithium", "D) Beryllium"],
      answer: "B) Hydrogen"
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      options: ["A) Vincent van Gogh", "B) Claude Monet", "C) Leonardo da Vinci", "D) Pablo Picasso"],
      answer: "C) Leonardo da Vinci"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["A) African Elephant", "B) Blue Whale", "C) Giraffe", "D) White Rhinoceros"],
      answer: "B) Blue Whale"
    },
    {
      question: "In which continent is the Sahara Desert located?",
      options: ["A) Asia", "B) Europe", "C) Africa", "D) Australia"],
      answer: "C) Africa"
    },
    {
      question: "What is the main ingredient in traditional Japanese miso soup?",
      options: ["A) Soybeans", "B) Rice", "C) Seaweed", "D) Tofu"],
      answer: "A) Soybeans"
    }
  ];
//In this section we are displaing the ans on the DOM
var i = 0;
var correctAns;
var play;
var score=0;
var scoreArray = [];
function nextQuestion(){
    if(i<quizData.length){
    document.querySelector("#currentQuestion").textContent=quizData[i].question;
    document.getElementById("Op1").textContent=quizData[i].options[0];
    document.getElementById("Op2").textContent=quizData[i].options[1];
    document.getElementById("Op3").textContent=quizData[i].options[2];
    document.getElementById("Op4").textContent=quizData[i].options[3];
    correctAns=quizData[i].answer;
        i++;
    console.log(i);
      }
      else{
        scoreArray.push(`Player Name :${playerName} score:${score}`);
        console.log(scoreArray);
      play =+prompt(`Are you want to play again\n 1) for yes\n 2) for no`);
      if(play===1){
        i=0;
        nextQuestion();
        score=0;
        document.getElementById('Score').textContent = `Score: ${score}`;

      }
      else{
        alert(`Thank you for playing game ${playerName} and Your final score is ${score}`);
        alert("Thanks");
        window.close('./game.html');
      }
      }
}
//In this section answer is checking
function checkAnswer(selectedAnswer) {
 
  if (selectedAnswer === correctAns) {
      alert("Correct answer!");
      score++;
  } else {
      alert("Wrong answer");
  }
  document.getElementById('Score').textContent = `Score: ${score}`;
}

function handleAnswerClick(event) {
  const selectedAnswer = event.target.textContent;
  checkAnswer(selectedAnswer);
}
document.querySelectorAll('.answer-button').forEach(button => button.addEventListener('click', handleAnswerClick));
//In this portion button background color changing

function changeColor(selectedElement) {
  selectedElement.style.backgroundColor = "blue";
}
function ColorReverse(selectedElement){
  selectedElement.style.backgroundColor = "red";
}
