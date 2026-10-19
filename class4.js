

var x = 2;
var y = 4;
function calculateSquare(num) {
  var result = num * num;

  return result;
}
calculateSquare(2);


function greetUser(extraQuestion) {
  console.log("Good Morning");

  if(extraQuestion){
    extraQuestion();
  }
}
function askUserName() {
  console.log("What is your Name");
}

greetUser(askUserName);

function showAlert() {
  alert("ood Morning");
}

setTimeout(showAlert, 4000);
setInterval(showAlert, 4000);

function showAlert() {
  function {
    prompt('What is your Name')
  }
}
