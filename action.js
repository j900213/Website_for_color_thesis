const innerCursor = document.querySelector(".cursor--small");
const target = document.querySelectorAll(".magic-box");
const links = document.querySelectorAll("a");
const abstractSec = document.querySelector(".abstract-section");
const titleStatic = document.querySelector(".main-static");
const titleSticky = document.querySelector(".main-sticky");

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

// /*--- Link Hovering ---*/
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

/*--- Navigation Background ---*/
function navBgChange() {
  const abstractPos = abstractSec.getBoundingClientRect().top;
  console.log(abstractPos);
  if (abstractPos > 0) {
    titleStatic.style.display = `flex`;
    titleSticky.style.display = `none`;
  } else {
    titleStatic.style.display = `none`;
    titleSticky.style.display = `flex`;
  }
}

/*--- Magic Fireworks ---*/
for (let i = 0; i < target.length; i++) {
  // Add bg when hovering
  target[i].addEventListener("mouseenter", function () {
    target[i].parentNode.classList.add("bgcolor");
    target[i].parentNode.style.zIndex = `10`;
    switch (i + 1) {
      case 1:
        target[i].parentNode.classList.add("bgcolor-1");
        innerCursor.style.background = `#81c7d4`;
        break;
      case 2:
        target[i].parentNode.classList.add("bgcolor-2");
        innerCursor.style.background = `#fedfe1`;
        break;
      case 3:
        target[i].parentNode.classList.add("bgcolor-3");
        innerCursor.style.background = `#b5495b`;
        break;
      case 4:
        target[i].parentNode.classList.add("bgcolor-4");
        innerCursor.style.background = `#954a45`;
        break;
      case 5:
        target[i].parentNode.classList.add("bgcolor-5");
        innerCursor.style.background = `#e83015`;
        break;
      case 6:
        target[i].parentNode.classList.add("bgcolor-6");
        innerCursor.style.background = `#f4a7b9`;
        break;
      case 7:
        target[i].parentNode.classList.add("bgcolor-7");
        innerCursor.style.background = `#f19483`;
        break;
      case 8:
        target[i].parentNode.classList.add("bgcolor-8");
        innerCursor.style.background = `#8e354a`;
        break;
      case 9:
        target[i].parentNode.classList.add("bgcolor-9");
        innerCursor.style.background = `#cb4042`;
        break;
      case 10:
        target[i].parentNode.classList.add("bgcolor-10");
        innerCursor.style.background = `#f7d94c`;
        break;
      case 11:
        target[i].parentNode.classList.add("bgcolor-11");
        innerCursor.style.background = `#86a697`;
        break;
      case 12:
        target[i].parentNode.classList.add("bgcolor-12");
        innerCursor.style.background = `#58b2dc`;
        break;
      case 13:
        target[i].parentNode.classList.add("bgcolor-13");
        innerCursor.style.background = `#a5dee4`;
        break;
      case 14:
        target[i].parentNode.classList.add("bgcolor-14");
        innerCursor.style.background = `#006284`;
        break;
      case 15:
        target[i].parentNode.classList.add("bgcolor-15");
        innerCursor.style.background = `#81c7d4`;
        break;
      case 16:
        target[i].parentNode.classList.add("bgcolor-16");
        innerCursor.style.background = `#33a6b8`;
        break;
      case 17:
        target[i].parentNode.classList.add("bgcolor-17");
        innerCursor.style.background = `#66bab7`;
        break;
      case 18:
        target[i].parentNode.classList.add("bgcolor-18");
        innerCursor.style.background = `#1e88a8`;
        break;
      case 19:
        target[i].parentNode.classList.add("bgcolor-19");
        innerCursor.style.background = `#3a8fb7`;
        break;
      case 20:
        target[i].parentNode.classList.add("bgcolor-20");
        innerCursor.style.background = `#2ea9df`;
        break;
      case 21:
        target[i].parentNode.classList.add("bgcolor-21");
        innerCursor.style.background = `#7db9de`;
        break;
      case 22:
        target[i].parentNode.classList.add("bgcolor-22");
        innerCursor.style.background = `#005caf`;
        break;
      case 23:
        target[i].parentNode.classList.add("bgcolor-23");
        innerCursor.style.background = `#51a8dd`;
        break;
      case 24:
        target[i].parentNode.classList.add("bgcolor-24");
        innerCursor.style.background = `#080808`;
        break;
      case 25:
        target[i].parentNode.classList.add("bgcolor-25");
        innerCursor.style.background = `#1c1c1c`;
        break;
      case 26:
        target[i].parentNode.classList.add("bgcolor-26");
        innerCursor.style.background = `#0c0c0c`;
        break;
      case 27:
        target[i].parentNode.classList.add("bgcolor-27");
        innerCursor.style.background = `#bdc0ba`;
        break;
      case 28:
        target[i].parentNode.classList.add("bgcolor-28");
        innerCursor.style.background = `#fcfaf2`;
        break;
      case 29:
        target[i].parentNode.classList.add("bgcolor-29");
        innerCursor.style.background = `#fffffb`;
        break;
      default:
        break;
    }
  });

  // Add fade out animation when mouse out
  target[i].addEventListener("mouseleave", function () {
    setTimeout(function () {
      target[i].parentNode.classList.remove("bgcolor");
      target[i].parentNode.style.zIndex = `1`;
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
        case 5:
          target[i].parentNode.classList.remove("bgcolor-5");
          break;
        case 6:
          target[i].parentNode.classList.remove("bgcolor-6");
          break;
        case 7:
          target[i].parentNode.classList.remove("bgcolor-7");
          break;
        case 8:
          target[i].parentNode.classList.remove("bgcolor-8");
          break;
        case 9:
          target[i].parentNode.classList.remove("bgcolor-9");
          break;
        case 10:
          target[i].parentNode.classList.remove("bgcolor-10");
          break;
        case 11:
          target[i].parentNode.classList.remove("bgcolor-11");
          break;
        case 12:
          target[i].parentNode.classList.remove("bgcolor-12");
          break;
        case 13:
          target[i].parentNode.classList.remove("bgcolor-13");
          break;
        case 14:
          target[i].parentNode.classList.remove("bgcolor-14");
          break;
        case 15:
          target[i].parentNode.classList.remove("bgcolor-15");
          break;
        case 16:
          target[i].parentNode.classList.remove("bgcolor-16");
          break;
        case 17:
          target[i].parentNode.classList.remove("bgcolor-17");
          break;
        case 18:
          target[i].parentNode.classList.remove("bgcolor-18");
          break;
        case 19:
          target[i].parentNode.classList.remove("bgcolor-19");
          break;
        case 20:
          target[i].parentNode.classList.remove("bgcolor-20");
          break;
        case 21:
          target[i].parentNode.classList.remove("bgcolor-21");
          break;
        case 22:
          target[i].parentNode.classList.remove("bgcolor-22");
          break;
        case 23:
          target[i].parentNode.classList.remove("bgcolor-23");
          break;
        case 24:
          target[i].parentNode.classList.remove("bgcolor-24");
          break;
        case 25:
          target[i].parentNode.classList.remove("bgcolor-25");
          break;
        case 26:
          target[i].parentNode.classList.remove("bgcolor-26");
          break;
        case 27:
          target[i].parentNode.classList.remove("bgcolor-27");
          break;
        case 28:
          target[i].parentNode.classList.remove("bgcolor-28");
          break;
        case 29:
          target[i].parentNode.classList.remove("bgcolor-29");
          break;
        default:
          break;
      }
    }, 2300);
  });
}

initCursor();
window.addEventListener("scroll", navBgChange);
