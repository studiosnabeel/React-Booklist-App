const ADD_BOOK = 'book-store/books/ADD_BOOk';
const REMOVE_BOOK = 'book-store/book/REMOVE_BOOK';

const books = [];

const BookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.book);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  id: bookId,
});

export default BookReducer;
