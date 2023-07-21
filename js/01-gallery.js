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
 openFullImages(evt.target.dataset.source);
}

function galleryElCreateMarkup(galleryItems){
    return galleryItems
    .map(({ preview,original,description}) => {
       return `<li class = "gallery-li">
              <a class ="gallery-link",
              <img
              class ="gallery-img"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
              </a>
       </li>`;
    })
    .join("");
}