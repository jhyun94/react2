import { combineReducers } from 'redux';

import BookList from './reducer_book_list';
import ActiveBook from './reducer_active_book';



const rootReducer = combineReducers({
  bookList: BookList,
  activeBook: ActiveBook
});

export default rootReducer;
