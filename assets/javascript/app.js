var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;
var questions = [
  ["What is the nearest star to Earth?","Alpha centauri", "Proxima Centauri", "Sun", "C"],
  ["Which of the following is not a planet?","Mercury", "Pluto", "Venus", "B"],
  ["In which Galaxy do we live?","Milky Way", "Andromeda Galaxy", "Whirlpool", "A"],
  ["How many planets are there in our solar system?","8", "9", "10", "A"],
  ["Which of the following is also known as a blue planet?","Mercury", "Mars", "Earth", "C"]
];

function _(x){
  return document.getElementById(x);

};
function renderQuestion(){
  test= _("test");
  if(pos>=question.lenght){
    test.innerHTML = "<h2> You Got "+correct+" of "+questions.length+" question correct <h2>";
    _("test_status").innerHTML = "Test Completed";
    pos=0;
    correct=0;
    return false;
  }
  _("test_status").innerHTML = "Question" +(post+1)+ "of" +questions.length;
  question = questions[pos] [0];
  chA =questions[pos] [1];
  chB =questions[pos] [2];
  chC =questions[pos] [3];
  test.innerHTML = "<h5>" + question+ "</h5>";
  test.innerHTML += "<input type='radio'> name='choises' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio'> name='choises' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio'> name='choises' value='C'> "+chc+"<br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer>";
}

function checkAnswer(){
  choices = document.getElementById("choises");
  for (var i=0; i< choices.lenght; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice== questions[pos][4]){
    correct++;
  }
pos++;
renderQuestion();
}
window.addEventListener("load", renderQuestion, false);