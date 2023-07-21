import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click",onClickGallery);
setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));

function onClickGallery(evt) {
 evt.preventDefault();
 if (evt.target.node.Name !== "IMG"){
     return ;
 }
 openBigImages(evt.target.dataset.source)
}