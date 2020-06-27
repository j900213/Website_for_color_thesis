// DOM Selector
const target = document.querySelectorAll(".magic-box");

// Event Listener
for (let i = 0; i < target.length; i++) {
  // Add bg when hovering
  target[i].addEventListener("mouseenter", function () {
    target[i].classList.remove("magic-fade");
    target[i].classList.add("magic-show");
    switch (i + 1) {
      case 1:
        target[i].classList.add("bgcolor-1");
        break;
      case 2:
        target[i].classList.add("bgcolor-2");
        break;
      case 3:
        target[i].classList.add("bgcolor-3");
        break;
      case 4:
        target[i].classList.add("bgcolor-4");
        break;
      default:
        break;
    }
  });

  // Add fade out animation when mouse out
  target[i].addEventListener("mouseleave", function () {
    target[i].classList.add("magic-fade");
    target[i].classList.remove("magic-show");
  });
}
