const hamburger = document.querySelector("#habmurger");
const menue = document.querySelector("#menue");

let isMenuOpen = false;

hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menue.classList.toggle("left-0", isMenuOpen);
  menue.classList.toggle("-left-full", !isMenuOpen);
});

const toggleAccordion = (index) => {
  const allItems = document.querySelectorAll(".accordion-item");
  const currentItem = allItems[index];
  const content = currentItem.querySelector(".accordion-content");
  const button = currentItem.querySelector("button");

  if (content.classList.contains("hidden")) {
    // Close all items
    allItems.forEach((item) => {
      item.querySelector(".accordion-content").classList.add("hidden");
      item.querySelector("button").textContent = "+";
      item.classList.remove("bg-saltygreen");
      item.classList.add("bg-gray-200");
    });

    // Open the selected item
    content.classList.remove("hidden");
    button.textContent = "−";
    currentItem.classList.add("bg-saltygreen");
    currentItem.classList.remove("bg-gray-200");
  } else {
    content.classList.add("hidden");
    button.textContent = "+";
    currentItem.classList.remove("bg-saltygreen");
    currentItem.classList.add("bg-gray-200");
  }
};

const swiper = new Swiper(".swiper", {
  slidesPerView: 2.5,
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    duration: 1000,
    disableOnInteraction: true,
  },
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
  },
});
