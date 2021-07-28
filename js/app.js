'use strict'

console.log('Hello');

let seattle = {
  name: 'Seattle',
  hourMin: 23,
  hourMax: 65,
  avgCookiesPurchased: 6.3,
  hourlyCookies: [0,1,2],
  dailyTotal: 0,
  getRandomCustomer: function(){
    return Math.floor(Math.random() * (this.max - this.min) + this.min); //The maximum is exclusive and the minimum is inclusive. Maybe a for loop with a push to the other things. Returns are useful for taking a value and resaving it as a variable to do something else
  }
}

let rand  = seattle.getRandomCustomer();
// This is the use of the return function.

// Lets get a random integer inclusive from math.random. The floor thing keeps the number from being a decimal.

console.log(seattle.getRandomCustomer());

// We then need to store this data so it can be referenced later. What about an array (see avgCookiesPerHour)
