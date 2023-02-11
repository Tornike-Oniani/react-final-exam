import { combineReducers } from 'redux';

import categoryReducer from '../features/categories/categoriesSlice';
import difficultyReducer from '../features/difficulties/difficultySlice';
import testReducer from '../features/test/testSlice';
import resultsReducer from '../features/results/resultsSlice';

const rootReducer = combineReducers({
  difficulties: difficultyReducer,
  categories: categoryReducer,
  test: testReducer,
  results: resultsReducer,
});

export default rootReducer;
