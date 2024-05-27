// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...
//Red
let stopBtn = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
stopBtn.addEventListener("click",()=> {
    stopLight.style.backgroundColor = "red";
});
//Yellow
let slowBtn = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
slowBtn.addEventListener("click",()=> {
    slowLight.style.backgroundColor = "Yellow";
});
//Green
let goBtn = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
goBtn.addEventListener("click",()=> {
    goLight.style.backgroundColor = "Green";
});