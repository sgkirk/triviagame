$(document).ready(function(){

$('#submitbutton').hide();
$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();

var questions = [
	{
	question1: "This is question one",
	answer1: ["bears","beets","battlestar galactica"]
	}//,
	//{
	//question2: "question 2",
	//answer1: "answer 1",
	//answer2: "answer 2",
	//}

	//close questions
	]     
    

    $('#startbutton').on('click', function () {
    		$('#question').append(questions[0].question1);
    		$('#answer1').append(questions[0].answer1[0]).show();
    		$('#answer2').append(questions[0].answer1[1]).show();
    		$('#answer3').append(questions[0].answer1[2]).show();
    		$('#startbutton').hide();
    		$('#submitbutton').show();

    })


//end of document.ready function
})

