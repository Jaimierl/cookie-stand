'use strict';

console.log('Hello');

let seattle = {
  
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
      let cookiesInHour = Math.round(this.hourlyCustomers[i]*this.avgCookiesPurchased);
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
    let store = document.createElement('h2');
    store.textContent = `${this.name}`;
    articleSeattle.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h3');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    articleSeattle.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      articleSeattle.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleSeattle.appendChild(total);
  }
};

seattle.randomCustomersPerHour();
seattle.cookiesPerHour();
seattle.dailyTotal();
seattle.storeName();
seattle.tableTitle();
seattle.hoursAndCookiesList();
seattle.totalCookies();
