import FetchRequest from '../helpers/fetchRequest';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const ENDPOINTS = {
  appid: '/apps/OWIAI2UT08iVlMpDrWBq',
  books: '/books/',
};

export const getExistingBooks = async () => {
  const fetchRequest = new FetchRequest({
    url: BASE_URL + ENDPOINTS.appid + ENDPOINTS.books,
  });

  const data = await fetchRequest.call();

  const books = Object.keys(data).map((key) => ({
    id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
    progress: Math.floor(Math.random() * 101),
  }));

  return books;
};

export const addNewBook = async ({
  id, title, author, category,
}) => {
  const fetchRequest = new FetchRequest({
    url: BASE_URL + ENDPOINTS.appid + ENDPOINTS.books,
    method: 'POST',
    body: {
      item_id: id,
      title,
      author,
      category,
    },
  });

  await fetchRequest.call();
};

export const removeBookFromAPI = async (id) => {
  const fetchRequest = new FetchRequest({
    url: BASE_URL + ENDPOINTS.appid + ENDPOINTS.books + id,
    method: 'DELETE',
  });

  await fetchRequest.call();
};
