import axios from 'axios';

const initialState = {
  status: 'idle',
  entities: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'categories/categoriesLoading':
      return {
        ...state,
        status: 'loading',
      };
    case 'categories/categoriesLoaded':
      return {
        entities: [{ id: null, name: 'Any' }, ...action.payload],
        status: 'idle',
      };
    default:
      return state;
  }
}

export const questionsLoading = () => ({
  type: 'categories/categoriesLoading',
});

export const fetchCategories = () => async (dispatch, getState) => {
  dispatch(questionsLoading());
  const response = await axios.get('https://opentdb.com/api_category.php');
  dispatch({
    type: 'categories/categoriesLoaded',
    payload: response.data.trivia_categories,
  });
};
