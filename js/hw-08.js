import galleryItems from "./gallery-items.js";

// =================== handleGalleryClick
const handleGalleryClick = function(event) {
  const target = event.target;
  const current = event.currentTarget;
  const lightBox = document.querySelector(".lightbox");
  event.preventDefault();

  if (
    current.classList.contains(gallery.className) &&
    target.classList.contains("gallery__image")
  ) {
    event.stopPropagation();

    const lightBoxImage = document.querySelector(".lightbox___image");
    lightBoxImage.src = target.dataset.source;
    lightBoxImage.alt = target.alt;

    lightBox.classList.add("is-open");
  }
};

// =================== handleModal
const handleModal = function(event) {
  if (event.type === "keydown" && event.code !== "Escape") {
    return;
  }

  if (event.target.classList.contains("lightbox___image")) {
    event.stopPropagation();
    return;
  }

  event.preventDefault();

  const lightBoxImage = document.querySelector(".lightbox___image");
  lightBoxImage.src = "";
  lightBoxImage.alt = "";

  const lightBox = document.querySelector(".lightbox");
  lightBox.classList.remove("is-open");
};

// get Objects from DOM to add listeners
const overlay = document.querySelector(".lightbox");
overlay.addEventListener("click", handleModal);

const buttonCloseModal = document.querySelector(".lightbox__button");
buttonCloseModal.addEventListener("click", handleModal);

window.addEventListener("keydown", handleModal);

// get Object UL from DOM to insert items & add listeners
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", handleGalleryClick);

for (const galleryItem of galleryItems) {
  const galleryListItem = document.createElement("li"); // creating LI
  galleryListItem.classList.add("gallery__item"); // setting up CSS classes for LI

  const galleryListLink = document.createElement("a"); // creating A
  galleryListLink.classList.add("gallery__link"); // setting up CSS classes for A
  galleryListLink.href = galleryItem.original;

  const galleryListImg = document.createElement("img"); // creating IMG
  galleryListImg.classList.add("gallery__image"); // setting up CSS classes for IMG
  galleryListImg.src = galleryItem.preview;
  galleryListImg.dataset.source = galleryItem.original;
  galleryListImg.alt = galleryItem.description;

  const galleryListIcon = document.createElement("span"); // creating ICON (of span)
  galleryListIcon.classList.add("gallery__icon"); // setting up CSS classes for ICON (of span)

  const galleryListIconMaterial = document.createElement("i"); // creating MATERIAL ICON (of i)
  galleryListIconMaterial.classList.add("material-icons"); // setting up CSS classes for MATERIAL ICON (of i)
  galleryListIconMaterial.textContent = "zoom_out_map";

  gallery.appendChild(galleryListItem); // adding LI to UL
  galleryListItem.appendChild(galleryListLink); // adding A to LI
  galleryListLink.appendChild(galleryListImg); // adding IMG to A
  galleryListLink.appendChild(galleryListIcon); // adding ICON (of span) to A
  galleryListIcon.appendChild(galleryListIconMaterial); // adding MATERIAL ICON (of i) to ICON (of span)
}
