//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var fullDate = new Date();
var listDay = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
var currentDay = listDay[fullDate.getDay()];
//code acquired from
//https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
var currentTime = fullDate.toLocaleString('en-US', {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: true,
});

console.log(currentDay, currentTime);

document.getElementById('answer1').innerHTML =
	'Today is ' + currentDay + '</br>' + 'Current Time: ' + currentTime;

/* 2.--------

*/
var currentYear = fullDate.getFullYear();
var currentMonth = fullDate.getMonth();
var currentDay = fullDate.getDay();

var format1 = currentMonth + '-' + currentDay + '-' + currentYear;
var format2 = currentMonth + '/' + currentDay + '/' + currentYear;
var format3 = currentDay + '/' + currentMonth + '/' + currentYear;

console.log(format1, format2, format3);

document.getElementById('answer2').innerHTML =
	format1 + '</br>' + format2 + '</br>' + format3;

/* 3.--------

*/
function btnClick() {
	var elmnt = document.getElementsByTagName('html')[0];
	var cln = elmnt.cloneNode(true);
	var clnHTML = document.getElementById('answer3').appendChild(cln);
}

document.getElementById('answer3').innerHTML =
	'<button id="js-btn">Click Here</button>';

document.getElementById('js-btn').onclick = btnClick;

/* 4.--------

*/

$(document).ready(function () {
	'use strict';
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
	tool.onMouseDown = function (event) {
		var c = Shape.Circle(event.point, 20);
		c.fillColor = 'green';
	};

	paper.view.draw();

	console.log('main.js loaded');
});
