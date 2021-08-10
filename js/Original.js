'use strict';

console.log('Hello');

Store.prototype.render = function(){
  const storeTable = document.getElementById('storeProfiles');

  let article = document.createElement('article');
  storeTable.appendChild(article);

  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  article.appendChild(tdName);
  
  for (let i=0; i<this.hourlyCookies.length; i++){
    let td = document.createElement('td');
    td.textContent = this.hourlyCookies[i];
    article.appendChild(td);
  }
};



let seattle = {

  totalCookies:function(){
    let total = document.createElement('p');
    total.textContent = `Total Cookies Sold : ${this.dailyTotal()}`;
    articleSeattle.appendChild(total);
  }
};

// Render function to call all of these. Currently chillin under Seattle.

seattle.randomCustomersPerHour();
seattle.cookiesPerHour();
seattle.dailyTotal();
seattle.storeName();
seattle.tableTitle();
seattle.hoursAndCookiesList();
seattle.totalCookies();
