'use strict';

console.log('Hello');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let seattle = {
  name: 'Seattle',
  hourMinCust: 23,
  hourMaxCust: 65,
  avgCookiesPurchased: 6.3,

  hourlyCustomers:[],
  randomCustomersPerHour: function(){
    console.log('Store Hours:',hours);
    for (let i=0; i<hours.length; i++){
      let randomCustomers = Math.floor(Math.random() * (this.hourMaxCust - this.hourMinCust) + this.hourMinCust);
      this.hourlyCustomers.push(randomCustomers);
    }
    console.log (this.hourlyCustomers);
  },

  // hourlyCookies: [],
  // cookiesPerHour: function(){
  //   // let customersInHour = this.randomCustomersPerHour();
  //   // let cookiesInHour = Math.ceil(customersInHour*this.avgCookiesPurchased);
  //   console.log(this.hourlyCustomers);
    
  //   for (let i=0; i<hours.length; i++){
  //     let cookiesPerCustomer = this.avgCookiesPurchased;
  //     cookiesPerCustomer *= this.hourlyCustomers[i];
  //     this.hourlyCookies.push(hourlyCookies);
  //   }
  //   console.log(this.hourlyCookies);
  // },

  dailyTotal: function(){
    let sum = 0;
    for (let i=0; i<hours.length; i++){
      sum +=this.hourlyCustomers[i];
      // This will need to be hourly cookies
    }
    console.log(sum);
  },

  // hoursAndAvgCookiesSold: function (){
  //   // for loop to render the <li>'s
  // // hours array and the avg cookies sold array
  // }
};


seattle.randomCustomersPerHour();
// seattle.cookiesPerHour();
seattle.dailyTotal();

console.log ("Seattle Store", seattle);


// let tokyo = {
//   name: 'Tokyo',
//   hourMinCust: 3,
//   hourMaxCust: 24,
//   avgCookiesPurchased: 1.2,
//   hourlyCookies: [],
//   dailyTotal: 0,
// }

// let dubai = {
//   name: 'Dubai',
//   hourMinCust: 11,
//   hourMaxCust: 38,
//   avgCookiesPurchased: 3.7,
//   hourlyCookies: [],
//   dailyTotal: 0,
// }

// let paris = {
//   name: 'Paris',
//   hourMinCust: 20,
//   hourMaxCust: 38,
//   avgCookiesPurchased: 2.3,
//   hourlyCookies: [],
//   dailyTotal: 0,
// }

// let lima = {
//   name: 'Lima',
//   hourMinCust: 2,
//   hourMaxCust: 16,
//   avgCookiesPurchased: 4.6,
//   hourlyCookies: [],
//   dailyTotal: 0,
// }
