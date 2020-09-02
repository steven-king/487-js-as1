//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();
var week = new Array(7);
week[0] = "Sunday";
week[1] = "Monday";
week[2] = "Tuesday";
week[3] = "Wednesday";
week[4] = "Thursday";
week[5] = "Friday";
week[6] = "Saturday";
var weekDay = week[date.getDay()];

var time = date.toLocaleTimeString();

document.getElementById('answer1').innerHTML="Today is " + weekDay + "." + "<br />" + "Current Time : " + time;

/* 2.--------*/
var month = date.getMonth() + 1;
var dateNum = date.getDate();
var year = date.getFullYear();

var dateOne = month + "-" + dateNum + "-" + year;
var dateTwo = date.toLocaleDateString();
var dateThree = dateNum + "/" + month + "/" + year;

document.getElementById('answer2').innerHTML=dateOne + "<br />" + dateTwo + "<br />"+ dateThree;

/* 3.--------*/
function showCode(){
  var code = document.documentElement.innerHTML;
  console.log(code.toString());
  var codeDisplay = code.toString();
  document.getElementById('answer3').innerText=codeDisplay;
}




/* 4.--------*/
paper.install(window);
paper.setup(document.getElementById('main-canvas'));

var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = '20';
text.content = 'hello world';

var tool1 = new Tool();

tool1.onMouseDown = function(event) {
  var c = Shape.Circle(event.point.x, event.point.y, 20);
  c.fillColor = 'green';
};

paper.view.draw();
