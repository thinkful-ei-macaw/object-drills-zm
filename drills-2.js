'use strict';
function makeStudentsReport(data) {
  // your code here
  const someArr = [];
  for (let i = 0; i < data.length; i ++){
    const someThing = data[i];
    someArr.push(`${someThing.name}: ${someThing.grade}`)
  }
  return someArr;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  students.forEach(student => {
    student.status = 'In Summer school';
  });
  return students;
}
