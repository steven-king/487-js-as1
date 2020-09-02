//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
//adapted from https://stackoverflow.com/questions/18536726/javascript-to-display-the-current-date-and-time
var today = new Date();

//display the current weekday
var array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekday = array[today.getDate() + 1];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//if minute hand is less than 10 min, it adds a zero in the from (e.g. 3 minutes is :03, not :3)
if (today.getMinutes() < 10) {
    minute = "0" + minute;
}

//if second hand is less than 10 sec, it adds a zero in the from (e.g. 3 seconds is :03, not :3)
if (today.getSeconds() < 10) {
    second = "0" + second;
}

//Show the time in AM/PM format. Adapted from https://www.geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format/
var TwelveHourFormat = hour >= 12 ? " PM" : " AM";


//generates the current time in the correct order/format
var currentTime = hour % 12 + ":" + minute + ":" + second + TwelveHourFormat;

//Answer
document.getElementById('answer1').innerHTML = "Today is " + weekday + ". <br> Current Time : " + currentTime;

console.log(weekday);
console.log(currentTime);


/* 2.--------

*/
var yyyy = today.getFullYear();
var mm = today.getMonth() + 1;
var dd = today.getDate();

//puts a zero before the mm digit if the month is Jan-Sep
if (mm < 10) {
    mm = "0" + mm;
}

//puts a zero before the dd digit if the date is 1-10
if (dd < 10) {
    dd = "0" + dd;
}

//Answer
document.getElementById('answer2').innerHTML =
    mm + "-" + dd + "-" + yyyy +
    "<br>" +
    mm + "/" + dd + "/" + yyyy +
    "<br>" +
    dd + "/" + mm + "/" + yyyy;

console.log(mm);
console.log(dd);
console.log(yyyy);




/* 3.--------

*/
//adapted from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string
function showHTML(){
    document.getElementById("answer3").innerText = document.documentElement.innerHTML;
}

console.log("Show HTML Source Code");



/* 4.--------

*/
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