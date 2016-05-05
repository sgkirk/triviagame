$(document).ready(function(){
	var questions = [{
		question: "Which bear is best?",
		choices: ["bears", "beets", "battlestar galactica"],
		correctAnswer: 2
	}, 	{
		question: "Which is the best rhyming word?",
		choices: ["cat", "hat", "rat"],
		correctAnswer: 0
	},	{
		question: "Which is the best city?",
		choices: ["Tampa", "Naples", "Orlando"],
		correctAnswer: 2
	},	{
		question: "What is the best caffeinated drink?",
		choices: ["Tea", "Coffee", "Coke"],
		correctAnswer: 1
	}];

	var questionCounter = 0;
	var selections = [];
	var quiz = $("#quiz");

	displayNext();

	$("#next").on("click", function (e) {

		choose();
		questionCounter++;
		displayNext();
	});

	function createQuestionElement(index) {
		var qElement = $('<div>', {
			id: "question"
		});

		var header = $("<h2>Question " + (index + 1) + ":</h2>");
		qElement.append(header);

		var question = $("<p>").append(questions[index].question);
		qElement.append(question);

		var radioButtons = createRadios(index);
		qElement.append(radioButtons);

		return qElement;
	}

	function createRadios(index) {
		var radioList = $("<ul>");
		var item;
		var input = "";
		for (var i = 0; i < questions[index].choices.length; i++) {
			item = $("<li>");
			input = '<input type="radio" name="answer" value=" + i + " />';
			input += questions[index].choices[i];
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	function choose() {
		selections[questionCounter] = +$('input[name="answer"]:checked').val();
	}

	function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

	function displayScore() {
		var score = $("<p>",{id: "question"});

		var numCorrect = 0;
		var inCorrect = 0;
		for (var i = 0; i < selections.length; i++) {
			if (selections[i] == questions[i].correctAnswer) {
				numCorrect++; 
			}
			else if (inCorrect++);
		}

		score.append("You got " + numCorrect + " correct and " + inCorrect + " wrong!");

		return score;
	}





//end of document.ready function
})
