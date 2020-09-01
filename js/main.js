//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
{
    var d = new Date();
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let time = d.getHours()%12 + ':' + d.getMinutes() + ':' + d.getSeconds();
    if (d.getHours() > 12) {
        time += ' PM'
    }
    else {
        time += 'AM'
    }
    let field = document.getElementById('answer1');
    field.innerHTML = 'Today is ' + weekdays[d.getDay()] + '.<br>Current Time: ' + time;
}


/* 2.--------

*/
{
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDay() + 1;
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    document.getElementById('answer2').innerHTML = 
        month + '-' + day + '-' + year + '<br>' +
        month + '/' + day + '/' + year + '<br>' +
        day + '/' + month + '/' + year;
}



/* 3.--------

*/
{
    let field = document.getElementById('answer3');
    let btn = '<button id="answer3-btn"><p>See HTML</p></button>';
    field.innerHTML = btn;
    document.getElementById('answer3-btn').addEventListener("click", function(){
        field.innerHTML = document.childNodes[1].innerHTML;
    })
}




/* 4.--------

*/
{
    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));
    paper.view.draw();

    var c = Shape.Circle(150, 75, 60);
    c.fillColor = 'black';
    var text = new PointText(150,80);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
}