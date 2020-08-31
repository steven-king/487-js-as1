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

/* 4.--------

*/
