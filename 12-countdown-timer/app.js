const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector("deadline");
const items = document.querySelectorAll(".deadline-format h4");
// set date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth + 2, tempDay + 10, 10, 0, 0);

// get date
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
const h = hours < 10 ? `0${hours}` : `${hours}`;
let minutes = futureDate.getMinutes();
const m = minutes < 10 ? `0${minutes}` : `${minutes}`;

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${h}:${m}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const today = new Date().getTime();
  const t = futureTime - today;

  // cal all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 0) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired>sorry, this giveaway has expired!</h4>`;
  }
}

// set countdown
let countdown = setInterval(getRemaindingTime, 1000);

// set initial values
getRemaindingTime();
