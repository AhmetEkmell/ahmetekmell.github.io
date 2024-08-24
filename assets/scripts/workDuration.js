const workDuration = document.getElementById("work-duration");

const startDate = new Date("2022-03-01");
const currentDate = new Date();

const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
const years = Math.floor(totalMonths / 12);
const months = totalMonths % 12;

const dynamicDuration = (years + months / 12).toFixed(1);
workDuration.textContent = dynamicDuration;
