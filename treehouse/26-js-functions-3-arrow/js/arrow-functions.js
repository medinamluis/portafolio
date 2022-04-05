// Function declaration (hoisted)
function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

// Function expression (not hoisted)
const getRandomNumber2 = function(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};

// Function arrow expression (not hoisted)
const getRandomNumber3 = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};

const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
};