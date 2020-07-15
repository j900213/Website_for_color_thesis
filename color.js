/*--- DOM Selector ---*/
// Items for mouse Animation
const innerCursor = document.querySelector(".cursor--small");
let clientX = -100;
let clientY = -100;

// Items for link Hovering
const links = document.querySelectorAll("a");
let colorSaved;
let borderSaved;

// Items for button hovering effect
const sortButtons = document.querySelectorAll(".sort-buttons div button");
const sortName = document.querySelector(".sort-alphabetic button");
const sortOrigin = document.querySelector(".sort-origin button");
const sortNumber = document.querySelector(".sort-number button");
const sortNone = document.querySelector(".sort-none button");

// Mobile Navigation

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

/*--- Sort Button Hovering Effect ---*/
sortButtons.forEach((sortButton) => {
  sortButton.classList.add("sort-button-deactive");
  sortButton.addEventListener("mouseover", () => {
    sortButton.parentNode.childNodes[3].style.display = `block`;
  });

  sortButton.addEventListener("mouseleave", () => {
    sortButton.parentNode.childNodes[3].style.display = `none`;
  });

  sortButton.addEventListener("click", () => {
    sortButtons.forEach((sortButton) => {
      sortButton.classList.add("sort-button-deactive");
      sortButton.classList.remove("sort-button-active");
    });
    sortButton.classList.add("sort-button-active");
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

/*--- Isotope Sorting ---*/
// Global selection
// <main>
const globalMain = document.querySelector("main");
// <color section (main)>
const colorMainSection = document.querySelector(".color-section");
// The number of color-item-wrapper
const itemNum = colorMainSection.children[0].children.length;
// Sort buttons' wrapper
let sortButtonsWrapper = document.querySelector(".sort-buttons");
// Blank color item wrapper
const colorNone = document.querySelectorAll(".color-none-wrapper");
// Aplhabet wrapper
const alphaIndex = document.querySelectorAll(".alphabet-index");

// Make clone sections for categorization
const techSection = colorMainSection.cloneNode(true);
const mineralSection = colorMainSection.cloneNode(true);
const objectSection = colorMainSection.cloneNode(true);
const plantSection = colorMainSection.cloneNode(true);

// Add classes for iso item selector
techSection.children[0].classList.add("color-grid-wrapper-tech");
mineralSection.children[0].classList.add("color-grid-wrapper-mineral");
objectSection.children[0].classList.add("color-grid-wrapper-object");
plantSection.children[0].classList.add("color-grid-wrapper-plant");

for (let i = 0; i < itemNum; i++) {
  colorMainSection.children[0].children[i].classList.add("animal-part");
  techSection.children[0].children[i].classList.add("tech-part");
  mineralSection.children[0].children[i].classList.add("mineral-part");
  objectSection.children[0].children[i].classList.add("object-part");
  plantSection.children[0].children[i].classList.add("plant-part");
}

// Make category name divs
const categoryDivAnimal = document.querySelector(".category-wrapper");
const categoryDivTech = categoryDivAnimal.cloneNode(true);
const categoryDivMineral = categoryDivAnimal.cloneNode(true);
const categoryDivObject = categoryDivAnimal.cloneNode(true);
const categoryDivPlant = categoryDivAnimal.cloneNode(true);

// Add classes to category title
categoryDivAnimal.classList.add("category-animal");
categoryDivTech.classList.add("category-tech");
categoryDivMineral.classList.add("category-mineral");
categoryDivObject.classList.add("category-object");
categoryDivPlant.classList.add("category-plant");

// Change the title HTML
categoryDivTech.children[0].innerHTML = "Dye Technique";
categoryDivMineral.children[0].innerHTML = "Mineral";
categoryDivObject.children[0].innerHTML = "Objects";
categoryDivPlant.children[0].innerHTML = "Nature";

// Initial hiding
globalMain.style.display = `none`;

// Append clone sections and ttiles tp the main
globalMain.appendChild(categoryDivTech);
globalMain.appendChild(techSection);
globalMain.appendChild(categoryDivMineral);
globalMain.appendChild(mineralSection);
globalMain.appendChild(categoryDivObject);
globalMain.appendChild(objectSection);
globalMain.appendChild(categoryDivPlant);
globalMain.appendChild(plantSection);

// Initial view height
if (!screenWidth.matches) {
  globalMain.style.maxHeight = `100vh`;
}

// Initialize clone sections and titles as deactive
categoryDivAnimal.classList.add("deactive-part");
categoryDivTech.classList.add("deactive-part");
categoryDivMineral.classList.add("deactive-part");
categoryDivObject.classList.add("deactive-part");
categoryDivPlant.classList.add("deactive-part");
techSection.classList.add("deactive-part");
mineralSection.classList.add("deactive-part");
objectSection.classList.add("deactive-part");
plantSection.classList.add("deactive-part");

// Isotope Objects
let isoAnimal = new Isotope(".color-grid-wrapper", {
  percentPosition: true,
  transitionDuration: "2s",
  itemSelector: ".animal-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoTech = new Isotope(".color-grid-wrapper-tech", {
  percentPosition: true,
  transitionDuration: "2s",
  itemSelector: ".tech-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoMineral = new Isotope(".color-grid-wrapper-mineral", {
  percentPosition: true,
  transitionDuration: "2s",
  itemSelector: ".mineral-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoObject = new Isotope(".color-grid-wrapper-object", {
  percentPosition: true,
  transitionDuration: "2s",
  itemSelector: ".object-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoPlant = new Isotope(".color-grid-wrapper-plant", {
  percentPosition: true,
  transitionDuration: "2s",
  itemSelector: ".plant-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

// Show the body
globalMain.style.display = `block`;

// Select specific items for animations
const techItems = document.querySelectorAll(
  ".color-grid-wrapper-tech .technique"
);
const mineralItems = document.querySelectorAll(
  ".color-grid-wrapper-mineral .mineral"
);

// Select text part, don't display them when floating
const colorBlock = document.querySelectorAll(".animal-part .color-block");
const colorNum = document.querySelectorAll(".animal-part .color-number");
const colorName = document.querySelectorAll(
  ".animal-part:not(.alphabet-index) .color-name"
);
const colorChinese = document.querySelectorAll(".animal-part .color-chinese");

// Filter specific items out (preprocess)
isoTech.arrange({ filter: ".technique" });
isoMineral.arrange({ filter: ".mineral" });
isoObject.arrange({ filter: ".objects" });
isoPlant.arrange({ filter: ".plants" });

// Check if sort origin is previously active
let originFlag = false;

sortButtons.forEach((sortButton) => {
  sortButton.addEventListener("click", () => {
    if (sortButton.parentNode.classList.contains("sort-origin")) {
      // Set the global height to default
      globalMain.style.maxHeight = `100%`;

      // Display Name and Number
      displayNameNum(colorName, colorChinese);

      // Filter Animal out
      isoAnimal.arrange({ sortBy: "number" });
      isoAnimal.arrange({ filter: ".animal" });

      categoryDivAnimal.classList.remove("deactive-part");
      categoryDivTech.classList.remove("deactive-part");
      categoryDivMineral.classList.remove("deactive-part");
      categoryDivObject.classList.remove("deactive-part");
      categoryDivPlant.classList.remove("deactive-part");
      techSection.classList.remove("deactive-part");
      mineralSection.classList.remove("deactive-part");
      objectSection.classList.remove("deactive-part");
      plantSection.classList.remove("deactive-part");

      techItems[0].classList.add("active-item-1");
      techItems[1].classList.add("active-item-2");
      techItems[2].classList.add("active-item-3");
      techItems[3].classList.add("active-item-4");
      techItems[4].classList.add("active-item-5");
      techItems[5].classList.add("active-item-6");
      techItems[6].classList.add("active-item-7");
      techItems[7].classList.add("active-item-8");
      techItems[8].classList.add("active-item-9");
      techItems[9].classList.add("active-item-10");
      techItems[10].classList.add("active-item-11");
      techItems[11].classList.add("active-item-12");
      techItems[12].classList.add("active-item-13");
      techItems[13].classList.add("active-item-14");
      techItems[14].classList.add("active-item-15");
      techItems[15].classList.add("active-item-16");
      techItems[16].classList.add("active-item-17");
      techItems[17].classList.add("active-item-18");

      mineralItems[0].classList.add("active-item-19");
      mineralItems[1].classList.add("active-item-20");
      mineralItems[2].classList.add("active-item-21");
      mineralItems[3].classList.add("active-item-22");

      // Mark the origin flag as true
      originFlag = true;

      setTimeout(function () {
        techItems[0].classList.remove("active-item-1");
        techItems[1].classList.remove("active-item-2");
        techItems[2].classList.remove("active-item-3");
        techItems[3].classList.remove("active-item-4");
        techItems[4].classList.remove("active-item-5");
        techItems[5].classList.remove("active-item-6");
        techItems[6].classList.remove("active-item-7");
        techItems[7].classList.remove("active-item-8");
        techItems[8].classList.remove("active-item-9");
        techItems[9].classList.remove("active-item-10");
        techItems[10].classList.remove("active-item-11");
        techItems[11].classList.remove("active-item-12");
        techItems[12].classList.remove("active-item-13");
        techItems[13].classList.remove("active-item-14");
        techItems[14].classList.remove("active-item-15");
        techItems[15].classList.remove("active-item-16");
        techItems[16].classList.remove("active-item-17");
        techItems[17].classList.remove("active-item-18");

        mineralItems[0].classList.remove("active-item-19");
        mineralItems[1].classList.remove("active-item-20");
        mineralItems[2].classList.remove("active-item-21");
        mineralItems[3].classList.remove("active-item-22");
      }, 2000);

      objectSection.classList.add("active-part");
      plantSection.classList.add("active-part");
    } else if (sortButton.parentNode.classList.contains("sort-none")) {
      globalMain.style.maxHeight = `100vh`;

      // Hide name and number
      hideNameNum(colorName, colorChinese);

      // Hide the extra sections
      categoryDivAnimal.classList.add("deactive-part");
      categoryDivTech.classList.add("deactive-part");
      categoryDivMineral.classList.add("deactive-part");
      categoryDivObject.classList.add("deactive-part");
      categoryDivPlant.classList.add("deactive-part");
      techSection.classList.add("deactive-part");
      mineralSection.classList.add("deactive-part");
      objectSection.classList.add("deactive-part");
      plantSection.classList.add("deactive-part");

      objectSection.classList.remove("active-part");
      plantSection.classList.remove("active-part");

      // Filter all the items
      if (originFlag) {
        // Compromised solution when the previous state is Origin
        originFlag = false;
        isoAnimal.arrange({ filter: ".color-item-wrapper" });
        colorNone.forEach((item) => {
          item.style.display = `none`;
        });
        alphaIndex.forEach((item) => {
          item.style.display = `none`;
        });
        setTimeout(function () {
          cloudAnimation();
        }, 2050);
      } else {
        // When the previous state is Name or Number
        originFlag = false;
        colorNone.forEach((item) => {
          item.style.display = `none`;
        });
        alphaIndex.forEach((item) => {
          item.style.display = `none`;
        });
        cloudAnimation();
      }
    } else {
      originFlag = false;

      // Display Name and Number
      displayNameNum(colorName, colorChinese);

      // Set the global height to default
      globalMain.style.maxHeight = `100%`;

      // Get the sort Value
      const sortValue = event.target.getAttribute("data-sort-value");

      // Hide the extra sections
      categoryDivAnimal.classList.add("deactive-part");
      categoryDivTech.classList.add("deactive-part");
      categoryDivMineral.classList.add("deactive-part");
      categoryDivObject.classList.add("deactive-part");
      categoryDivPlant.classList.add("deactive-part");
      techSection.classList.add("deactive-part");
      mineralSection.classList.add("deactive-part");
      objectSection.classList.add("deactive-part");
      plantSection.classList.add("deactive-part");

      objectSection.classList.remove("active-part");
      plantSection.classList.remove("active-part");

      // Filter all the items
      isoAnimal.arrange({ filter: ".color-item-wrapper" });

      // Blank Items for numerical sorting
      if (sortValue === "number") {
        console.log("hitNum");
        colorNone.forEach((item) => {
          item.style.display = `block`;
        });
      } else {
        colorNone.forEach((item) => {
          item.style.display = `none`;
        });
      }

      // Alphabet Blocks for alphabetic sorting
      if (sortValue === "name") {
        console.log("hitName");
        alphaIndex.forEach((item) => {
          item.style.display = `block`;
        });
      } else {
        alphaIndex.forEach((item) => {
          item.style.display = `none`;
        });
      }
      //isoAnimal.arrange({ filter: ".color-item-wrapper" });
      isoAnimal.arrange({ sortBy: sortValue });
    }
  });
});

/*---  Div floating animation ---*/
// Hide the name initially

function displayNameNum(colorName, colorChinese) {
  colorName.forEach((name) => {
    name.style.display = `block`;
  });

  colorChinese.forEach((chinese) => {
    chinese.style.display = `block`;
  });
}

function hideNameNum(colorName, colorChinese) {
  colorName.forEach((name) => {
    name.style.display = `none`;
  });

  colorChinese.forEach((chinese) => {
    chinese.style.display = `none`;
  });
}

// Zindex setting to prevent overlapping
let i = 10;
colorNum.forEach((number) => {
  number.style.zIndex = `${i}`;
  i++;
});

i = 9;
colorBlock.forEach((block) => {
  block.style.zIndex = `${i}`;
  i++;
});

// Select floating items
const floatingItems = document.querySelectorAll(
  ".color-item-wrapper.animal-part"
);

// Let divs start from the center
colorMainSection.classList.remove("deactive-part");

/*--- Apperance initilazation (Cloud)---*/
// Clound activated
if (!screenWidth.matches) {
  sortNone.classList.add("sort-button-active");
  hideNameNum(colorName, colorChinese);
} else {
  sortNumber.classList.add("sort-button-active");
}

// Initial floating
let flag = true;

console.log(screenWidth);
if (flag && !screenWidth.matches) {
  floatingItems.forEach((item) => {
    item.style.left = `43vw`;
    item.style.top = `35vh`;
  });
  cloudAnimation();
  flag = false;
} else {
  // Responsive version (No cloud)
  isoAnimal.arrange({ sortBy: "number" });
}

function makeNewPosition($container) {
  // Get viewport dimensions (remove the dimension of the div)
  $container = $(window);
  var h = $container.height() - 170;
  var w = $container.width() - 250;

  console.log($container.height());

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  // When cloud is not clicked
  $(".sort-alphabetic button").click(function () {
    $target.stop();
  });

  $(".sort-number button").click(function () {
    $target.stop();
  });

  $(".sort-origin button").click(function () {
    $target.stop();
  });

  $target.animate(
    {
      top: newq[0],
      left: newq[1],
    },
    speed,
    function () {
      //requestAnimationFrame(animateDiv($target));
      animateDiv($target);
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.05;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}

function cloudAnimation() {
  animateDiv($(".color-item-1.animal-part"));
  animateDiv($(".color-item-2.animal-part"));
  animateDiv($(".color-item-3.animal-part"));
  animateDiv($(".color-item-4.animal-part"));
  animateDiv($(".color-item-5.animal-part"));
  animateDiv($(".color-item-6.animal-part"));
  animateDiv($(".color-item-7.animal-part"));
  animateDiv($(".color-item-8.animal-part"));
  animateDiv($(".color-item-9.animal-part"));
  animateDiv($(".color-item-10.animal-part"));
  setTimeout(function () {
    animateDiv($(".color-item-11.animal-part"));
    animateDiv($(".color-item-12.animal-part"));
    animateDiv($(".color-item-14.animal-part"));
    animateDiv($(".color-item-15.animal-part"));
    animateDiv($(".color-item-16.animal-part"));
    animateDiv($(".color-item-17.animal-part"));
    animateDiv($(".color-item-18.animal-part"));
    animateDiv($(".color-item-19.animal-part"));
    animateDiv($(".color-item-21.animal-part"));
    animateDiv($(".color-item-22.animal-part"));
    animateDiv($(".color-item-23.animal-part"));
    animateDiv($(".color-item-24.animal-part"));
    animateDiv($(".color-item-25.animal-part"));
    animateDiv($(".color-item-27.animal-part"));
    animateDiv($(".color-item-29.animal-part"));
    animateDiv($(".color-item-31.animal-part"));
    animateDiv($(".color-item-32.animal-part"));
    animateDiv($(".color-item-33.animal-part"));
    animateDiv($(".color-item-35.animal-part"));
    animateDiv($(".color-item-36.animal-part"));
  }, 80);
  setTimeout(function () {
    animateDiv($(".color-item-37.animal-part"));
    animateDiv($(".color-item-38.animal-part"));
    animateDiv($(".color-item-40.animal-part"));
    animateDiv($(".color-item-41.animal-part"));
    animateDiv($(".color-item-42.animal-part"));
    animateDiv($(".color-item-43.animal-part"));
    animateDiv($(".color-item-44.animal-part"));
    animateDiv($(".color-item-46.animal-part"));
    animateDiv($(".color-item-47.animal-part"));
    animateDiv($(".color-item-48.animal-part"));
    animateDiv($(".color-item-49.animal-part"));
    animateDiv($(".color-item-53.animal-part"));
    animateDiv($(".color-item-54.animal-part"));
    animateDiv($(".color-item-55.animal-part"));
    animateDiv($(".color-item-56.animal-part"));
    animateDiv($(".color-item-58.animal-part"));
    animateDiv($(".color-item-60.animal-part"));
    animateDiv($(".color-item-61.animal-part"));
    animateDiv($(".color-item-62.animal-part"));
    animateDiv($(".color-item-63.animal-part"));
    animateDiv($(".color-item-66.animal-part"));
    animateDiv($(".color-item-68.animal-part"));
  }, 160);
  setTimeout(function () {
    animateDiv($(".color-item-70.animal-part"));
    animateDiv($(".color-item-72.animal-part"));
    animateDiv($(".color-item-73.animal-part"));
    animateDiv($(".color-item-74.animal-part"));
    animateDiv($(".color-item-75.animal-part"));
    animateDiv($(".color-item-76.animal-part"));
    animateDiv($(".color-item-77.animal-part"));
    animateDiv($(".color-item-79.animal-part"));
    animateDiv($(".color-item-80.animal-part"));
    animateDiv($(".color-item-81.animal-part"));
    animateDiv($(".color-item-82.animal-part"));
    animateDiv($(".color-item-84.animal-part"));
    animateDiv($(".color-item-85.animal-part"));
    animateDiv($(".color-item-86.animal-part"));
    animateDiv($(".color-item-88.animal-part"));
    animateDiv($(".color-item-89.animal-part"));
    animateDiv($(".color-item-91.animal-part"));
    animateDiv($(".color-item-94.animal-part"));
    animateDiv($(".color-item-95.animal-part"));
    animateDiv($(".color-item-96.animal-part"));
    animateDiv($(".color-item-97.animal-part"));
    animateDiv($(".color-item-98.animal-part"));
    animateDiv($(".color-item-99.animal-part"));
    animateDiv($(".color-item-100.animal-part"));
  }, 240);

  setTimeout(function () {
    animateDiv($(".color-item-101.animal-part"));
    animateDiv($(".color-item-102.animal-part"));
    animateDiv($(".color-item-103.animal-part"));
    animateDiv($(".color-item-106.animal-part"));
    animateDiv($(".color-item-107.animal-part"));
    animateDiv($(".color-item-108.animal-part"));
    animateDiv($(".color-item-109.animal-part"));
    animateDiv($(".color-item-110.animal-part"));
    animateDiv($(".color-item-111.animal-part"));
    animateDiv($(".color-item-117.animal-part"));
    animateDiv($(".color-item-121.animal-part"));
    animateDiv($(".color-item-122.animal-part"));
    animateDiv($(".color-item-123.animal-part"));
    animateDiv($(".color-item-126.animal-part"));
    animateDiv($(".color-item-127.animal-part"));
    animateDiv($(".color-item-128.animal-part"));
    animateDiv($(".color-item-129.animal-part"));
    animateDiv($(".color-item-130.animal-part"));
    animateDiv($(".color-item-131.animal-part"));
    animateDiv($(".color-item-132.animal-part"));
    animateDiv($(".color-item-133.animal-part"));
    animateDiv($(".color-item-134.animal-part"));
    animateDiv($(".color-item-135.animal-part"));
  }, 320);

  setTimeout(function () {
    animateDiv($(".color-item-136.animal-part"));
    animateDiv($(".color-item-137.animal-part"));
    animateDiv($(".color-item-138.animal-part"));
    animateDiv($(".color-item-139.animal-part"));
    animateDiv($(".color-item-140.animal-part"));
    animateDiv($(".color-item-142.animal-part"));
    animateDiv($(".color-item-143.animal-part"));
    animateDiv($(".color-item-144.animal-part"));
    animateDiv($(".color-item-145.animal-part"));
    animateDiv($(".color-item-146.animal-part"));
    animateDiv($(".color-item-147.animal-part"));
    animateDiv($(".color-item-149.animal-part"));
    animateDiv($(".color-item-150.animal-part"));
    animateDiv($(".color-item-151.animal-part"));
    animateDiv($(".color-item-152.animal-part"));
    animateDiv($(".color-item-153.animal-part"));
    animateDiv($(".color-item-154.animal-part"));
    animateDiv($(".color-item-155.animal-part"));
    animateDiv($(".color-item-156.animal-part"));
    animateDiv($(".color-item-157.animal-part"));
    animateDiv($(".color-item-158.animal-part"));
    animateDiv($(".color-item-159.animal-part"));
    animateDiv($(".color-item-161.animal-part"));
    animateDiv($(".color-item-162.animal-part"));
    animateDiv($(".color-item-163.animal-part"));
    animateDiv($(".color-item-164.animal-part"));
    animateDiv($(".color-item-165.animal-part"));
    animateDiv($(".color-item-166.animal-part"));
    animateDiv($(".color-item-167.animal-part"));
    animateDiv($(".color-item-168.animal-part"));
    animateDiv($(".color-item-169.animal-part"));
    animateDiv($(".color-item-170.animal-part"));
    animateDiv($(".color-item-171.animal-part"));
    animateDiv($(".color-item-172.animal-part"));
    animateDiv($(".color-item-173.animal-part"));
  }, 400);

  setTimeout(function () {
    animateDiv($(".color-item-174.animal-part"));
    animateDiv($(".color-item-175.animal-part"));
    animateDiv($(".color-item-176.animal-part"));
    animateDiv($(".color-item-177.animal-part"));
    animateDiv($(".color-item-178.animal-part"));
    animateDiv($(".color-item-179.animal-part"));
    animateDiv($(".color-item-180.animal-part"));
    animateDiv($(".color-item-181.animal-part"));
    animateDiv($(".color-item-182.animal-part"));
    animateDiv($(".color-item-183.animal-part"));
    animateDiv($(".color-item-185.animal-part"));
    animateDiv($(".color-item-186.animal-part"));
    animateDiv($(".color-item-187.animal-part"));
    animateDiv($(".color-item-188.animal-part"));
    animateDiv($(".color-item-189.animal-part"));
    animateDiv($(".color-item-190.animal-part"));
    animateDiv($(".color-item-191.animal-part"));
    animateDiv($(".color-item-192.animal-part"));
    animateDiv($(".color-item-193.animal-part"));
    animateDiv($(".color-item-195.animal-part"));
    animateDiv($(".color-item-196.animal-part"));
    animateDiv($(".color-item-197.animal-part"));
    animateDiv($(".color-item-198.animal-part"));
    animateDiv($(".color-item-202.animal-part"));
    animateDiv($(".color-item-233.animal-part"));
    animateDiv($(".color-item-234.animal-part"));
    animateDiv($(".color-item-235.animal-part"));
    animateDiv($(".color-item-248.animal-part"));
    animateDiv($(".color-item-249.animal-part"));
    animateDiv($(".color-item-250.animal-part"));
  }, 480);
}
