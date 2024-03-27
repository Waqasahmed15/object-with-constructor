var student = [];
function addStudent() {
  std = {
    name: prompt("enter your name"),
    fName: prompt("enter your fname"),
    tName: prompt("enter your teachername"),
  };
  student.push(std);
  console.log(student);
}
