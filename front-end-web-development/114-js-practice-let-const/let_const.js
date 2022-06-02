/*

1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the `teachers` variable. 
 
2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.
 
3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.

*/


const teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];

let newTeachers = [   // This was defined at the end of the file. It was fine for 'var', but not for const or let, so it was moved up here
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
];

const courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];
			

const i = courses.length;   // original 'var' changed for 'const'



function addNewTeachers(newTeachers) {
	// TODO: write a function that adds new teachers to the teachers array 
  teachers.push(...newTeachers);
}


function printTreehouseSummary() {
	// TODO: fix this function so that it prints the correct number of courses and teachers 
	
  for (let i = 0; i < teachers.length; i++) {   // original 'var' changed for 'let' (for local scope). The global is used for the length of courses (number of courses)
	  console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}
	
  console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length} Javascript teachers`);
}

console.log(teachers);
addNewTeachers(newTeachers);
console.log(teachers);

printTreehouseSummary();

// let newTeachers was defined here










