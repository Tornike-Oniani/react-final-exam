import { combineReducers } from 'redux';

import categoryReducer from '../features/categories/categoriesSlice';
import difficultyReducer from '../features/difficulties/difficultySlice';
import testReducer from '../features/test/testSlice';

const rootReducer = combineReducers({
  difficulties: difficultyReducer,
  categories: categoryReducer,
  test: testReducer,
});

export default rootReducer;
