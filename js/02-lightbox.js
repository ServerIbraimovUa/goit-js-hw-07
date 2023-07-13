import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.addEventListener("click", onClickGalleryItem);

setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  download: "Download",
});

function onClickGalleryItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

function galleryElCreateMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
}
function setGalleryHtml(position, gallery) {
  galleryList.insertAdjacentHTML(position, gallery);
}
