import { fetchGallery } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/loader.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');
let simpleLightbox;

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
      position: 'center',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  fetchGallery(query)
    .then(data => {
      loader.classList.add('hidden');
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
        return;
      }
      renderGallery(data.hits);
      simpleLightbox = new SimpleLightbox('.gallery a');
      simpleLightbox.refresh();
    })
    .catch(error => {
      loader.classList.add('hidden');
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'center',
      });
    });
}
