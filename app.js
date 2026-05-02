// TechBlog - Main Script
// Author: Student Lab Project
// Purpose: Frontend interactivity for TechBlog website

console.log("TechBlog loaded successfully");

// ========== NAVIGATION ==========

var links = document.querySelectorAll("nav a");
var currentPage = window.location.pathname;

for (var i = 0; i < links.length; i++) {
  if (links[i].href.indexOf(currentPage) !== -1) {
    links[i].style.borderBottom = "2px solid #f39c12";
  }
}

// ========== PAGE TITLE LOGGER ==========

var pageTitle = document.querySelector("h1");
if (pageTitle != null) {
  console.log("Page title is: " + pageTitle.innerHTML);
} else {
  console.log("No title found on this page");
}

// ========== CARD COUNTER ==========

var cards = document.getElementsByClassName("card");
var count = 0;
for (var j = 0; j < cards.length; j++) {
  count = count + 1;
}
console.log("Number of cards on page: " + count);

// ========== UNUSED VARIABLES (code smells for SonarQube) ==========

var unusedVar = "this variable is never used";
var anotherUnused = 42;
var yetAnotherUnused = true;

// ========== FOOTER YEAR ==========

var footer = document.querySelector("footer p");
if (footer != null) {
  var year = new Date().getFullYear();
  footer.innerHTML = "&copy; " + year + " TechBlog. Built for Software Construction & Development Lab.";
} else {
  console.log("Footer not found");
}

// ========== CARD HOVER EFFECT ==========

var allCards = document.querySelectorAll(".card");
for (var k = 0; k < allCards.length; k++) {
  allCards[k].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.02)";
    this.style.transition = "transform 0.2s";
  });
  allCards[k].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  });
}

// ========== SEARCH PLACEHOLDER ==========

function searchPosts(query) {
  var results = [];
  var cardTitles = document.querySelectorAll(".card h2");
  for (var m = 0; m < cardTitles.length; m++) {
    if (cardTitles[m].innerHTML.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      results.push(cardTitles[m].innerHTML);
    }
  }
  return results;
}

// ========== DUPLICATE CODE BLOCK (intentional for SonarQube) ==========

function getCardCount() {
  var cardList = document.getElementsByClassName("card");
  var total = 0;
  for (var n = 0; n < cardList.length; n++) {
    total = total + 1;
  }
  console.log("Total cards: " + total);
  return total;
}

function getNavCount() {
  var navList = document.getElementsByClassName("card");
  var total = 0;
  for (var p = 0; p < navList.length; p++) {
    total = total + 1;
  }
  console.log("Total nav: " + total);
  return total;
}

// ========== CONSOLE SUMMARY ==========

console.log("Script finished loading");
console.log("Page: " + window.location.href);
console.log("Cards found: " + count);
