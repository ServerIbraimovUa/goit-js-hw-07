import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.addEventListener("click", onClickGalleryItem);

setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));
function onClickGalleryItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  openBigImag(e.target.dataset.source);
}

function galleryElCreateMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
             <a class="gallery__link" href="">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}
function setGalleryHtml(place, gallery) {
  galleryList.insertAdjacentHTML(place, gallery);
}

function openBigImag(target) {
  const instance = basicLightbox.create(`
    <img src="${target}" width="800" height="600">
`);
  instance.show();
  console.dir(instance);
  galleryList.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
