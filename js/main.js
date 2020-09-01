//In the space below each problem, write the code to answer. This page connects to index.html

//anna allen

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var today = new Date();

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var hour = today.getHours();
var min = today.getMinutes();
var secs = today.getSeconds();
var dayOfWeek = days[today.getDay()];

document.getElementById('answer1').innerHTML = 'Today is ' + dayOfWeek + '.<br>' + 'Current Time: ' + hour + ':' + min + ':' + secs + ' PM';
console.log(dayOfWeek);
console.log(hour+':'+min+':'+secs);

/* 2.--------

*/
var numberDate = new Date();
var dd = numberDate.getDate();
var mm = numberDate.getMonth() + 1;
var yyyy = numberDate.getFullYear();

if (dd < 10) {
    dd = '0' + numberDate.getDate();
}
if (mm < 10) {
    mm = '0' + (numberDate.getMonth() + 1);
}

document.getElementById('answer2').innerHTML = mm + '-' + dd + '-' + yyyy + '<br>' 
                                            + mm + '/' + dd + '/' + yyyy + '<br>'
                                            + dd + '/' + mm + '/' + yyyy + '<br>';

console.log(mm + '-' + dd + '-' + yyyy);
console.log(mm + '/' + dd + '/' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);

/* 3.--------

*/

function clickMe() {
    document.getElementById("answer3").innerHTML='<object type="text/html" data="index.html" ></object>';
}




/* 4.--------

*/

$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');
    });

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var toolName = new Tool();

var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

toolName.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
};

paper.view.draw();


