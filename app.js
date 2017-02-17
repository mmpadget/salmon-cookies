'use strict';

// <######## START NEW TUESDAY CODE ########>

// CookieStore Constructor and object.
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
  this.dailySales = []; // Holds hourly sales.
}

// Store Data
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

// Stores Array
var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
// Hours Array
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Array of all sales each hour during one day.
CookieStore.prototype.salesPerDay = function() {
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    this.dailySales.push(Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies));
  }
};

// Function that returns the total cookies for the store.
CookieStore.prototype.totalSalesPerDay = function() {
  // this.totalSales += sales;
  this.totalSales = 0;
  for (var i = 0; i < this.dailySales.length; i++) {
    this.totalSales += this.dailySales[i];
  }
};

// Loop through sales and total sales for each store.
for (var i = 0; i < stores.length; i++) {
  stores[i].salesPerDay();
  stores[i].totalSalesPerDay();
}

// Adding Elements: createElement(), createTextNode(), appendChild().
function renderTable(){
  var tbodyEl = document.createElement('tbody');
  tbodyEl.setAttribute('id', 'tbody-id');
  var tableParEl = document.getElementById('table-id');
  tableParEl.appendChild(tbodyEl);

  // Loop through each store.
  for (var i = 0; i < stores.length; i++) {
    // Create <tr> element, attribute id, add to parent by id.
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', 'tr-id-' + i);
    var tbodyParEl = document.getElementById('tbody-id');
    tbodyParEl.appendChild(trEl);

    // Create <th> element, attribute id, add to parent by id.
    var storeThEl = document.createElement('th');
    storeThEl.setAttribute('class', 'row-' + i);
    storeThEl.textContent = stores[i].name;
    var trParEl = document.getElementById('tr-id-' + i);
    trParEl.appendChild(storeThEl);

    // Loop through daily sales array. Set text content.
    for (var j = 0; j < stores[i].dailySales.length; j++) {
      var storeTdEl = document.createElement('td');
      storeTdEl.setAttribute('class', 'row-' + i);
      storeTdEl.textContent = stores[i].dailySales[j];
      var trParEl = document.getElementById('tr-id-' + i);
      trParEl.appendChild(storeTdEl);
    }
    // Set text content of table header.
    var totalTdEl = document.createElement('th');
    totalTdEl.setAttribute('class', 'row-' + i);
    totalTdEl.textContent = stores[i].totalSales;
    var trParEl = document.getElementById('tr-id-' + i);
    trParEl.appendChild(totalTdEl);
  }
  // Create <tfoot> element, attribute id, add to parent by id.
  var tfootEl = document.createElement('tfoot');
  tfootEl.setAttribute('id', 'tfoot-id');
  tfootEl.setAttribute('class', 'footer-row');
  var tableParEl = document.getElementById('table-id');
  tableParEl.appendChild(tfootEl);

  var totalTextTdEl = document.createElement('td');
  totalTextTdEl.setAttribute('id', 'tfoot-text-total');
  totalTextTdEl.textContent = 'Total';
  tfootEl.appendChild(totalTextTdEl);

  // hours
  for (var i = 0; i < hoursOpen.length; i++) {
    // hoursOpen[i];
    // stores
    var totalHourSales = 0;
    for (var j = 0; j < stores.length; j++) {
      totalHourSales += stores[j].dailySales[i]; // Loop through stores hourly sales.
    }
    // Create <td> element
    var totalHourTdEl = document.createElement('td');
    totalHourTdEl.setAttribute('class', 'row-' + i);
    totalHourTdEl.textContent = totalHourSales;
    tfootEl.appendChild(totalHourTdEl);
  }
}

// Populate into a simple table. Something to abstract?
function renderTableHead(){
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
}
renderTableHead();
renderTable();

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', handleSubmit);

// Append the existing instance of the table rather than creating a new one?
function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var name = event.target.cookieStoreName.value; // Better name would be storeName. New is a reserved name.
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  var genericStore = new CookieStore(name, minCustomers, maxCustomers, avgCookies);
  stores.push(genericStore);

  genericStore.salesPerDay();
  genericStore.totalSalesPerDay();
  var grabFooterId = document.getElementById('tfoot-id'); // Fixes footer row duplication after submit event.
  grabFooterId.remove();
  var grabTableId = document.getElementById('tbody-id'); // Fixes table duplication after submit event.
  grabTableId.remove(); // removing body then re-render with updated array data.
  renderTable(); // Take this out of the event. It's causing duplication.
  // By making into a method we can take it out. Each time we'll render a row instead of the whole table.
}

// <######## WORKING WED RENDER TABLE CODE ########>
/*
// Adding Elements: createElement(), createTextNode(), appendChild().
function renderTable(){
  var tbodyEl = document.createElement('tbody');
  tbodyEl.setAttribute('id', 'tbody-id');
  var tableParEl = document.getElementById('table-id');
  tableParEl.appendChild(tbodyEl);

  // Loop through each store.
  for (var i = 0; i < stores.length; i++) {
    // Create <tr> element, attribute id, add to parent by id.
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', 'tr-id-' + i);
    var tbodyParEl = document.getElementById('tbody-id');
    tbodyParEl.appendChild(trEl);

    // Create <th> element, attribute id, add to parent by id.
    var storeThEl = document.createElement('th');
    storeThEl.setAttribute('class', 'row-' + i);
    storeThEl.textContent = stores[i].name;
    var trParEl = document.getElementById('tr-id-' + i);
    trParEl.appendChild(storeThEl);

    // Loop through daily sales array.
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
}
*/
// <######## END WORKING WED RENDER TABLE CODE ########>

// <######## WORKING WED TABLE HEAD CODE ########>
/*
// Populate into a simple table. Something to abstract?
function renderTableHead(){
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
}
renderTableHead();

// <######## WORKING WED TABLE HEAD CODE ########>
*/
