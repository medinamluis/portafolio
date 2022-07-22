var fullName = function (first, last) {
    return first + ' ' + last;
};
console.log(fullName('Anne', 'Byrd'));
var gradeGenerator = function (grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade <= 70) {
        return 'D';
    }
    else if (grade <= 80) {
        return 'C';
    }
    else if (grade <= 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log('Grade for  45: ' + gradeGenerator(45));
console.log('Grade for  60: ' + gradeGenerator(60));
console.log('Grade for  75: ' + gradeGenerator(75));
console.log('Grade for 100: ' + gradeGenerator(100));
//# sourceMappingURL=15_arrow_functions.js.map