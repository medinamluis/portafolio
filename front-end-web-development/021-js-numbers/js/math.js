const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 24;
const weeksPerYear = 52.1428571429;

const secsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secsPerDay} seconds in a day.`)

const yearsAlive = 33;
console.log(`I've been alive for more than ${yearsAlive * secsPerDay * daysPerWeek * weeksPerYear} seconds!`)
