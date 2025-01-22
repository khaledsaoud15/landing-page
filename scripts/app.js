function toggleAccordion(index) {
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
}
