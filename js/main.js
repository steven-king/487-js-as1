//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

let today = new Date();
let dayOfWeek = today.toLocaleString("en-US", {weekday:'long'}); 
let time = today.toLocaleString("en-US", {timeStyle:'medium'});
document.getElementById("answer1").innerHTML += `Today is ${dayOfWeek}. <br>
Current Time: ${time}`;


/* another way: 
let date = new Date();
let day = date.getDay();   -> returns a number btwn 0-6
let nameOfDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
Question: is it okay to use innerHTML and <br> in this case?
*/

/* 2.--------
mm-dd-yyyy, mm/dd/yyyy and dd/mm/yyyy each on a seperate line.
*/

document.getElementById("answer2").innerHTML += `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()} <br>
 ${today.toLocaleDateString("en-US")} <br>
 ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------

*/

function myFunction() {
    /*var htmlString = $("body").html();
    $("#answer3").text( htmlString );*/
    var pageBTS = document.documentElement.innerHTML;
    document.getElementById("answer3").innerHTML += "<br>";
    document.getElementById("answer3").innerText += pageBTS;
}

/* 4.--------

*/
//
   
paper.install(window);
paper.setup(document.getElementById("main-canvas"));
/*var c = Shape.Circle(200, 200, 50);
c.fillColor = "green";

var c;
for(var x = 25; x < 400; x += 50) {
    for(var y = 25; y < 400; y += 50) {
        c = Shape.Circle(x, y, 20);
        c.fillColor = "green";
    }
}*/

var userInputTool = new Tool();
var c = Shape.Circle(200, 200, 80);
c.fillColor = "black";
var text = new PointText(200, 200);
text.justification = "center";
text.fillColor = "white";
text.fontSize = 20;
text.content = 'hello world';
tool.onMouseDown = function(event) {
    var cir = Shape.Circle(event.point, 20);
    cir.fillColor = "green";
}


paper.view.draw();
   
// adapt from Learning Javascript Ethan Brown Chapter 1
