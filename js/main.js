//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.


/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var today = new Date();
var hours = today.getHours();

/*if (hours == 24）{
  hours = (hours - 24) + "AM";
}*/
if (hours == 0 ) {
  hours = (hours - 12);
  var time = "Current Time : "+ hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " AM";
}

if (hours < 12 ) {
  hours = hours;
  var time = "Current Time : "+ hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " AM";
}
if (hours >= 12 ) {
  hours = (hours - 12);
  var time = "Current Time : "+ hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM";
}
if (hours == 12 ) {
  hours = hours;
  var time = "Current Time : "+ hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM";
}
var weekday = "Today is " + getWeekDay(today) + ".";
var daytime = weekday + "<br>" + time;


//Codes credits to https://thisinterestsme.com/javascript-get-day-of-week/
function getWeekDay(today){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = today.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}

document.getElementById('answer1').innerHTML = daytime;

/* var c = Shape.Circle(200, 200, 50);
c.fillColor = 'green';*/


/* 2.--------*/

var date = today.getDate();
var month = today.getMonth() + 1;

if (today.getMonth() < 9) {
  month = "0"+ month;
}

if (today.getDate() < 10) {
  date = "0" + date;
}

var date1 = (month) + '-' + date + '-' + today.getFullYear();
var date2 = (month) + '/' + date + '/' + today.getFullYear();
var date3 = date + '/' + (month) + '/' + today.getFullYear();
var dateall = date1 + "<br>" + date2 + "<br>" + date3;
document.getElementById('answer2').innerHTML = dateall;


/* 3.--------*/

function load_html() {
//Code credits to https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295
var markup = document.documentElement.innerHTML;
document.getElementById('answer3').innerText = markup;
}
function load_home() {
  var markup2 = document.documentElement.innerHTML;
  document.getElementById('answer3').innerHTML = markup2;
}

/* 4.--------*/

$(document).ready(function () {
 'use strict';
 paper.install(window);
 paper.setup(document.getElementById("main-canvas"));

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
});
