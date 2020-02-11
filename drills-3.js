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


// problem 4 + 5 =======================
let a = {name: "Albert", jobTitle: "Anchorman", boss: "Fred"};
let b = {name: "Beth", jobTitle: "Bus Driver", boss: "Fred"};
let c = {name: "Chris", jobTitle: "Chaplain", boss: "Fred"};
let d = {name: "Dylan", jobTitle: "Domino's Delivery Driver", boss: "Fred"};
let e = {name: "Elizabeth", jobTitle: "Entertainer", boss: "Fred"};
let f = {name: "Fred", jobTitle: "Founder"};
let people = [a, b, c, d, e, f];
people.forEach(person => {
  if (person.boss){
    console.log(`${person.name} the ${person.jobTitle} reports to ${person.boss}`)
  } else {
    console.log(`${person.name} the ${person.jobTitle} doesn't report to anyone.`)
  }
});


// problem 6 =========================
function decode(word){
  let cipher = { a: 2, b: 3, c: 4, d: 5 };
  let firstLetter = word[0];

  return cipher[firstLetter] ? word.charAt(cipher[firstLetter] - 1) : ' ';
}

function decodeWords(sentence){
  let message = '';
  sentence.split(' ').forEach(word => message += decode(word));
  return message;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

// problem 7 =========================
function createCharacter(name, nickname, race, origin, attack, defense){
  return {
    name, nickname, race, origin, attack, defense,
    describe : function(){
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight : function(character){
      let x = character.defense > this.attack ? 0 : this.attack - character.defense;
      let y = character.attack < this.defense ? 0 : character.attack - this.defense;
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 10, 10));

let newVar = characters.find(character => character.nickname === 'aragorn');
console.log(newVar.describe());

let hobbits = characters.filter(character => character.race === 'Hobbit');

let baddies = characters.filter(character => character.attack > 5);


// problem 8 =========================
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let result = null;
  result = arr.find(element => {
    let match = true;
    Object.keys(query).forEach(key => {
      match = element[key] === query[key];
    });
    return match;
  });
  return result;
}

console.log( findOne(HEROES, { squad: 'Justice League' }) );