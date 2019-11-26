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
    background = document.querySelector("#shuttleBackground");
    height = document.getElementById("spaceShuttleHeight");
    buttonLand = document.getElementById("landing");
    buttonAbort = document.getElementById("missionAbort");
    buttonUp = document.getElementsByName("Up");

    buttonTakeOff.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirm){
            status.innerHTML = "Shuttle in flight.";
            background.style.background = "blue";
            height.innerHTML = "10,000";
        };
      });
      
    buttonLand.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.background = "green";
        height.innerHTML = "0";
      });

    buttonAbort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            status.innerHTML = "Mission aborted.";
            background.style.background = "green";
            height.innerHTML = "0";
        };
      });

      buttonUp.addEventListener("click", function (event) {
          
      });
}

window.onload = init;