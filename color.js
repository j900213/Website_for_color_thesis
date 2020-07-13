const innerCursor = document.querySelector(".cursor--small");
let clientX = -100;
let clientY = -100;

const links = document.querySelectorAll("a");
let colorSaved;
let borderSaved;

const sortButtons = document.querySelectorAll(".sort-buttons div button");

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
categoryDivTech.children[0].innerHTML = "Dye and extract technique";
categoryDivMineral.children[0].innerHTML = "Mineral";
categoryDivObject.children[0].innerHTML = "Objects and languages";
categoryDivPlant.children[0].innerHTML =
  "Plants / Flowers / Trees / Leefs / Grains";

// Append clone sections and ttiles tp the main
globalMain.appendChild(categoryDivTech);
globalMain.appendChild(techSection);
globalMain.appendChild(categoryDivMineral);
globalMain.appendChild(mineralSection);
globalMain.appendChild(categoryDivObject);
globalMain.appendChild(objectSection);
globalMain.appendChild(categoryDivPlant);
globalMain.appendChild(plantSection);

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
  itemSelector: ".animal-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoTech = new Isotope(".color-grid-wrapper-tech", {
  itemSelector: ".tech-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoMineral = new Isotope(".color-grid-wrapper-mineral", {
  itemSelector: ".mineral-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

console.log(colorMainSection.style.height);

let isoObject = new Isotope(".color-grid-wrapper-object", {
  itemSelector: ".object-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

let isoPlant = new Isotope(".color-grid-wrapper-plant", {
  itemSelector: ".plant-part",
  layoutMode: "fitRows",
  getSortData: {
    name: ".color-name",
    number: ".color-number parseInt",
    category: "[data-category]",
  },
});

// Filter specific items out (preprocess)
isoTech.arrange({ filter: ".technique" });
isoMineral.arrange({ filter: ".mineral" });
isoObject.arrange({ filter: ".objects" });
isoPlant.arrange({ filter: ".plants" });

sortButtons.forEach((sortButton) => {
  sortButton.addEventListener("click", () => {
    if (sortButton.parentNode.classList.contains("sort-origin")) {
      // Filter Animal out
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

      techSection.classList.add("active-part");
      mineralSection.classList.add("active-part");
      objectSection.classList.add("active-part");
      plantSection.classList.add("active-part");
    } else {
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

      techSection.classList.remove("active-part");
      mineralSection.classList.remove("active-part");
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
