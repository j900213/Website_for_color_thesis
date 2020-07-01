// DOM Selector
const target = document.querySelectorAll(".magic-box");

// Event Listener
for (let i = 0; i < target.length; i++) {
  // Add bg when hovering
  target[i].addEventListener("mouseenter", function () {
    target[i].parentNode.classList.add("bgcolor");
    switch (i + 1) {
      case 1:
        target[i].parentNode.classList.add("bgcolor-1");
        break;
      case 2:
        target[i].parentNode.classList.add("bgcolor-2");
        break;
      case 3:
        target[i].parentNode.classList.add("bgcolor-3");
        break;
      case 4:
        target[i].parentNode.classList.add("bgcolor-4");
        break;
      default:
        break;
    }
  });

  // Add fade out animation when mouse out
  target[i].addEventListener("mouseleave", function () {
    setTimeout(function () {
      target[i].parentNode.classList.remove("bgcolor");
      switch (i + 1) {
        case 1:
          target[i].parentNode.classList.remove("bgcolor-1");
          break;
        case 2:
          target[i].parentNode.classList.remove("bgcolor-2");
          break;
        case 3:
          target[i].parentNode.classList.remove("bgcolor-3");
          break;
        case 4:
          target[i].parentNode.classList.remove("bgcolor-4");
          break;
        default:
          break;
      }
    }, 2300);
  });
}
