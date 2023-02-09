import axios from 'axios';

const initialState = [];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'categories/categoriesLoaded':
      return action.payload;
    default:
      return state;
  }
}

export const fetchCategories = () => async (dispatch, getState) => {
  const response = await axios.get('https://opentdb.com/api_category.php');
  dispatch({
    type: 'categories/categoriesLoaded',
    payload: response.data.trivia_categories,
  });
};
