'use strict';

console.log('Hello');

const profileContainer = document.getElementById('storeProfiles');

console.log (profileContainer);

let article = document.createElement('article');
profileContainer.appendChild(article);


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

  hourlyCookies: [],
  cookiesPerHour: function(){
    console.log(this.hourlyCustomers);
    for (let i=0; i<hours.length; i++){
      let cookiesInHour = Math.ceil(this.hourlyCustomers[i]*this.avgCookiesPurchased);
      this.hourlyCookies.push(cookiesInHour);
    }
    console.log(this.hourlyCookies);
  },

  dailyTotal: function(){
    let sum = 0;
    for (let i=0; i<hours.length; i++){
      sum +=this.hourlyCookies[i];
    }
    console.log(sum);
    return sum;
  },

  storeName: function(){
    let store = document.createElement('h3');
    store.textContent = `${this.name}`;
    article.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h4');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    article.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      article.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    article.appendChild(total);
  }
};

console.log ("Seattle Store", seattle);
seattle.randomCustomersPerHour();
seattle.cookiesPerHour();
seattle.dailyTotal();
seattle.storeName();
seattle.tableTitle();
seattle.hoursAndCookiesList();
seattle.totalCookies();



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
