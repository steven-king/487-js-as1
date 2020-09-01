//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
// Test on Addison branch

var d = new Date();

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

document.getElementById("answer1").innerHTML=d;

/* 2.--------

*/

document.getElementById("answer2").innerHTML=
(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear()+"<br>"
+(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()+"<br>"
+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

/* 3.--------

*/

function myFunction() {
  document.getElementById("answer3").innerHTML="Replace this text with a button. Then when button is clicked. The code of the page appears below the button.";
}

/* 4.--------

*/
