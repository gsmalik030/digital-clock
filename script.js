const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amOrPm = document.getElementById("am-pm");

digitalCLock();

function digitalCLock() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  minutes.textContent = min;
  seconds.textContent = sec;
  hours.textContent = hour;
  amOrPm.textContent = ampm;

  setTimeout(() => {
    digitalCLock();
  }, 1000);
}
