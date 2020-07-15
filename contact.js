/*--- DOM Selector ---*/
// Items for mouse Animation
const innerCursor = document.querySelector(".cursor--small");
let clientX = -100;
let clientY = -100;

// Items for link Hovering
const links = document.querySelectorAll("a");
let colorSaved;
let borderSaved;

// Responsive width
const mobileList = document.querySelector(".mobile-list");
let screenWidth = window.matchMedia("(max-width: 548px)");

/*--- Cursor Initilazation ---*/
const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  //window.addEventListener("mousemove", initCursor);

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

/*--- Mobile Dropdown ---*/
let indicator = false;
$(".mobile-title-link-wrapper").click(function () {
  $(".mobile-list").slideToggle("slow");
  mobileList.style.display = `flex`;
  setTimeout(function () {
    indicator = true;
  }, 50);
  indicator = false;
});

$("body:not(mobile-title-link-wrapper)").click(function () {
  if (indicator) {
    $(".mobile-list").slideUp("slow");
    indicator = false;
  }
});
