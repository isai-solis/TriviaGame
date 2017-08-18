var correct = 0;
var incorrect = 0;
var unanswered = 0;
var showQuestion;
var questionCount = 0;
var imageCount = 0;
var intervalId;
var activeQuestion = false;
var correctPick;
var timeRemaining = 30;



var fullQuestion = [
    {
        question: "With collaboration from George Tilton, who discovered the age of the earth?",
        answers: [
                "Michael Faraday", 
                "Albert Einstein", 
                "Clair Cameron Patterson", 
                "Ronald Reagan"],
        correctValue: "3",
        correctAnswer: "C: Clair Cameron Patterson",
        image: "<img src = assets/images/ClairCameronPatterson.jpg width='400px' height='400px'></img>",
    },
    {
        question: "What object found on earth did they use to determine the earth's age?",
        answers: [
                "Aluminum", 
                "Meteorite", 
                "Tree", 
                "Whale"],
        correctValue: "2",
        correctAnswer: "B: Meteorite",
        image: "<img src = assets/images/Paterson_isochron_animation.gif width='400px' height='400px'></img>",
    },
    {
        question: "In the process, what substance did they find to be toxic and at significantly higher levels in the enviroment than throughout history?",
        answers: [
                "Lead", 
                "Carbon Monoxide", 
                "Xenon Gas", 
                "Rubber"],
        correctValue: "1",                
        correctAnswer: "A: Lead",
        image: "<img src = assets/images/lead.jpg width='400px' height='400px'></img>",
    },
    {
        question: "What major industrial entity strongly opposed the findings of Patterson?",
        answers: [
                "McDonalds", 
                "Microsoft", 
                "General Electric", 
                "The Ethyl Corporation"],
        correctValue: "4",                
        correctAnswer: "D: The Ethyl Corporation",
        image: "<img src = assests/images/ethyl.jpg width='400px' height='400px'></img>",
    },
    {
        question: "From what highly used good was lead eventually removed from due the the discovery of the age of the earth?",
        answers: [
                "Bananas", 
                "Gasoline", 
                "Pants", 
                "Paper"],
        correctValue: "2",
        correctAnswer: "B: Gasoline",
        image: "<img src = assets/images/gasoline.jpg width='400px' height='400px'></img>",
    },
];


window.onload = function() {
    
    $("#instructions").html("<p>You will be given 30 seconds to answer each question.</p> <p>Unanswered questions will count against you.</p> <p>Click start to begin</p>");
    $("#startButton").click(startTrivia);
}

function displayTimer(){ 
  $("#timer").html("Time Remaining: " + timeRemaining);
};  

var intervalId = setInterval(timeRemaining, 1000);

function startTimer (){
  displayTimer();
  timeRemaining--;
  console.log(displayTimer);
  if (timeRemaining == 0) {
    clearInterval(intervalId);
    timeRemaining = 30;
    unansweredQuestion();
  }
}

function startTrivia(){
    $("#startButton").hide();
    $("#instructions").hide();
    $("#allAnswers").show();
    displayQuestion();
    startTimer();
    intervalId = setInterval(startTimer, 1000);

    // setTimeout(displayQuestion, 30000);
    // activeQuestion = false;
}

function displayQuestion() {
    $("#question").html(fullQuestion[questionCount].question);
    $("#answer1").html(fullQuestion[questionCount].answers[0]);
    $("#answer2").html(fullQuestion[questionCount].answers[1]);
    $("#answer3").html(fullQuestion[questionCount].answers[2]);
    $("#answer4").html(fullQuestion[questionCount].answers[3]);
   
    
}

$(".checkbox").on("click", function() {
    console.log($(this));
    clearInterval(intervalId);
    var value = $(this).attr("value");

    if (value == fullQuestion[questionCount].correctValue ){
      answerCorrect();
          
    } 
    else {
        answerWrong ();
    }
});    

function answerCorrect(){
  correct++
  $("#question").html("Correct Answer!")
  displayCorrectImage();
  clearInterval(intervalId);

}

function answerWrong(){
  $("#question").html("Incorrect Answer!")
  incorrect++
  displayCorrectImage();
  clearInterval(intervalId);

}

function unansweredQuestion(){
  $("#question").html("Incorrect Answer!")
  unanswered++
  incorrect++
  displayCorrectImage();
  clearInterval(intervalId);
}



function displayCorrectImage() {
  $("#allAnswers").hide();
  $("#correctAnswer").show();
  $("#correctImage").show();
  $("#correctAnswer").html(fullQuestion[questionCount].correctAnswer);  
  $("#correctImage").html(fullQuestion[questionCount].image);
  setTimeout(displayCorrectImage, 5000);
  questionCount++

  if (questionCount === images.length) {
    count = 0;
    endGame();
  }
  else {
    nextQuestion();
  }
}

function nextQuestion(){
  $("#correctAnswer").hide();
  $("#correctImage").hide();
  $("#allAnswers").show();
  timeRemaining = 30;
  displayQuestion();

}

function endGame(){
  $("#allAnswers").show();
  $("#startButton").show();
  $("#answer1").html("Correct Answers: " + correct);
  $("#answer2").html("Incorrect Answers: " + incorrect);
  $("#answer3").html("Unanswered Questions: " + unanswered);




}




















