'use strict';
// Object literals. Domain modelling articles. Taking project and breaking into pieces.

// var myTweets = ['asdf', 'asdf', 'asdf'];
var userFullName = prompt('Please enter your full name.');
var userEmail = prompt('Please enter your email');

var myUser = {
  fullName: userFullName,
  email: userEmail,
  login: function(){
    console.log(this.fullName + ' has now logged in!'); // 2. Happens second. Defining, but not using yet.
  } // This will add a function to this object. It will not call automaticlly. Or...
};

console.log('--- NEW USER ---');

console.log(myUser);
myUser.login();

console.log('--- PRESENT ELEMENTS! ---');

// // Alternate way.
// var userHeadingEl = document.getElementById('first-user-heading'); // Step 1.
// // Alternative way. Doesn't require DOM step. This way is easier, but steps aren't as clear.
// // Will potentially enter HTML trash where not needed.
// userHeadingEl.textContent = myUser.fullName; // Step 2.
// // Step 3. Doesn't exist because the element already exists on the DOM in the HTML page.

var userElement = document.createElement('h1'); // Step 1. Create or access getElementById to change.

// Created userElement = <h1></h1>

userElement.setAttribute('id', 'first-user-heading'); // Step 2. Set Elements. Assign
// userElement = <h1 id="first-user-heading">someUserName</h1> // Whatever the user enters.

userElement.textContent = myUser.fullName; // Dynamic from what the user enters.
// userElement = <h1 id="first-user-heading"></h1>
// HTML type. A method that is on any HTML method node.
// UserElement now has access to all. An instance with 2 arguments.
// Can set arguments with whatever you like.

var sectionEl = document.getElementById('main-content'); // Got reference (sectionEl). List var at top of page.
// <section> id="main-content"></section>
// Give access to what I want this element's parent to be.
// HTML element node. Call element, el, or els.

sectionEl.appendChild(userElement); // Step 3. Hand to DOM or it won't know to put on screen.
// A child of body in HTML. Gave me a box to reference here.
// Child will make a child, we could make a sibling.
// Node collection. Tell document getElementById will only return one object.
// Append child will put content at the end of the list if there is more than one <li>.
