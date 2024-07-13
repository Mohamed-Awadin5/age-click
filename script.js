let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btnResult = document.getElementById("btn");

// how to get today is date in js
var today = new Date();
var currentDay = today.getDate();
var currentMonth = today.getMonth() + 1; // January is 0, so we add 1
var currentYear = today.getFullYear();
// Display the date in the console
console.log("Today is: " + currentDay + "/" + currentMonth + "/" + currentYear);
btnResult.addEventListener("click", function () {
  // Validate day
  if (day.value < 1 || day.value < 31) {
    alert("Please enter a valid day between 1 and 31");
    return;
  }
  // Validate month
  if (month.value < 1 || month.value > 12) {
    alert("Please enter a valid month between 1 and 12");
    return;
  }
  // Validate year
  if (year.value < 1 || year.value > 2024) {
    alert("Please enter a valid year till 2024");
    return;
  }
});

// convert - number into number
function absoluteValue(num) {
  if (num < 0) {
    return -num;
  }
}
console.log(absoluteValue(-5)); // check the function

btnResult.addEventListener("click", function () {
  var resultYear = currentYear - year.value; // calc year
  var resultMonth = currentMonth - month.value;
  // add condition to check reach it or not
  if (resultMonth < 0) {
    --resultYear;
    months = 12 - absoluteValue(resultMonth);
    console.log(resultYear);
    console.log(months);
  }
  // add condition
  if (resultMonth > 0) {
    months = month.value;
    console.log(resultYear);
    console.log(months);
  }
  let textYear = document.getElementById("textYears");
  let textMon = document.getElementById("textMon");
  let x = (textYear.innerHTML = resultYear + " Years");
  let y = (textMon.innerHTML = months + " Months");
});
