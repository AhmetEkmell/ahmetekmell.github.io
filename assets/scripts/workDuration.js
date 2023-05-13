const workDuration = document.getElementById("work-duration");

const startDate = new Date("2022-03-01");
const currentDate = new Date();

let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
let monthDiff = currentDate.getMonth() - startDate.getMonth();

if (monthDiff < 0) {
  yearDiff--;
  monthDiff += 12;
}

const dynamicDuration = yearDiff + " year and " + monthDiff + " months.";
workDuration.textContent = dynamicDuration;
