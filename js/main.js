//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

var day = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(day);
var time = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);

document.getElementById('answer1').innerHTML="Today is " + day + "<br />" + "Current Time : " + time;

/* 2.--------

*/
var mdy1 = new Intl.DateTimeFormat('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}).format(mdy1);
var mdy2 = new Intl.DateTimeFormat('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'}).format(mdy2);
var dmy = new Intl.DateTimeFormat('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).format(dmy);

document.getElementById('answer2').innerHTML= mdy1 + "<br>" + mdy2 + "<br>" + dmy;
// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/
function myFunction() {
  document.getElementById('answer3').innerText= "<h1>JS Homework</h1><h2>Day 1</h2><p>Follow the instructions below and output the answer to the console as well as dispaly on the page.</p><ol><li>Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of answer1<p>Today is Monday.<br/>Current Time : 8:55:25 PM</p><h4>Answer:</h4><div class=answer id=answer1></div></li><li>Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of answer2<p>mm-dd-yyyy, mm/dd/yyyy and dd/mm/yyyy each on a seperate line.<p><h4>Answer:</h4><div class=answer id=answer2></div></li><li>Write an HTML button below and when it clicks, it prints/displays the content of the current html page (current window).<h4>Answer:</h4><div class=answer id=answer3><button type=button onclick=myFunction()>Click to see HTML code!</button></div></li><li>Follow the instructions on Chapter 1 part Hello World and and Draw the graphics below in the id called main-canvas.</li></ol><canvas id=main-canvas></canvas><script src=https:cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.2/paper-full.js></script><script src=https:code.jquery.com/jquery-2.1.1.min.js></script><script src=js/main.js></script></body></html>";
}


/* 4.--------

*/
//





// adapt from Learning Javascript Ethan Brown Chapter 1
function myFunction2() {
'use strict'
// your code will start here...
paper.install(window);
paper.setup(document.getElementById('main-canvas'));

var c= Shape.Circle(200, 200, 80);
c.fillColor ='black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

var userTool = new Tool();

userTool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x,event.point.y, 20);
    c.fillColor ='green';
};

paper.view.draw ();
// ...and end here
}
myFunction2();
