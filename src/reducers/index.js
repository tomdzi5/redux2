import { combineReducers } from 'redux';
import BooksReducer from './reduce_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
