$(document).ready(function(){

$('#submitbutton').hide();

var questions = [
	{
	question1: "This is question one",
	answer1: "this is answer one yay",
	answer2: "answer 2",
	},
	{
	question2: "question 2",
	answer1: "answer 1",
	answer2: "answer 2",
	}
	]     
    

    $('#startbutton').on('click', function () {
    		$('#question').append(questions[0].question1);
    		$('#answer1').append(questions[0].answer1);
    		$('#startbutton').hide();
    		$('#submitbutton').show();

    })


//end of document.ready function
})

