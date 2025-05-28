const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 78 },
];

function filterHighGrades(students, threshold) {
  return students.filter(student => student.grade > threshold);
}

console.log(filterHighGrades(students, 80));
