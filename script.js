"use strict";

document.addEventListener("keypress", logKey);
var olek = document.querySelector("#olek");
var grzyb = document.querySelector("#grzyb");
var timerID;

grzyb.classList.add('roll');

function logKey(ev) {
  if (ev.code === "Space") {
    olek.classList.add("jump");
    setTimeout(function () {
      olek.classList.remove("jump");
    }, 1000);
  }

  if (ev.code === "KeyZ") {
    console.log(
      parseInt(window.getComputedStyle(grzyb).getPropertyValue("left"), 10)
    );
  }
}

timerID = setInterval(function () {
  var grzybLeft = parseInt(window.getComputedStyle(grzyb).getPropertyValue("left"), 10);
  var grzybTop = 30;
  var olekRight = 60;
  var olekBottom = parseInt(window.getComputedStyle(olek).getPropertyValue('bottom'), 10);
  
  if (grzybLeft <= olekRight && olekBottom <= grzybTop) {
    gameover();
  }
}, 10);

function gameover () {
  clearInterval(timerID);
  grzyb.classList.remove('roll');
  olek.classList.remove('jump');
  alert('Przegrałeś!');
}
