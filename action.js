const innerCursor = document.querySelector(".cursor--small");
const target = document.querySelectorAll(".magic-box");
const links = document.querySelectorAll("a");
let clientX = -100;
let clientY = -100;
let colorSaved;
let borderSaved;

/*--- Cursor Initilazation ---*/
const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  window.addEventListener("mousemove", initCursor);

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.top = `${clientY}px`;
    innerCursor.style.left = `${clientX}px`;
    //innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

/*--- Link Hovering ---*/
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    colorSaved = innerCursor.style.backgroundColor;
    innerCursor.style.background = `none`;
    innerCursor.style.borderColor = colorSaved;
    innerCursor.classList.add("cursor--active");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("cursor--active");
    innerCursor.style.background = `${colorSaved}`;
  });
});

/*--- Magic Fireworks ---*/
for (let i = 0; i < target.length; i++) {
  // Add bg when hovering
  target[i].addEventListener("mouseenter", function () {
    target[i].parentNode.classList.add("bgcolor");
    switch (i + 1) {
      case 1:
        target[i].parentNode.classList.add("bgcolor-1");
        innerCursor.style.background = `#0c4842`;
        break;
      case 2:
        target[i].parentNode.classList.add("bgcolor-2");
        innerCursor.style.background = `#32a5b7`;
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
