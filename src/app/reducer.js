import { combineReducers } from 'redux';

import categoryReducer from '../features/categories/categoriesSlice';
import difficultyReducer from '../features/difficulties/difficultySlice';

const rootReducer = combineReducers({
  difficulties: difficultyReducer,
  categories: categoryReducer,
});

export default rootReducer;
