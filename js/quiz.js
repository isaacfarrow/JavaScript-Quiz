
// declare a variable to store the correct answers and sets to zero
correct = 0;


// display question 1 question and its answer

function question1() {
	document.getElementById("start").style.display = "none";
	document.getElementById("quiz").style.display = "block";
	document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("question").innerHTML ="1. What does CSS stand for?";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q1_a1' name=answer>Cascading CSS";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q1_a2' name=answer>Cascading Style Sheet";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q1_a3' name=answer>Cascading Seperate Style";
	
	
	//display the hint button
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question1_validate()' value= ' Next '>";

}
// end of question 1()

//Show hintOne
function showHint() {
	document.getElementById("hintAns").innerHTML ="CSS involves style sheets";


}

//question1 validation

function question1_validate() {
     var radio1 = document.getElementById('q1_a1').checked;
	var radio2 = document.getElementById('q1_a2').checked;
	var radio3 = document.getElementById('q1_a3').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false)) {
	    document.getElementById("validation").innerHTML = "Please enter an option!";
	    question1();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
	    question1_answer();
		
		

	}

}


//check question1 answer and display question 2()

function question1_answer() {
	if (document.getElementById("q1_a2").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question2()
		question2();
	}
	else {
		question2();
	}


}
//end of question1_answer()

function question2() {
	document.getElementById("hintAns").innerHTML =" ";

	document.getElementById("question").innerHTML ="2. Which attribute can set text to bold? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q2_a1' name=answer>Text Decoration";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q2_a2' name=answer>Font style";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q2_a3' name=answer>Font weight";
	
	
	//display the hint button

	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint2()' value= ' Hint '>";
	

	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question2_validate()' value= ' Next '>";}
// end of question 2()


//show hintTwo
function showHint2() {
	document.getElementById("hintAns").innerHTML ="You don't decorate the boldness of text.";


}


//question2 validation

function question2_validate() {
     var radio1 = document.getElementById('q2_a1').checked;
	var radio2 = document.getElementById('q2_a2').checked;
	var radio3 = document.getElementById('q2_a3').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	  	    question2();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question2_answer();
	
	}

}





//check question2 answer and display question 3()

function question2_answer() {
	if (document.getElementById("q2_a3").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question3()
		question3();
	}
	else {
		question3();
	}
}

function question3 () {
document.getElementById("hintAns").innerHTML =" ";

		document.getElementById("question").innerHTML ="3. Which tag is used to link an external CSS file? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q3_a1' name=answer>Script";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q3_a2' name=answer>Link";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q3_a3' name=answer>Rel";
	
	
	//display the hint button
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint3()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question3_validate()' value= ' Next '>";
}
// end of question 3()

//show hintThree
function showHint3() {
	document.getElementById("hintAns").innerHTML ="Script is used for JavaScript.";


}


//question3 validation

function question3_validate() {
     var radio1 = document.getElementById('q3_a1').checked;
	var radio2 = document.getElementById('q3_a2').checked;
	var radio3 = document.getElementById('q3_a3').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question3();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question3_answer();
	
	}

}



//check question3 answer and display question 4()

function question3_answer() {
	if (document.getElementById("q3_a2").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question4()
		question4();
	}
	else {
		question4();
	}
}

function question4 () {
document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("question").innerHTML ="4. Which attribute sets the underline property? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q4_a1' name=answer>Font Style";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q4_a2' name=answer>Text-Decoration";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q4_a3' name=answer>Font Weight";
	
	
	//display the hint button 
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint4()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question4_validate()' value= ' Next '>";
}
// end of question 4()

//show hintFour
function showHint4() {
	document.getElementById("hintAns").innerHTML ="Font weight is associated with the thickness of the text.";


}


//question4 validation

function question4_validate() {
     var radio1 = document.getElementById('q4_a1').checked;
	var radio2 = document.getElementById('q4_a2').checked;
	var radio3 = document.getElementById('q4_a3').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question4();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question4_answer();
	
	}

}






//check question4 answer and display question 5()

function question4_answer() {
	if (document.getElementById("q4_a2").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question5()
		question5();
	}
	else {
		question5();
	}
}

function question5 () {
document.getElementById("hintAns").innerHTML =" ";

	document.getElementById("question").innerHTML ="5. Which measurement is NOT relative? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q5_a1' name=answer>Px";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q5_a2' name=answer>Cm";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q5_a3' name=answer>%";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q5_a4' name=answer>Em";
	
	//display the hint button 
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint5()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question5_validate()' value= ' Next '>";
}
// end of question 5()


//show hintFive
function showHint5() {
	document.getElementById("hintAns").innerHTML ="Relative is defined as considered in relation or in proportion to something else.";


}


//question5 validation

function question5_validate() {
    var radio1 = document.getElementById('q5_a1').checked;
	var radio2 = document.getElementById('q5_a2').checked;
	var radio3 = document.getElementById('q5_a3').checked;
	var radio4 = document.getElementById('q5_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question5();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question5_answer();
	
	}

}



//check question5 answer and display question 6()

function question5_answer() {
	if (document.getElementById("q5_a2").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question6()
		question6();
	}
	else {
		question6();
	}
}

function question6 () {
document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("question").innerHTML ="6. Which measurement unit IS relative? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q6_a1' name=answer>Em";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q6_a2' name=answer>Cm";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q6_a3' name=answer>MM";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q6_a4' name=answer>Inch";
	
	//display the hint button 
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint6()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question6_validate()' value= ' Next '>";
}
// end of question 6()


//show hintSix
function showHint6() {
	document.getElementById("hintAns").innerHTML ="Relative is defined as considered in relation or in proportion to something else.";


}


//question2 validation

function question6_validate() {
     var radio1 = document.getElementById('q6_a1').checked;
	var radio2 = document.getElementById('q6_a2').checked;
	var radio3 = document.getElementById('q6_a3').checked;
	var radio4 = document.getElementById('q6_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question6();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question6_answer();
	
	}

}

//check question6 answer and display question 7()

function question6_answer() {
	if (document.getElementById("q6_a1").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question7()
		question7();
	}
	else {
		question7();
	}
}

function question7 () {
	document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("question").innerHTML ="7. What attribute is used move an elements content away from its border? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q7_a1' name=answer>Margin";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q7_a2' name=answer>Padding";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q7_a3' name=answer>Border";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q7_a4' name=answer>Width";
	
	//display the hint button
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint7()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question7_validate()' value= ' Next '>";
}
// end of question 7()


//show hintSeven
function showHint7() {
	document.getElementById("hintAns").innerHTML ="The answer isn't written in the question.";


}


//question7 validation
function question7_validate() {
     var radio1 = document.getElementById('q7_a1').checked;
	var radio2 = document.getElementById('q7_a2').checked;
	var radio3 = document.getElementById('q7_a3').checked;
	var radio4 = document.getElementById('q7_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question7();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question7_answer();
	
	}

}




//check question7 answer and display question 8()

function question7_answer() {
	if (document.getElementById("q7_a2").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question8()
		question8();
	}
	else {
		question8();
	}
}

function question8 () {
document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("question").innerHTML ="8. Which attribute does not contribute to a block elements total width? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q8_a1' name=answer>Width";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q8_a2' name=answer>Border";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q8_a3' name=answer>Background-image";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q8_a4' name=answer>Padding";
	
	//display the hint button
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint8()' value= ' Hint '>"; 
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question8_validate()' value= ' Next '>";
}
// end of question 8()


//show hintEight
function showHint8() {
	document.getElementById("hintAns").innerHTML ="Width will contribute to a block elements total width.";


}


//question8 validation
function question8_validate() {
     var radio1 = document.getElementById('q8_a1').checked;
	var radio2 = document.getElementById('q8_a2').checked;
	var radio3 = document.getElementById('q8_a3').checked;
	var radio4 = document.getElementById('q8_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question8();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question8_answer();
	
	}

}



//check question8 answer and display question 9()

function question8_answer() {
	if (document.getElementById("q8_a3").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question9()
		question9();
	}
	else {
		question9();
	}
}

function question9 () {
document.getElementById("hintAns").innerHTML =" ";

	document.getElementById("question").innerHTML ="9. What property changes positioned elements display order? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q9_a1' name=answer>Width";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q9_a2' name=answer>Background";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q9_a3' name=answer>Z-index";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q9_a4' name=answer>Azimuth";
	
	//display the hint button 
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint9()' value= ' Hint '>";
	//display the next button
	document.getElementById("next").innerHTML ="<input type='button' onclick='question9_validate()' value= ' Next '>";
	

}
// end of question 9()


//show hintNine
function showHint9() {
	document.getElementById("hintAns").innerHTML ="Width is not the right answer.";


}


//question9 validation
function question9_validate() {
     var radio1 = document.getElementById('q9_a1').checked;
	var radio2 = document.getElementById('q9_a2').checked;
	var radio3 = document.getElementById('q9_a3').checked;
	var radio4 = document.getElementById('q9_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question9();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question9_answer();
	
	}

}




//check question9 answer and display question 10()

function question9_answer() {
	if (document.getElementById("q9_a3").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to question10()
		question10();
	}
	else {
		question10();
	}
}

function question10 () {
	document.getElementById("hintAns").innerHTML =" ";
	document.getElementById("next").style.display = "none";
	document.getElementById("question").innerHTML ="10. Which value of background-repeat will cause a background to repeat vertically? ";
	document.getElementById("answer1").innerHTML ="<input type='radio' id='q10_a1' name=answer>Repeat-x";
	document.getElementById("answer2").innerHTML ="<input type='radio' id='q10_a2' name=answer>Repeat";
	document.getElementById("answer3").innerHTML ="<input type='radio' id='q10_a3' name=answer>Repeat-y";
	document.getElementById("answer4").innerHTML ="<input type='radio' id='q10_a4' name=answer>No-repeat";
	
	//display the sumbit button
	document.getElementById("submit").innerHTML ="<input type='button' onclick='question10_validate()' value= ' Submit  '>";
	//display the hint button
	document.getElementById("hint").innerHTML ="<input type='button' onclick='showHint10()' value= ' Hint '>";
	
}
// end of question 10()


//show hintTen
function showHint10() {
	document.getElementById("hintAns").innerHTML ="Think of a Graphs Y and X axis.";


}


//question10 validation
function question10_validate() {
     var radio1 = document.getElementById('q10_a1').checked;
	var radio2 = document.getElementById('q10_a2').checked;
	var radio3 = document.getElementById('q10_a3').checked;
	var radio4 = document.getElementById('q10_a4').checked;


	if ((radio1==false) && (radio2==false) && (radio3==false) && (radio4==false)) {
	   document.getElementById("validation").innerHTML = "Please enter an option!";
	    question10();
	}
	
	else {
	    document.getElementById("validation").innerHTML = "";
		question10_answer();
	
	}

}



//check question10 answer and display results

function question10_answer() {
	if (document.getElementById("q10_a3").checked) {
		//increment correct answer by 1
		correct++;
		// proceed to results()
		showResults();
	}
	else {
		showResults();
	}
}

// show results and image related to score
function showResults() {
	var messages = ["Great Job!!", "That's just okay!", "You really need to do better!!"];
	var pictures = ["images/win.jpg", "images/meh.jpg", "images/bad.jpg"];
	var range;
		if (correct < 3) {
			range = 2;
	}
	
		if (correct > 2 && correct < 7) {
			range = 1;
	}
	
		if (correct >6) {
			range = 0;
	}

	document.getElementById("restart").innerHTML ="<input type='button' onclick='document.location.reload()' value= ' Restart The Quiz! '>";
	

	document.getElementById("messages").innerHTML = messages[range];
	document.getElementById("results").style.visibility="visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
//hides the quiz questions
	document.getElementById("quiz").style.display="none";
}















