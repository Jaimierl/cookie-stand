'use strict';

console.log('Hello');

const profileContainer = document.getElementById('storeProfiles');

console.log (profileContainer);

// let article = document.createElement('article');
// profileContainer.appendChild(article);

let articleSeattle = document.createElement('article');
profileContainer.appendChild(articleSeattle);

let articleTokyo = document.createElement('article');
profileContainer.appendChild(articleTokyo);

let articleDubai = document.createElement('article');
profileContainer.appendChild(articleDubai);

let articleParis = document.createElement('article');
profileContainer.appendChild(articleParis);

let articleLima = document.createElement('article');
profileContainer.appendChild(articleLima);

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



let tokyo = {
  name: 'Tokyo',
  hourMinCust: 3,
  hourMaxCust: 24,
  avgCookiesPurchased: 1.2,

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
    let store = document.createElement('h2');
    store.textContent = `${this.name}`;
    articleTokyo.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h3');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    articleTokyo.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      articleTokyo.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleTokyo.appendChild(total);
  }
};

tokyo.randomCustomersPerHour();
tokyo.cookiesPerHour();
tokyo.dailyTotal();
tokyo.storeName();
tokyo.tableTitle();
tokyo.hoursAndCookiesList();
tokyo.totalCookies();



let dubai = {
  name: 'Dubai',
  hourMinCust: 11,
  hourMaxCust: 38,
  avgCookiesPurchased: 3.7,

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
    let store = document.createElement('h2');
    store.textContent = `${this.name}`;
    articleDubai.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h3');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    articleDubai.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      articleDubai.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleDubai.appendChild(total);
  }
};

dubai.randomCustomersPerHour();
dubai.cookiesPerHour();
dubai.dailyTotal();
dubai.storeName();
dubai.tableTitle();
dubai.hoursAndCookiesList();
dubai.totalCookies();


let paris = {
  name: 'Paris',
  hourMinCust: 20,
  hourMaxCust: 38,
  avgCookiesPurchased: 2.3,

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
    let store = document.createElement('h2');
    store.textContent = `${this.name}`;
    articleParis.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h3');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    articleParis.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      articleParis.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleParis.appendChild(total);
  }
};

paris.randomCustomersPerHour();
paris.cookiesPerHour();
paris.dailyTotal();
paris.storeName();
paris.tableTitle();
paris.hoursAndCookiesList();
paris.totalCookies();


let lima = {
  name: 'Lima',
  hourMinCust: 2,
  hourMaxCust: 16,
  avgCookiesPurchased: 4.6,

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
    let store = document.createElement('h2');
    store.textContent = `${this.name}`;
    articleLima.appendChild(store);
  },

  tableTitle: function(){
    let title = document.createElement('h3');
    title.textContent = 'Store Hours, Average Customers, and Average Cookies Sold';
    articleLima.appendChild(title);
  },

  hoursAndCookiesList: function (){
    for (let i=0; i<hours.length; i++){
      console.log('hours:', hours, 'cookies', this.hourlyCookies);
      let content = document.createElement('li');
      content.textContent = `Time: ${hours[i]} Average Cookies Sold: ${this.hourlyCookies[i]}`;
      articleLima.appendChild(content);
    }
  },

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleLima.appendChild(total);
  }
};

lima.randomCustomersPerHour();
lima.cookiesPerHour();
lima.dailyTotal();
lima.storeName();
lima.tableTitle();
lima.hoursAndCookiesList();
lima.totalCookies();

