'use strict';

// Constructor: just a function which is just an object.
// When we go to create a new instance we will need each parameter.
function CookieStore(name, minCustomers, maxCustomers, avgCookies, hourlyCount) {
  // Refers to the one coming in from the argument for this parameter.
  this.name = name; // The name of the cookie store.
  // this.name = name || 'Unknown'; //
  this.minCustomers = minCustomers; // "this" is dynamic and "this" context will change over and over again.
  this.maxCustomers = maxCustomers; // "this" knows what it is depending on the context.
  this.avgCookies = avgCookies; // "this" gets replaced with "pikePlace" below.
  // this.hourlyCount = hourlyCount;
  // this.hourlyCount = hourlyCount || []; If not defined, will default to the falsy. Also if array not defined use empty.
  this.hourlyCount = []; // Default empty array. Here, this would be empty every time.
  this.range = maxCustomers - minCustomers; // Could use the parameters or the member properties with ths.maxCustomers...

  // Example: pikePlace = minCustomers; // when var pikePlace creates new instance.
  // Example: otherStore = minCustomers; // when var otherStore creates new instance.
  // this.someFunc = function() {} // We won't be doing this because it will break once we start doing inheritance.
}

// Correct way. Anonymous function. Will allow you to inherit later.
// Adding to the prototype this method. Works same way as contructor, we have access to all the values.
// "This" gets it's context from whatever is flowing in.
CookieStore.prototype.getAvgCookieCount = function(){
  console.log('got avg cookie count.');
  //return Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers + 1) + this.minCustomers) * this.avgCookies);
  return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
  this.avgCookies;
};

// var hourlyCookies = [50, 100, 45, 23, 7]; // This could be empty array. As it is, will result in all array values.
// var hourlyCookies = [];

// pikePlace.getAvgCookieCount(); // Calling the function.
// otherStore.getAvgCookieCount(); // Associated with the object.
// anotherStore.getAvgCookieCount();

// An instance of a cookie store. pikePlace is an instance. ToyotaYaris (all), adamsToyotaYaris (instance).
var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
pikePlace.getAvgCookieCount();
// Cookie store has parameters, numbers, order is important.
var otherStore = new CookieStore('Other Store', 100, 200, 10.0); // Important for inheritance later.

// Might even have a for loop that creates all these stores (above).
// pikePlace.avgCookies // (will give value of 6.3)

var anotherStore = new CookieStore('Downtown', 50, 500, 1600.0);

var stores = [pikePlace, otherStore, anotherStore]; // Each instance now knows everything (properties and methods).

// console.log(pikePlace.getAvgCookieCount());
// pikePlace.getAvgCookieCount()
// otherStore.getAvgCookieCount()
// console.log(pikePlace.hourlyCount([0]));

  // pikePlace
  // {
  //   minCustomers: 23,
  //   maxCustomers: 65,
  //   avgCookies: 6.3
  // }

  // otherStore
  // {
  //   minCustomers: 100,
  //   maxCustomers: 200,
  //   avgCookies: 10.0
  // }

// Populate into a simple table. Simple for loop: populate two stores into table.
var tableEl = document.createElement('table'); // tableEl = <table></table> Step 1. Create entire table.

for (var i = 0; i < stores.length; i++) {
  // stores[i] // Start: get reference to current store in relation to this loop.
  var currentStore = stores[i]; // Access each store to get it's data.
  // Think of one iteration of the loop! Pike place in this case. Helps simplify.

  var rowEl = document.createElement('tr'); // If it was 'img' it would be a self closing tag and would work.
  tableEl.appendChild(rowEl); // Get row element onto the table. Row is parent for each store.

  var nameEl = document.createElement('th'); // Name of the current store.
  nameEl.textContent = currentStore.name; // A new node element. Defining the text in the <th> tag.
  rowEl.appendChild(nameEl); // nameEl is the child.

  var minCustEl = document.createElement('td'); // Current store data.
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td'); // Current store data.
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var avgCookiesEl = document.createElement('td'); // 1. Create the element.
  avgCookiesEl.textContent = currentStore.avgCookies; // 2. Set elements, assign.
  rowEl.appendChild(avgCookiesEl); // 3. Append the child.

}

document.body.appendChild(tableEl); // Step 3.
// Create a <div>
var tableDivEl = document.getElementById('table-div');
tableDivEl.appendChild(tableEl);
// Stick with one script per HTML page for now.

/*
//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other'); // Could dynamicallky build this array var domEl = ['pike-store', ...];
var pikeEl = document.getElementById('pike-store'); // Method. Referenced from the DOM (not a copy).
// Define each store ...
var elements = [pikeEl, ...]; // HTML node. ul/li.

//simple element creation. A function declaration (not expression which would be tied to a variable.)
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, node) {
  var element = document.createElement(tagType); // Method create element. element is HTML node. Creating a new one.
  element.setAttribute(tagIdentifier, tagIdentifierName); // myCustomId. Id attribute in HTML (pike-store), can set any attribute.
  element.textContent = elementContent; // Object has a textContent property. Assign parameter. 'Hello User' assigned to node.
  // See line 26 below. Also above, all properties are functions attached to an object.
  console.log(element); // < Element node. Empty open and closed <p> tag here.
  //give child to the DOM. Everything we do goes straight to the DOM. Adding nodes happens to the DOM.
  node.appendChild(element); // property of an element, not a method because not a function(). Element will be the new child.
  // If we pass in the wrong argument (string when looking for sectionEl node), we will get a crash, see line 24.
}

// Debug with elements tab in browser. Could add 'class' in list below or any attribute.
// createElement here is a test, but will be done later in a loop.
// createElement('p', 'id', 'addedContent', 'Hello User', sectionEl); // We would call create element. Tag type parameter.
// Handing in the actual object sectionEl.
//<p> id = "myCustomId">Hello User</p> // This is the result of the createElement above.
//createElement('h1', 'class', 'heading-one', 'It lives!', divEl[0]);

// Customers per hour
function customersThisHour(MaxCustomers, minCustomers) {
  var range = MaxCustomers - minCustomers;
  return Math.floor(Math.random() * range) + minCustomers; // round down:((0-1) * range), then + at least that number of people.
  // Could create a variable with these arguments. All functions implicitly return, but if not specified it's nothing.
  console.log(); // Will never run because of return above on line 32.
}
// var customers = customersThisHour(20, 9); // Example.
// Don't put returns in for loops because it will only run once. Common to return result after for loop.

// Cookies sold this hour
// Because of hoisting if this was defined as an function expression/anonymous function equal to a variable.
// It would only be available from this point on. The variable would be available, but not the function value.
// Instead this is defined as a function declaration, declaring a function.
function cookiesSoldThisHour(customers, avgCookies) {
  return Math.floor(customers * avgCookies);
}

// // Function to populate array Data.
// function cookieSales(maxCustomers, minCustomers, avgCookies) {
//   var hourlySales = [];
//   for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
//     var customers = customersThisHour(maxCustomers, minCustomers);
//     ...
//   }
// }

// Hours of operation
var hoursOpen = ['6am,' ... '8pm'];

// Objects are made up of key-value pairs. Also creating minCustomers as a property.
var pikeStore = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalSales: 0,
  hourlySales: [],
  cookieSales: function() {
    for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    var customers = customersThisHour(this.maxCustomers, this.minCustomers);
    var sales = cookiesSoldThisHour(customers, this.avgCookies);
    this.totalSales += sales;
    console.log(this.totalSales);
    // console.log(hoursOpen[iHours]);
    createElement('li', 'class', 'hourly-sales', hoursOpen[iHours] + ': ' + sales + ' cookies.', elements[iStores]);
    this.hourlySales.push(sales);
    }
  }
};

// Stores output
var stores = [pikeStore, airportStore, centerStore, hillStore, alkiStore];
for (var iStores = 0; ) {
  stores[iStores].cookieSales();
  createElement('li,' 'class', 'store-total', ...)

}

*/

// INSTRUCTIONS
//
// Build an application that calculates daily sales projections for each location (in a file called sales.html)
// Create a pubic-facing page (in a file called index.html) that is colorful, eye-catching, readable, useful, informative... and ultimately of a quality ready for use on T-shirts, etc.
//
// Needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule.
//
// The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.
//
// Pat will need to be able to add and remove locations from the daily projections report.
//
// Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors.
//
// Pat would like to see these numbers with nice formatting in a web application.
// Pat has a logo image picked out; an illustration of a fish.
// Pat has asked you come up with all other aspects of the design for both documents, including a color scheme and a custom font, and maybe additional images, for a public-facing webpage.
//
// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
// Estimates for now.

// **** **** Begin Working Code from Monday Feb 13 **** ****
/*

var firstAndPike = {
  title: 'First and Pike',
  // name: 'First and Pike', // Used for working console.
  name: 'first-and-pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var seaTacAirport = {
  title: 'Seatac Airport',
  // name: 'Seatac Airport', // Used for working console.
  name: 'seatac-airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var seattleCenter = {
  title: 'Seattle Center',
  // name: 'Seattle Center', // Used for working console.
  name: 'seattle-center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var capitolHill = {
  title: 'Capitol Hill',
  // name: 'Capitol Hill', // Used for working console.
  name: 'capitol-hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  totalHours: 15,
  salesPerHour: [],
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var alki = {
  title: 'Alki',
  // name: 'Alki', // Used for working console.
  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  totalHours: 15,
  salesPerHour: [],
  numberOfCustomers: 0, // Used to hold the random customers result.

  // MDN. Generate a random number between min and max customer count per store.
  // Parameters: minCust, maxCust
  randomCustomers: function() {
    // Math.ceil(this.minCust);
    // Math.floor(this.maxCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  // Total number of random customers over 15 hours.
  customersPerHour: function() {
    return this.numberOfCustomers * this.totalHours;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randomCustomers() * this.avgCookieSale);
  }
};

var eachHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var eachStore = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

// Use for working console.
// var eachHour = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var eachStoreTag = ['first-and-pike', 'seatac-airport', 'seattle-center', 'capitol-hill', 'alki'];

// Loop through all the stores and create list for each.
for (var j = 0; j < eachStore.length; j++) {
  var storeHours = document.createElement('ul');
  // Loop through all the hours.
  for (var i = 0; i < eachHour.length; i++) {
    // For each store, take all cookies sold, and store in empty array.
    eachStore[j].salesPerHour.push(parseInt(eachStore[j].randomCustomers() * eachStore[j].avgCookieSale));
    // Hold list items in a variable, use that variable to enter text.
    var elementBucket = document.createElement('li');
    elementBucket.textContent = eachHour[i] + ', ' + eachStore[j].title + ', ' + eachStore[j].salesPerHour[i];
    storeHours.appendChild(elementBucket);
  }
  // Step 3. Hand to DOM
  var allTheStores = document.getElementById(eachStore[j].name);
  allTheStores.appendChild(storeHours);
}

// Problems: was store name and tag used the same property. Need store totals from working console.
// Solutions: create a new property "title" and use .title as text on line 149.

*/
// **** **** End Working Code from Monday Feb 13 **** ****

// REFERENCE ONLY.
// var userElement = document.createElement('p'); // Step 1. Create or access getElementById to change.
// userElement.setAttribute('id', 'eachStore[j]'); // Step 2. Set Elements. Assign.
// userElement.textContent = totalCookiesStore; // Dynamic from what the user enters.
// var sectionEl = document.getElementById('container');
// sectionEl.appendChild(userElement);

// // Begin working console test. Need eachHour array.

// // Shows log of each store, all cookies, and total cookies.
// for (var j = 0; j < eachStore.length; j++) {
//   var totalCookiesStore = 0;
//   console.log(eachStore[j].name);
//   for (var i = 0; i < eachHour.length; i++) {
//     eachHour[i];
//     var totalCookieHour = eachStore[j].totalCookiesHour();
//     console.log('This is for the ' + eachStore[j].name + ' store at ' + eachHour[i] + ':00 - ' + totalCookieHour);
//     totalCookiesStore += totalCookieHour;
//     // Total cookies starts at 0 + first hour + second hour ...
//   }
//   console.log('Total cookies: ' + totalCookiesStore);
// }

// *************** BEGIN DUPLICATE HTML CODE EXAMPLE *****************

// var userElement = document.createElement('h1'); // Step 1. Create or access getElementById to change.
// Created userElement = <h1></h1>

//userElement.setAttribute('id', 'first-user-heading'); // Step 2. Set Elements. Assign
// userElement = <h1 id="first-user-heading">someUserName</h1> // Whatever the user enters.

//userElement.textContent = myUser.fullName; // Dynamic from what the user enters.
// userElement = <h1 id="first-user-heading"></h1>
// HTML type. A method that is on any HTML method node.
// UserElement now has access to all. An instance with 2 arguments.
// Can set arguments with whatever you like.

// var sectionEl = document.getElementById('main-content'); // Got reference (sectionEl). List var at top of page.
// <section> id="main-content"></section>
// Give access to what I want this element's parent to be.
// HTML element node. Call element, el, or els.

// sectionEl.appendChild(userElement); // Step 3. Hand to DOM or it won't know to put on screen.
// A child of body in HTML. Gave me a box to reference here.
// Child will make a child, we could make a sibling.
// Node collection. Tell document getElementById will only return one object.
// Append child will put content at the end of the list if there is more than one <li>.

// *************** END OF HTML CODE EXAMPLE ******************

// // Object.Property/MethodName
// console.log(alki.totalCookiesHour());
// // Holds randomly generated customer value.
// alki.numberOfCustomers = alki.randomCustomers();
// // Randomly generated customers between min and max.
// console.log(alki.numberOfCustomers);
// // Outputs customer number over total hours.
// console.log(alki.customersPerHour());

// console.log(alki.randomCustomers());
// console.log(alki.doSomeMath());
// console.log(alki.avgSale);
// console.log(alki['minCust']);

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// var minHourlyCust = [];
// var maxHourlyCust = [];
// var avgCookiesPerCust = [];

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// function customerPerHour() {
//   // (number of customers in each hour) * (hours)
//   // (Range is between minCust and maxCust)
// }

// Loop through;
// push to array sales per hour parseInt(Random Customer * Avg Sale)
// 2D array of stores [i] and array of hours [j].

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
//
// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:
//
// 1st and Pike
//
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// 8pm: 29 cookies
// Total: 657 cookies

// Here are the starting numbers that you'll need to build these objects:

// Once there has been some history collected that provides more accurate numbers, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. Make sure to make each location is its own JavaScript object.

/*

*/

// END INSTRUCTIONS

// BEGIN ADAM EXAMPLE

// // var myTweets = ['asdf', 'asdf', 'asdf'];
// var userFullName = prompt('Please enter your full name.');
// var userEmail = prompt('Please enter your email');
//
// var myUser = {
//   fullName: userFullName,
//   email: userEmail,
//   login: function(){
//     console.log(this.fullName + ' has now logged in!'); // 2. Happens second. Defining, but not using yet.
//   } // This will add a function to this object. It will not call automaticlly. Or...
// };
//
// console.log('--- NEW USER ---');
//
// console.log(myUser);
// myUser.login();
//
// console.log('--- PRESENT ELEMENTS! ---');
//
// // // Alternate way.
// // var userHeadingEl = document.getElementById('first-user-heading'); // Step 1.
// // // Alternative way. Doesn't require DOM step. This way is easier, but steps aren't as clear.
// // // Will potentially enter HTML trash where not needed.
// // userHeadingEl.textContent = myUser.fullName; // Step 2.
// // // Step 3. Doesn't exist because the element already exists on the DOM in the HTML page.
//
// var userElement = document.createElement('h1'); // Step 1. Create or access getElementById to change.
//
// // Created userElement = <h1></h1>
//
// userElement.setAttribute('id', 'first-user-heading'); // Step 2. Set Elements. Assign
// // userElement = <h1 id="first-user-heading">someUserName</h1> // Whatever the user enters.
//
// userElement.textContent = myUser.fullName; // Dynamic from what the user enters.
// // userElement = <h1 id="first-user-heading"></h1>
// // HTML type. A method that is on any HTML method node.
// // UserElement now has access to all. An instance with 2 arguments.
// // Can set arguments with whatever you like.
//
// var sectionEl = document.getElementById('main-content'); // Got reference (sectionEl). List var at top of page.
// // <section> id="main-content"></section>
// // Give access to what I want this element's parent to be.
// // HTML element node. Call element, el, or els.
//
// sectionEl.appendChild(userElement); // Step 3. Hand to DOM or it won't know to put on screen.
// // A child of body in HTML. Gave me a box to reference here.
// // Child will make a child, we could make a sibling.
// // Node collection. Tell document getElementById will only return one object.
// // Append child will put content at the end of the list if there is more than one <li>.
