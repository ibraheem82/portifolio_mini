/**
 * =============== FILTERS TABS ===============
 *
 * @format
 */

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tc => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");
  });
});

// const tabs = document.querySelectorAll("[data-target]");
// const tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach(tc => {
//       tc.classList.remove("filters__active");

//     });
//     target.classList.add("filters__active");

//   });
// });

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
