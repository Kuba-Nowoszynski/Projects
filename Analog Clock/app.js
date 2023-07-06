const clock = document.querySelector(".clock");
const s = document.querySelector(".seconds-hand");
const m = document.querySelector(".minutes-hand");
const h = document.querySelector(".hours-hand");

const now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
let hours = now.getHours();
if (hours > 12) hours -= 12;

//created as session local time values incrementing every second - in order to avoid 360 rotation when moving to 0deg
let countS = seconds;
let countM = minutes * 60;
let countH = hours * 360;

setInterval(function setTime() {
  s.style.transform = `rotate(${countS * 6}deg)`;
  m.style.transform = `rotate(${(countM / 60) * 6}deg)`;
  h.style.transform = `rotate(${(countH / 360) * 30}deg)`;

  countS++;
  countM++;
  countH++;
}, 1000);
