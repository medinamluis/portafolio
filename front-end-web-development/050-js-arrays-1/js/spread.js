const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', 'bottom bun'];

const burger2 = ['top bun', middle, 'bottom bun'];
console.log( burger2 );

const burger3 = ['top bun', ...middle, 'bottom bun'];
console.log( burger2 );

const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassoon'];
const instruments = [...brass, ...woodwind];
console.log( instruments );

brass.push('flugelhorn');
console.log( brass );
console.log( instruments );

const numbers = [10, 20, 30, 40];
console.log( Math.max(numbers) );
console.log( Math.max(...numbers) );