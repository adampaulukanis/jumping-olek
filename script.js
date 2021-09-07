"use strict";

// document.addEventListener("keypress", logKey);
document.addEventListener("keyup", logKeyUp);
document.addEventListener("keydown", logKeyDown);
var olek = document.querySelector("#olek");
var grzyb = document.querySelector("#grzyb");
var punkty = 0;
var timerID;
var button = document.querySelector("button");

var keysPressed = {};

grzyb.classList.add("roll");

button.addEventListener("click", function () {
  olek.classList.add("jump");
  setTimeout(function () {
    olek.classList.remove("jump");
  }, 1000);
});

function logKeyDown(ev) {
  if (keysPressed[ev.code] === true) {
    olek.classList.add("double-jump");
  }
  keysPressed[ev.code] = true;

  if (keysPressed["Space"]) {
    olek.classList.add("jump");
  }
}
function logKeyUp(ev) {
  keysPressed[ev.code] = false;
  if (ev.code === "Space") {
    setTimeout(function () {
      olek.classList.remove("jump");
      olek.classList.remove("double-jump");
    }, 1000);
  }
}

/*
{
  if (ev.code === "Space") {
    olek.classList.add("jump");
    setTimeout(function () {
      olek.classList.remove("jump");
    }, 1000);
  }
}
*/

timerID = setInterval(function () {
  var grzybLeft = parseInt(
    window.getComputedStyle(grzyb).getPropertyValue("left"),
    10
  );
  var grzybTop = 30;
  var olekRight = 60;
  var olekBottom = parseInt(
    window.getComputedStyle(olek).getPropertyValue("bottom"),
    10
  );

  if (grzybLeft <= olekRight && olekBottom <= grzybTop) {
    gameover();
  }
}, 10);

function gameover() {
  clearInterval(timerID);
  grzyb.classList.remove("roll");
  olek.classList.remove("jump");
  alert("Przegrałeś!");
}

var animated = document.querySelector("#grzyb.roll");
animated.addEventListener("animationiteration", function () {
  punkty++;
  document.querySelector("#punkty").textContent = `Punkty: ${punkty}`;
});
