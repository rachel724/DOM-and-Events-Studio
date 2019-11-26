// Write your JavaScript code here.
// Remember to pay attention to page loading!
let buttonUp = null;
let buttonDown = null;
let buttonRight = null;
let buttonLeft = null;
let buttonTakeOff = null;
let status = null;
let background = null;
let buttonLand = null;
let height = null;
let buttonAbort = null;

function init () {
    buttonTakeOff = document.getElementById("takeoff");
    status = document.getElementById("flightStatus");
    background = document.getElementById("shuttleBackground");
    height = document.getElementById("spaceShuttleHeight");
    buttonLand = document.getElementById("landing");
    buttonAbort = document.getElementById("missionAbort");
    buttonUp = document.getElementById("up");
    buttonDown = document.getElementById("down");
    buttonLeft = document.getElementById("left");
    buttonRight = document.getElementById("right");
    let currentHeight = Number(height.innerHTML);
    console.log(typeof(currentHeight));

    buttonTakeOff.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirm){
            status.innerHTML = "Shuttle in flight.";
            background.style.background = "blue";
            height.innerHTML = 10000;
            currentHeight = Number(height.innerHTML);
        };
      });
      
    buttonLand.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.background = "green";
        height.innerHTML = 0;
        currentHeight = Number(height.innerHTML);
      });

    buttonAbort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            status.innerHTML = "Mission aborted.";
            background.style.background = "green";
            height.innerHTML = 0;
            currentHeight = Number(height.innerHTML);
        };
      });

      buttonUp.addEventListener("click", function (event) {
          background.style.bottom = "10px";
          background.style.top = "";
          height.innerHTML = currentHeight + 10000;
          currentHeight = Number(height.innerHTML);
      });

      buttonDown.addEventListener("click", function (event) {
        background.style.top = "10px";
        background.style.bottom = "";
        height.innerHTML = currentHeight - 10000;
        currentHeight = Number(height.innerHTML);
    });

    buttonLeft.addEventListener("click", function (event) {
        background.style.right = "10px";
        background.style.left = "";
    });

    buttonRight.addEventListener("click", function (event) {
        background.style.left = "10px";
        background.style.right = "";
    });
}

window.onload = init;