'use strict';

console.log ('Hello');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let storeArray = [];

function Store(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.dailySum = 0;

  storeArray.push(this);
}

console.log (storeArray);


Store.prototype.hourlyCustomersMath= function(){

  for (let i=0; i<hours.length; i++){
    let randomCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
    this.hourlyCustomers.push(randomCustomers);
  }
  console.log (this.hourlyCustomers);
};

Store.prototype.hourlyCookiesMath = function(){
  for (let i=0; i<hours.length; i++){
    let cookiesInHour = Math.round(this.hourlyCustomers[i]*this.avg);
    this.hourlyCookies.push(cookiesInHour);
  }
  console.log(this.hourlyCookies);
};

Store.prototype.dailyTotal = function(){
  let sum = 0;
  for (let i=0; i<hours.length; i++){
    sum +=this.hourlyCookies[i];
  }
  this.dailySum+=sum;
  console.log (this.dailySum);
  console.log(sum);
  return sum;
};

function renderHead(){
  const storeTable = document.querySelector('tbody');

  let headTr = document.createElement('tr');
  storeTable.appendChild(headTr);

  let thName = document.createElement('th');
  thName.textContent = 'Store Name';
  headTr.appendChild(thName);

  for (let i=0; i<hours.length; i++){
    let thHours = document.createElement('th');
    thHours.textContent = hours[i];
    headTr.appendChild(thHours);
  }

  let thSum = document.createElement('th');
  thSum.textContent = 'Total Cookies Per Day';
  headTr.appendChild(thSum);
};

Store.prototype.render = function(){
  const storeTable = document.querySelector('tbody');

  let bodyTr = document.createElement('tr');
  storeTable.appendChild(bodyTr);

  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  bodyTr.appendChild(tdName);

  for (let i=0; i<this.hourlyCookies.length; i++){
    let td = document.createElement('td');
    td.textContent = this.hourlyCookies[i];
    bodyTr.appendChild(td);
  }

  let tdSum = document.createElement('td');
  tdSum.textContent = this.dailySum;
  bodyTr.appendChild(tdSum);
};

function renderFoot(){
  const storeTable = document.querySelector('tbody');

  let footTr = document.createElement('tr');
  storeTable.appendChild(footTr);

  let tfName = document.createElement('td');
  tfName.textContent = 'Totals';
  footTr.appendChild(tfName);

  
  //   Above:
  // this.allDailyStoreSum = 0;

  for (let i=0;i<hours.length; i++){
    let pants = 0;
    for (let j=0; j<storeArray.length; j++){
      pants += storeArray[j].hourlyCookies[i];
      // push pants;
    }
    let tfCookies = document.createElement('td');
    tfCookies.textContent = pants;
    footTr.appendChild(tfCookies);
  }
  let train = 0;
  for (let j=0; j<storeArray.length; j++){
    train += storeArray[j].dailySum;
  }
  let tfFinal = document.createElement('td');
  tfFinal.textContent = train;
  footTr.appendChild(tfFinal);
};
// // Test Code
// let test = document.createElement('h1');
// test.textContent= 'Test';
// storeTable.appendChild(test);




let seattle = new Store(
  // name, min, max, avg
  'Seattle',
  23,
  65,
  6.3
);

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


function renderAll(){
  // Here we need to call render header once before the for loop
  renderHead();
  for (let i=0;i<storeArray.length; i++){
    storeArray[i].hourlyCustomersMath();
    storeArray[i].hourlyCookiesMath();
    storeArray[i].dailyTotal();
    storeArray[i].render();
  }
  // Here we need to call render footer. After the for loop.
  renderFoot();
}

renderAll();
