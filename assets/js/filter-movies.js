document.addEventListener("DOMContentLoaded", () => {
  const navTabs = document.getElementById("upcomingAndReleasedMoviesTabs");
  const tabButtons = navTabs.querySelectorAll(".nav-link");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Create and append the slider
  const slider = document.createElement("div");
  slider.classList.add("tab-slider");
  navTabs.appendChild(slider);

  const moveSlider = (activeBtn) => {
    const rect = activeBtn.getBoundingClientRect();
    const parentRect = navTabs.getBoundingClientRect();
    slider.style.width = `${rect.width}px`;
    slider.style.left = `${rect.left - parentRect.left}px`;
  };

  const filterGallery = (category) => {
    galleryItems.forEach((item) => {
      const match = category === "All" || item.dataset.category === category;

      if (match) {
        item.classList.remove("hide");
        item.style.display = "block";

        // Reflow trick
        void item.offsetWidth;

        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      } else {
        item.classList.add("hide");
        item.style.opacity = "0";
        item.style.transform = "scale(0.85)";

        // Hide after transition
        setTimeout(() => {
          item.style.display = "none";
        }, 500); // Match transition duration
      }
    });
  };

  const activeInitial = navTabs.querySelector(".nav-link.active");
  if (activeInitial) {
    moveSlider(activeInitial);
    filterGallery(activeInitial.textContent.trim());
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      moveSlider(this);
      filterGallery(this.textContent.trim());
    });
  });

  window.addEventListener("resize", () => {
    const currentActive = navTabs.querySelector(".nav-link.active");
    if (currentActive) moveSlider(currentActive);
  });
});
