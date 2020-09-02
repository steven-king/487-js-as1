//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.

//trying this

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();

var day = date.getDay();
var today = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];

var hh = date.getHours();
var mm = date.getMinutes();

document.getElementById("answer1").innerHTML = "Today is " + today+"." +"<br />"+ "Current Time : " + hh+":"+mm;

/* 2.--------

*/
//mm-dd-yyyy, mm/dd/yyyy and dd/mm/yyyy

var date = new Date();
var mm = date.getMonth("00");
var dd = date.getDay("00");
var yy = date.getFullYear();

document.getElementById("answer2").innerHTML = mm+"-"+dd+"-"+yy +"<br />"+ mm+"/"+dd+"/"+yy +"<br />"+ dd+"/"+mm+"/"+yy;


/* 3.--------

*/
function printpage() {
  var show = display(document);
  document.getElementById("answer3").innerHTML = show;
};

//i couldn't figure this one out



/* 4.--------

*/
(function() {
  'use strict'
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.contSize = 20;
  text.content = 'hello world';
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  }

  paper.view.draw();
}())
