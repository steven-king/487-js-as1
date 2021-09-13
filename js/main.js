//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------

*/



// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------

*/



/* 4.--------

*/
//





// adapt from Learning Javascript Ethan Brown Chapter 1
function myFunction() {
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
myFunction();
