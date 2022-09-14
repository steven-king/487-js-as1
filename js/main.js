/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
var amOrPm = (d.getHours() < 12) ? "AM" : "PM";

const time = new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', second:'numeric' });

let day = weekday[d.getDay()];
let dateFormated = "Today is " + day + '.' + "<br>Current Time :" + " "+ time + ' ' + amOrPm;   



document.getElementById("answer1").innerHTML = dateFormated;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/

var dates = new Date();

var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
dates = mm+'-'+dd+'-'+yyyy+ "<br>"+ mm + '/'+dd+'/'+yyyy + "<br>"+ dd + '/'+mm+'/'+yyyy;
document.getElementById("answer2").innerHTML = dates;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/


function myFunction() {
    var content = document.documentElement.innerHTML;
    document.getElementById('answer3').innerText= content;
}


//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//
   $(document).ready(function() { 'use strict'; 
console.log('main.js loaded');


paper.install(window); 
paper.setup(document.getElementById('main-canvas'));

var pentool = new Tool();

var c = Shape.Circle(200, 200, 80);
 
c.fillColor = 'blue';
var text = new PointText(200, 200); text.justification = 'center'; text.fillColor = 'white'; 
text.fontSize = 30;
text.content = 'Hello world';

pentool.onMouseDown = function(event) {
  var c = Shape.Circle(event.point.x, event.point.y, 10); c.fillColor = 'black';
};

paper.view.draw();
});





// adapt from Learning Javascript Ethan Brown Chapter 1
