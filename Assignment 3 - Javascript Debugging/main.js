//<script>
//deleted script #1

function quiz(){
	let score = 0;
	let num = 0; // set to 0 //#2
	let question; 
    let answer;           // added tab to fix bad practice of indention user readablity  #4
	let quiz_questions = [   //fixed by adding in [] for questions and then   //add in [] around the questions# 5 this makes it a array
	  ['How many moons does Earth have?'],
	  ['How many moons does Saturn have?'],
	  ['How many moons does Venus have?']
    ];

	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length; // change count to length #6

    document.write(`<p>${quiz_questions} </p>`); // read out questions.. not working
	

	//generate random number for question
	let random = Math.floor(Math.random() * 3);  // giving a name for the let value #14

		
	for(num = 0; num <= totalQuestion; num++)
	{  // add in a semi colon after count = 0 #7
		question = quiz_questions[num];       // change the word count to num #8
        document.write(quiz_questions[num]); // show question  ??? 
		answer = prompt(question);
		if (answer === quiz_answers[num]) { 
			score++; // add + to make ++ to make sure this is counting up #9
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num = totalQuestion) 
        {
			num = 0;
            document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`); 
            // get rid of ' and replace with ` so that the ${score} & ${totalQuestion are recongized} #10
            // fixed the indention to be aligned with the if statement #11
        }
	}
}       // in bracket to close off the function quiz at the end so that everything runs #12
