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
