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

function findById(items, idNum) {
  // your code here
  let output;
  items.forEach(item => {
    if (item.id === idNum){
      output = item;
    }
  });
  return output;
}

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let output = true;
  if (expectedKeys.length === Object.keys(object).length){
    Object.keys(object).forEach(key => {
      if (!expectedKeys.includes(key)) output = false;
    });
  } else {
    output = false;
  }

  return output;
}
