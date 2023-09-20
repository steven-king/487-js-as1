var date = new Date();

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

const WEEKDAY = getWeekdayAsString(date.getDay());
const TIME = getAmPmString(date.getHours());
let date0 = `Today is ${WEEKDAY}.<br>Current Time: ${TIME}`;
// task 1 functions
function getWeekdayAsString(dayAsInt) {
    switch(dayAsInt) {
        case 0:
            return "Sunday";
        case 1: 
            return "Monday";
        case 2: 
            return "Tuesday";
        case 3: 
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";

    }
}
function getAmPmString(hours) {
    let suffix = "AM";
    if(hours >= 12) {
        suffix = "PM"
        if (hours >= 13) {
            hours -= 11;
        }
    }
    trueMins = parseInt(date.getMinutes());
    trueSec = parseInt(date.getSeconds());
    return `${hours}:${trueMins < 10 ? "0" + trueMins : trueMins}:${trueSec < 10 ? "0" + trueSec : trueSec} ${suffix}`;
}
// end task 1 functions
document.getElementById("answer1").innerHTML = date0;
//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat


/* 2.--------
*/

const trueMonth = parseInt(date.getMonth()) + 1;
let date1 = `${trueMonth > 9 ? trueMonth : "0" + trueMonth}-${date.getDate()}-${date.getFullYear()}
<br>${trueMonth > 9 ? trueMonth : "0" + trueMonth}/${date.getDate()}/${date.getFullYear()}
<br>${date.getDate()}/${trueMonth > 9 ? trueMonth : "0" + trueMonth}/${date.getFullYear()}`;

document.getElementById("answer2").innerHTML = date1;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

let ansThree = document.getElementById("answer3");
const PAGE_HTML = document.documentElement.innerHTML;


// task 3 functions
function myFunction() {
    ansThree.innerHTML += PAGE_HTML;
}
// end task 3 functions


//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//

$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
       
    
    paper.view.draw();
});
   


// adapt from Learning Javascript Ethan Brown Chapter 1


