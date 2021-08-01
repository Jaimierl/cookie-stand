'use strict';

console.log ('Hello');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let storeArray = [];

function Store(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;

  storeArray.push(this);
}

console.log (storeArray);




// Rewrite cookies per hour as a store.prototype function.
Store.prototype.render = function(){
  const profileContainer = document.getElementById('storeProfiles');

  let article = document.createElement('article');
  profileContainer.appendChild(article);


// Test Code
  let test = document.createElement('h1');
  test.textContent= 'Test';
  profileContainer.appendChild(test);


};



let seattle = new Store(
  // name, min, max, avg
  'Seattle',
  23,
  65,
  6.3
);

seattle.render();

let tokyo = new Store(
  // name, min, max, avg
  'Tokyo',
  3,
  24,
  1.2
);

let dubai = new Store(
  // name, min, max, avg
  'Dubai',
  11,
  38,
  3.7
);


let paris = new Store(
  // name, min, max, avg
  'Paris',
  20,
  38,
  2.3
);

let lima = new Store(
  // name, min, max, avg
  'Lima',
  2,
  16,
  4.6
);

