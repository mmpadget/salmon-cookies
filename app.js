'use strict';

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
  randomCustomers: function(/*minCust, maxCust*/) {
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
