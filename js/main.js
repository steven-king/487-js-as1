//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
// Test on Addison branch

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

document.getElementById("answer1").innerHTML=
"Today is "+days[d.getDay()]+
".<br>Current time: "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

/* 2.--------

*/

document.getElementById("answer2").innerHTML=
(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear()+"<br>"
+(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()+"<br>"
+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

/* 3.--------

*/

function myFunction() {
  document.getElementById("answer3").innerHTML="index.html";
}

// Replace this text with a button. Then when button is clicked. The code of the page appears below the button.

/* 4.--------

*/

paper.install(window);
paper.setup(document.getElementById('main-canvas'));

function helloWorld() {
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
}

paper.view.draw();
