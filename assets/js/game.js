$(document).ready(function(){

$('#questions').hide();
$('#submitbutton').hide();

	// var questions = [
	//      {
	//      	question: "question 1",
	//      	answer1: "answer 1",
	//      	answer2: "answer 2"
	//      },
	//      {
	//      	question2: "question 2",
	//      	answer1: "answer 1",
	//      	answer2: "answer 2",
	//      }

	// ]     

    $('#startbutton').on('click', function () {
    		//$('#questions').append('something');
    		$('#startbutton').hide();
    		$('#questions').show();
    		$('#submitbutton').show();

    })



})

