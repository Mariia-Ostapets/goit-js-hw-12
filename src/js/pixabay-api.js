const API_KEY = '45077635-6eb8c9a3980485254b901d63b';
const URL = 'https://pixabay.com/api/';

export function fetchGallery(query, page = 1, perPage = 9) {
  return fetch(
    `${URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
