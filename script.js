let calc = document.getElementById("calc");

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");

let error = document.querySelector(".error p");

function ageCalculate() {
  let date = new Date(document.getElementById("date-input").value);

  if (date == "Invalid Date") {
    error.innerHTML = "Please Enter a Valid Date";
  } else {
    error.innerHTML = "";
    let nowDate = new Date();
    let day = nowDate.getDate() - date.getDate();
    let month = nowDate.getMonth() - date.getMonth();
    let year = nowDate.getFullYear() - date.getFullYear();

    if (year < 0) {
      error.innerHTML = "Sorry Not Born Yet!!";
    } else if (month < 0) {
      error.innerHTML = "";
      years.innerHTML = year;
      months.innerHTML = 12 + month - nowDate.getMonth();
      days.innerHTML = day;
    } else {
      error.innerHTML = "";
      years.innerHTML = year;
      months.innerHTML = month;
      days.innerHTML = day;
    }
  }
}
