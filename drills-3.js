'use strict';
// problem 1 =========================
const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());


// problem 2 =========================
let obj = {
  foo: 'hi',
  bar: 'my',
  fum: 'name',
  quux: 'is',
  spam: 'greg'
}

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: '${obj[key]}'`);
  }
}


// problem 3 =========================
let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);


// problem 4 =========================
let a = {name: "Albert", jobTitle: "Anchorman"};
let b = {name: "Beth", jobTitle: "Bus Driver"};
let c = {name: "Chris", jobTitle: "Chaplain"};
let d = {name: "Dylan", jobTitle: "Domino's Delivery Driver"};
let e = {name: "Elizabeth", jobTitle: "Entertainer"}
let people = [a, b, c, d, e];
people.forEach(person => console.log(`${person.name} the ${person.jobTitle}`));