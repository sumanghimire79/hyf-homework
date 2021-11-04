
/* Suman Ghimire javaScript1 w2 student manager */

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  let admission;
  if (class07Students.length < 6){
    class07Students.push(studentName);
    admission = class07Students.length+ " congratulation " + studentName+ " you are admitted";
    console.log(admission);
    } else if (class07Students.includes(studentName)){
    admission = "Hi " + studentName +" you are already admitted"
    console.log(admission);
    } else if (class07Students.length <= 6 && studentName === "Queen" ) {
    admission= "Honourable " + studentName + " is successfully added to the class07." + " The class member now including queen is " + class07Students.length ;
    console.log(admission);  
    } else {
     admission= " Sorry " + studentName + " we have already " +  class07Students.length + " students admitted. the class is full, Cannot add more students to class 07"
    console.log(admission);  
  }
}

function getNumberOfStudents() {
  // You write code here
 let numberOfStudents = class07Students.length;
 console.log("The current number of Students is "+  numberOfStudents);
 return numberOfStudents;

}

console.log(class07Students);
addStudentToClass("Suman");
console.log(class07Students);
addStudentToClass("Chanda");
console.log(class07Students);
addStudentToClass("Amrit");
console.log(class07Students);
addStudentToClass("Chunmai");
console.log(class07Students);
addStudentToClass("Asma");

console.log(class07Students);
addStudentToClass("Annas");
console.log(class07Students);
addStudentToClass("Suman");
console.log(class07Students);
addStudentToClass("Chunmai");
console.log(class07Students);

addStudentToClass("Queen");// array.length did not increase
console.log(class07Students);

addStudentToClass("MR. Langsome");

console.log(class07Students);
addStudentToClass("Queen"); // assigining queen again?

getNumberOfStudents();