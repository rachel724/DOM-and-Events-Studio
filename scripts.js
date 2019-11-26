// Write your JavaScript code here.
// Remember to pay attention to page loading!
let buttonUp = null;
let buttonDown = null;
let buttonRight = null;
let buttonLeft = null;
let buttonTakeOff = null;

function init () {
    buttonTakeOff = document.getElementById("takeoff");
    buttonTakeoff.addEventListener("click", function (event) {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
      });
}

window.onload = init;