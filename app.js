// TechBlog - Main Script

// Display welcome message in console
console.log("TechBlog loaded successfully");

// Highlight active nav link based on current page
var links = document.querySelectorAll("nav a");
var currentPage = window.location.pathname;

for (var i = 0; i < links.length; i++) {
  if (links[i].href.indexOf(currentPage) !== -1) {
    links[i].style.borderBottom = "2px solid #f39c12";
  }
}

// Show alert when page loads
var pageTitle = document.querySelector("h1");
if (pageTitle != null) {
  console.log("Page title is: " + pageTitle.innerHTML);
}

// Unused variable (intentional - SonarQube will detect this as a code smell)
var unusedVar = "this variable is never used";

// Count cards on page
var cards = document.getElementsByClassName("card");
var count = 0;
for (var j = 0; j < cards.length; j++) {
  count = count + 1;
}
console.log("Number of cards: " + count);