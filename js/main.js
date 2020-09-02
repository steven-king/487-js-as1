//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

// var d = new Date();
// var day = d.getDay();
//
// var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//


function getTodaysDay() {
  var d = new Date();
  var day = d.getDay();

  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return "Today is " + weekDays[day];
}

var x = getTodaysDay();


function getTodaysTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  var amOrPm
  if (h >= 12) {
    amOrPm = " PM"
  } else {
    amOrPm = " AM"
  }
  return "Current Time : " + hours[h] + ":" + m + ":" + s + amOrPm;
}
var y = getTodaysTime();

var answer1 = x + " <br>" + y
document.getElementById("answer1").innerHTML = answer1;







/* 2.--------

*/


function questionTwo() {
  var d = new Date();
  var m = 1 + d.getMonth();
  var n = d.getDate();
  var y = d.getFullYear();

  var a = m + "-" + n + "-" + y;
  var b = m + "/" + n + "/" + y;
  var c = n + "/" + m + "/" + y;

  return a + " <br>" + b + " <br>" + c;
}

var answer2 = questionTwo();
document.getElementById("answer2").innerHTML = answer2;





/* 3.--------

*/

function showCode() {
  var c = document.documentElement.innerHTML;
  document.getElementById("answer3").innerHTML = c;
}



/* 4.--------

*/


(function() {
  'use strict'
  // code starts here

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'))
  var c = Shape.Circle(200, 200, 80);

  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world'


  paper.view.draw();
  //end here
}())
//
// var c = Shape.Circle(200, 200, 80);
// c.fillColor = 'black';
// var text = new PointText(200, 200);
// text.justification = 'center';
// text.fillColor = 'white';
// text.fontSize = 20;
// text.content = 'hello world'
//
// document.getElementById('main-canvas').innerHTML = c;
