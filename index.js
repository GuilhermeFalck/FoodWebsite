const menuItemImages = document.querySelectorAll(".menu-item");
const heroImage = document.querySelector(".hero-img");

menuItemImages.forEach((menuItemImage) => {
  menuItemImage.addEventListener("click", () => {
    if (!menuItemImage.classList.contains("active")) {
      const clickedImageSrc = menuItemImage.getAttribute("src");
      menuItemImages.forEach((item) => item.classList.remove("active"));
      menuItemImage.classList.add("active");
      heroImage.classList.remove("hidden");
      setTimeout(() => {
        heroImage.setAttribute("src", clickedImageSrc);
      }, 500);
    }
  });
});

heroImage.addEventListener("click", () => {
  heroImage.classList.add("hidden");
  menuItemImages.forEach((item) => item.classList.remove("active"));
});

const menuItems = document.querySelectorAll(".menu--items img");
const heroImg = document.querySelector(".hero-img");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    heroImg.src = item.src;
  });
});
