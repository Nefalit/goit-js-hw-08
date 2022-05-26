// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function renderGallaryList(array) {
  const listImgMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', listImgMarkup);
}

renderGallaryList(galleryItems);


let lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
  fadeSpeed: 500,
});

console.log(galleryItems);