// function addStudent() {
//   std = {
//     fistName: prompt("enter your fname"),
//     lastName: prompt("enter your lname"),
//   };
//   studentData.push(std);
//   console.log(studentData);
// }
// object without constructor
// function studentCheck() {
//   var check = prompt("enter number");
//   console.log(studentData[check].fistName, studentData[check].lastName);
// }
var studentData = [];
function Student(firstname, lastname, age, teacher) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.teacher = teacher;
}
Student.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};

function addStudent() {
  firstname = prompt("enter your firstname");
  lastname = prompt("enter your lastname");
  age = prompt("enter your age");
  gender = prompt("enter your gender");
}

var student = new Student(firstname, lastname, age, gender);
studentData.push(student);
console.log("student added", student);
console.log("all student ", studentData);
