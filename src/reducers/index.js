import { combineReducers } from 'redux';

import BookList from './reducer_book_list';



const rootReducer = combineReducers({
  bookList: BookList
});

export default rootReducer;
