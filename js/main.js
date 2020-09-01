//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var today = new Date();
console.log(today);
console.log(time);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday.";
weekday[2] = "Tuesday.";
weekday[3] = "Wednesday.";
weekday[4] = "Thursday.";
weekday[5] = "Friday.";
weekday[6] = "Saturday.";

var todayDay = "Today is " + weekday[today.getDay()];

var time = today.toLocaleTimeString();

var todayTime = "Current Time: " + time;

document.getElementById("answer1").innerHTML =
  "Today is " + weekday[today.getDay()] + "<br />" + "Current Time : " + time;

/* 2.--------
Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "answer2"
*/

var day = "0" + today.getDate();
var mon = "0" + [today.getMonth() + 1];
var year = today.getFullYear();

console.log(day);
console.log(mon);
console.log(year);

document.getElementById("answer2").innerHTML =
  mon +
  "-" +
  day +
  "-" +
  year +
  "<br />" +
  mon +
  "/" +
  day +
  "/" +
  year +
  "<br />" +
  day +
  "/" +
  mon +
  "/" +
  year;

/* 3.--------
Write an HTML button below and when it clicks, it prints/displays the content of the current html page (current window).
*/
function myFunction() {
  document.getElementById("answer3").innerHTML = " ";
}
//var htmlCode =

/* 4.--------
Follow the instructions on Chapter 1 part Hello World and and Draw the graphics below in the id called main-canvas.
*/

$(document).ready(function () {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("main-canvas"));

  var tool = new Tool();

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "hello world";

  tool.onMouseDown = function (event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = "green";
  };

  paper.view.draw();
});
