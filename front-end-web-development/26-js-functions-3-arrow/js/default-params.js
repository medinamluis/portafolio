function sayGreeting(greeting = 'Hi there', name = 'student') {
  return `${greeting}, ${name}`;
}

function getArea(width, length, unit = 'sq-m') {
  const area = width * length;
  return `${area} ${unit}`;
}
