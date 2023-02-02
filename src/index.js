import Calculator from './../src/js/weekday-calculator.js'; 

function handleFormSubmission() {
  event.preventDefault();
  const calculateDate = new Calculator();
  let inputDate = document.getElementById("input").value;
  let today = "02/02/2023";
  if (calculateDate.ValidDate(inputDate) === false) {
    document.getElementById("output").innerText = "Please add a valid date.";
  }
  else {
    document.getElementById("output").innerText = "Your date falls on " + calculateDate.WhichDay(inputDate, today);
  }

}

window.addEventListener("load", function () {
  document.querySelector("form#new-date").addEventListener("submit", handleFormSubmission);
});