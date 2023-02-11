/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
 
function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr
    .filter(student => student.marks > 50)
    .map(student => console.log(student));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
      if (student.marks > 50) {
        console.log(student);
      }
    });
}

function addData() {
  //Write your code here, just console.log
   let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter(student => student.marks < 50);
   console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let newArray = [
      { id: 4, name: "amol", age: "22", marks: 74 },
      { id: 5, name: "harshal", age: "24", marks: 90 },
      { id: 6, name: "nitin", age: "21", marks: 66 },
    ];
    let result = arr.concat(newArray);
    console.log(result);
}
