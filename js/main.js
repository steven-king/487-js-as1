//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

var date = new Date();
const TimeFormat = new Intl.DateTimeFormat('en', { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
const [{ value: weekday },,{ value: hour },,{ value: minute },,{ value: second },,{ value: hour12 }] = TimeFormat.formatToParts(date); 

var date_time = `Today is ${weekday}.<br/>Current Time: ${hour}:${minute}:${second} ${hour12}`

document.getElementById("answer1").innerHTML = date_time;

/* 2.--------

*/

const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date); 

var date = `${month}-${day}-${year}<br />${month}/${day}/${year}<br />${day}/${month}/${year}`;
console.log(`${month}-${day}-${year}`)
console.log(`${month}-${day}-${year}`)
console.log(`${month}-${day}-${year}`)

document.getElementById("answer2").innerHTML = date;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------

*/

function myFunction() {
    var text = document.documentElement.innerHTML;
    document.getElementById('answer3').innerText= text;
    }

/* 4.--------

*/
//
   

   

   
// adapt from Learning Javascript Ethan Brown Chapter 1
