import { configureStore } from '@redux.js/toolkit';
import BookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: BookReducer,
    categories: categoriesReducer,
  },
});

export default store;
