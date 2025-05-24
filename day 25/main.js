var programingLanguages = ['javascript','php','java'];

programingLanguages.push('python');

programingLanguages.pop();

programingLanguages.unshift('c#')

programingLanguages.shift();

var programingLanguages1 = ['javascript','php','java'];

programingLanguages1.splice(1,1 ,'ruby');

console.log(programingLanguages1);

console.log(Math.floor(Math.random()*10));

var students = ['student 1', 'students 2'];

var [s1, s2] = students;

console.log(s1);
console.log(s2);

var citys = ['prishtina 1', 'prizeren 2','gjakiova 3'];

var [p1, , gj3] = citys;

console.log(p1);
console.log(gj3);       

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());
