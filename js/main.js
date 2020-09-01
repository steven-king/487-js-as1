//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var day = date.getDay();

// Referenced W3 Schools for information on turning day from a number to word https://www.w3schools.com/JSREF/jsref_getday.asp
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[date.getDay()];

// Referenced Geeks for Geeks to make time into AM/PM format https://www.geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format/

var newformat = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;

hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

document.getElementById('answer1').innerHTML = 'Today is ' + n + '.' + "<br />" + 'Current Time: ' + hours + ':' + minutes + ':' + seconds + ' ' + newformat;

console.log('Today is ' + n + '.' + "<br />" + 'Current Time: ' + hours + ':' + minutes + ':' + seconds + ' ' + newformat)


// /* 2.--------

var today = new Date();

var dateMonthDash = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var dateMonthSlash = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var dateDaySlash = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

document.getElementById('answer2').innerHTML = dateMonthDash + "<br />" + dateMonthSlash + "<br />" + dateDaySlash;

console.log(dateMonthDash + "<br />" + dateMonthSlash + "<br />" + dateDaySlash);

// 3.--------

// var html = $("html").html();

var html = document.documentElement.innerHTML

function myFunction() {
  document.getElementById("answer3space").innerHTML = html;
}

console.log(html)


// 4.--------

$(document).ready(function() {
  'use strict';
  console.log('main.js loaded');

  paper.install(window);
  paper.setup(document.getElementById('main-canvas'));

var tool = new Tool();

var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

tool.onMouseDown = function(event) {
  var c = Shape.Circle(event.point.x, event.point.y, 20);
  c.fillColor = 'green';
};

  paper.view.draw();

  console.log(tool)
  console.log(tool.onMouseDown)
});
