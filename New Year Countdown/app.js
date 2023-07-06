const days_div = document.querySelector(".days");
const months_div = document.querySelector(".months");
const hours_div = document.querySelector(".hours");
const minutes_div = document.querySelector(".minutes");
const seconds_div = document.querySelector(".seconds");

const next_year = new Date().getFullYear();
const new_year = new Date(next_year + 1, 0);
const year = document.getElementById("year");
year.innerText = year.innerText + " " + (next_year + 1);

setInterval(countDown, 500);

function countDown() {
  const current = new Date();
  let toDate = new_year.getTime() - current.getTime();

  const mili = toDate % 1000;
  toDate = (toDate - mili) / 1000;
  const seconds = toDate % 60;
  toDate = (toDate - seconds) / 60;
  const minutes = toDate % 60;
  toDate = (toDate - minutes) / 60;
  const hours = toDate % 24;
  toDate = (toDate - hours) / 24;
  const days = toDate % 365;

  [
    days_div.innerText,
    hours_div.innerText,
    minutes_div.innerText,
    seconds_div.innerText,
  ] = [days, hours, minutes, seconds];
}
