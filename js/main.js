var date = new Date();
const WEEKDAY = getWeekdayAsString(date.getDay());
const TIME = getAmPmString(date.getHours());

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

let date0 = `Today is ${WEEKDAY}.<br>Current Time: ${TIME}`;
document.getElementById("answer1").innerHTML = date0;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/

let date1 = `${date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()}-${date.getDate()}-${date.getFullYear()}
<br>${date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()}/${date.getDate()}/${date.getFullYear()}
<br>${date.getDate()}/${date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()}/${date.getFullYear()}`;
document.getElementById("answer2").innerHTML = date1;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/




//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//





// adapt from Learning Javascript Ethan Brown Chapter 1


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
    return `${hours}:${date.getMinutes()}:${date.getSeconds()} ${suffix}`;
}
// end task 1 functions
// task 2 functions
