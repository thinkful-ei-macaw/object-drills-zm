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