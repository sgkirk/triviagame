$(document).ready(function(){

var userScore = {
correct: 0,
incorrect: 0, 
} 

$('#nextbutton1').hide();
$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();

var questions = [
	{
	question1: "1. Which bear is best?",
	answer1: ["bears","beets","battlestar galactica"],
	currentAnswer: 2
	
	},
	{
	question2: "2. Which rhyming word is best?",
	answer2: ["cats","rats","hats"],
	currentAnswer: 0

	}
	//close questions
	]     
    

    $('#startbutton').on('click', function () {
    		$('#question').append(questions[0].question1);
    		$('#answer1').append(questions[0].answer1[0]).show();
    		$('#answer2').append(questions[0].answer1[1]).show();
    		$('#answer3').append(questions[0].answer1[2]).show();
    		$('#startbutton').hide();
    		$('#nextbutton1').show();



    })

 	$('#nextbutton1').on('click', function () {
    if ($('input[name="optradio"]:checked').val() == questions[0].currentAnswer){
	userScore.correct++;
	} else{
    userScore.incorrect++;
	}
	console.log(userScore);

	$('#question').html(questions[1].question2);
	$('#answer1').html(questions[1].answer2[0]);
	$('#answer2').html(questions[1].answer2[1]);
	$('#answer3').html(questions[1].answer2[2]);


	})
  

   // if ($('input[name="optradio"]:checked').val() == currentAnswer){
	//userScore.correct++;
	//} else{
   // userScore.incorrect++;
	//}
	//console.log(userScore);

   // $('#submitbutton').on('click', function () {

    

   // })


//end of document.ready function
})

