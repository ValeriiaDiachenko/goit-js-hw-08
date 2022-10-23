import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector(".gallery");
const galleryMarkup = renderGalleryMarkup(galleryItems);
galleryBoxRef.insertAdjacentHTML('beforeend', galleryMarkup);

function renderGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
};

 new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionPosition: 'bottom',
    captionsData:'alt',
     captionDelay: 250,
 });
    