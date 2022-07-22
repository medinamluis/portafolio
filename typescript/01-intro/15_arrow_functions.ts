const fullName = (first : string, last : string) => {
    return first + ' ' + last;
}

console.log( fullName('Anne', 'Byrd') );


const gradeGenerator = (grade: number) : string => {
    if (grade < 60) {
        return 'F'
    } else if (grade <= 70) {
        return 'D'
    } else if (grade <= 80) {
        return 'C'
    } else if (grade <= 90) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log( 'Grade for  45: ' + gradeGenerator(45) );
console.log( 'Grade for  60: ' + gradeGenerator(60) );
console.log( 'Grade for  75: ' + gradeGenerator(75) );
console.log( 'Grade for 100: ' + gradeGenerator(100) );