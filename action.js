// DOM Selector
const targetblue = document.querySelector(".magic-btn-blue");
const targetbrown = document.querySelector(".magic-btn-brown");

// Event Listener
targetblue.addEventListener("mouseenter", function () {
  targetblue.classList.remove("magic-fade-blue");
  targetblue.classList.add("magic-show-blue");
});

targetblue.addEventListener("mouseleave", function () {
  targetblue.classList.remove("magic-show-blue");
  targetblue.classList.add("magic-fade-blue");
});

targetbrown.addEventListener("mouseenter", function () {
  targetbrown.classList.remove("magic-fade-brown");
  targetbrown.classList.add("magic-show-brown");
});

targetbrown.addEventListener("mouseleave", function () {
  targetbrown.classList.remove("magic-show-brown");
  targetbrown.classList.add("magic-fade-brown");
});
