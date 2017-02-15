'use strict';

// <######## START NEW TUESDAY CODE ########>

function CookieStore(name, minCustomers, maxCustomers, avgCookies, hourlyCount, customers, sales, totalSales) {
  this.name = name; // The name of the cookie store.
  this.minCustomers = minCustomers; // "this" is dynamic and "this" context will change over and over again.
  this.maxCustomers = maxCustomers; // "this" knows what it is depending on the context.
  this.avgCookies = avgCookies; // "this" gets replaced with "pikePlace" below.
  //this.hourlyCount = []; // Default empty array. Here, this would be empty every time.
  this.range = maxCustomers - minCustomers;
  //this.customers = customers;
  //this.sales = sales;
  this.totalSales = 0;
  this.dailySales = [];
}

// Adam's example works for one table.
// CookieStore.prototype.getAvgCookieCount = function(){
//   console.log('got avg cookie count.');
//   return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
//   this.avgCookies;
// };

// 1. Randomize customer data: customers.
// 2. Determine cookies per hour: cookies.
// 3. Loop through each hour for each store

// Hours of operation
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Goal 1: array of all sales each hour during one day.
CookieStore.prototype.salesPerDay = function() {
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    this.dailySales.push(Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies));
  }
};

// Goal 2: function that returns the total cookies for the store.
CookieStore.prototype.totalSalesPerDay = function() {
  // this.totalSales += sales;
  this.totalSales = 0;
  for (var i = 0; i < this.dailySales.length; i++) {
    this.totalSales += this.dailySales[i];
  }
};

// Order is ('name', minCustomers, maxCustomers, avgCookies, hourlyCount);
var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
// firstAndPike.salesPerDay();
// firstAndPike.totalSalesPerDay();
// console.log(firstAndPike.totalSales);
var seaTacAirport = new CookieStore('Seatac Airport', 3, 24, 1.2);
// firstAndPike.getAvgCookieCount();
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 2.3);
// firstAndPike.getAvgCookieCount();
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// firstAndPike.getAvgCookieCount();
var alki = new CookieStore('Alki', 2, 16, 4.6);
// firstAndPike.getAvgCookieCount();

var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for (var i = 0; i < stores.length; i++) {
  stores[i].salesPerDay();
  stores[i].totalSalesPerDay();
}
// Goal 3:
// Start with this: For loop ... this.dailySales = []; ... turned into <td> element.
// Create heading and footer seperately. Each store needs <thead><th><td><td> <th><td><td> <th><td><td><tfoot>

// --> Send to DOM / HTML.

// Populate into a simple table. Simple for loop: populate two stores into table.

//make <table id="table-id"> ------------------>
var tableEl = document.createElement('table'); // tableEl
tableEl.setAttribute('id', 'table-id');
var tableDivEl = document.getElementById('table-div');
tableDivEl.appendChild(tableEl);

//make <thead id="thead-id"> ---------------------->
var theadEl = document.createElement('thead'); // tableEl
theadEl.setAttribute('id', 'thead-id');
var tableParEl = document.getElementById('table-id');
tableParEl.appendChild(theadEl);

//make <tr id="head-tr-id" -------------->
var headTrEl = document.createElement('tr');
headTrEl.setAttribute('id', 'head-tr-id');
var theadParEl = document.getElementById('thead-id');
tableParEl.appendChild(headTrEl);

//make <th class=""----------------->
var emptyThEl = document.createElement('th');
emptyThEl.setAttribute('class', 'header-row');
var headTrParEl = document.getElementById('head-tr-id');
tableParEl.appendChild(emptyThEl);

for (var i = 0; i <= hoursOpen.length; i++) {
  var thEl = document.createElement('th');
  thEl.setAttribute('class', 'header-row');
  thEl.textContent = hoursOpen[i];
  var headTrParEl = document.getElementById('head-tr-id');
  tableParEl.appendChild(thEl);
}

var totalsThEl = document.createElement('th');
totalsThEl.setAttribute('class', 'header-row');
thEl.textContent = 'Daily Totals';
var headTrParEl = document.getElementById('head-tr-id');
tableParEl.appendChild(totalsThEl);

var tbodyEl = document.createElement('tbody');
tbodyEl.setAttribute('id', 'tbody-id');
var tableParEl = document.getElementById('table-id');
tableParEl.appendChild(tbodyEl);

for (var i = 0; i < stores.length; i++) {
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'tr-id-' + i);
  var tbodyParEl = document.getElementById('tbody-id');
  tbodyParEl.appendChild(trEl);

  var storeThEl = document.createElement('th');
  storeThEl.setAttribute('class', 'row-' + i);
  storeThEl.textContent = stores[i].name;
  var trParEl = document.getElementById('tr-id-' + i);
  trParEl.appendChild(storeThEl);

  for (var j = 0; j < stores[i].dailySales.length; j++) {
    var storeTdEl = document.createElement('td');
    storeTdEl.setAttribute('class', 'row-' + i);
    storeTdEl.textContent = stores[i].dailySales[j];
    var trParEl = document.getElementById('tr-id-' + i);
    trParEl.appendChild(storeTdEl);
  }
  var totalTdEl = document.createElement('th');
  totalTdEl.setAttribute('class', 'row-' + i);
  totalTdEl.textContent = stores[i].totalSales;
  var trParEl = document.getElementById('tr-id-' + i);
  trParEl.appendChild(totalTdEl);
}
// for (var i = 0; i < stores.length; i++) {
//   // stores[i] // Start: get reference to current store in relation to this loop.
//   var currentStore = stores[i]; // Access each store to get it's data.
//
//   var rowEl = document.createElement('tr'); // If it was 'img' it would be a self closing tag and would work.
//   tableEl.appendChild(rowEl); // Get row element onto the table. Row is parent for each store.
//
//   var nameEl = document.createElement('th'); // Name of the current store.
//   nameEl.textContent = currentStore.name; // A new node element. Defining the text in the <th> tag.
//   rowEl.appendChild(nameEl); // nameEl is the child.
//
//   var minCustEl = document.createElement('td'); // Current store data.
//   minCustEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td'); // Current store data.
//   maxCustEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td'); // 1. Create the element.
//   avgCookiesEl.textContent = currentStore.avgCookies; // 2. Set elements, assign.
//   rowEl.appendChild(avgCookiesEl); // 3. Append the child.
//
// }

var storeFormEl = document.getElementById('new-store-form');

// The actual node and the target.
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var name = event.target.cookieStoreName.value; // Better name would be storeName. New is a reserved name.
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value); // Format float to interger.
  var avgCookies = parseInt(event.target.avgCookies.value); // Format float to interger.

 // store is only available within the scope of this function.
 // makes available for array.
  stores.push(store);

 // console.log(newStoreName);
 // console.log(minCustomers);
 // console.log(maxCustomers);
 // console.log(avgCookies);
 // console.log('User Pressed submit Button on Form!');

 // Showing we have a new cookie store with all properties.
  var store = new CookieStore(name, minCustomers, maxCustomers, avgCookies);
 // console.log(store);
  console.log();
}
