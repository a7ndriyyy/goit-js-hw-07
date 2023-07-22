import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const setGalleryHtml = galleryElCreateMarkup(galleryItems);

function galleryElCreateMarkup(galleryItems){
    return galleryItems
    .map(({ preview,original,description}) => {
       return `<li class = "gallery__item">
              <a class ="gallery__link",
              <img
              class ="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
              </a>
       </li>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML('beforeend', setGalleryHtml);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);