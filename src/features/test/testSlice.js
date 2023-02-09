import axios from 'axios';

const initialState = {
  status: 'idle',
  selectedDifficulty: 'Any',
  selectedCategory: 'Any',
  questions: [],
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case 'test/optionsSet':
      return {
        ...state,
        selectedDifficulty: action.payload.difficulty,
        selectedCategory: action.payload.categoryId,
      };
    case 'test/questionsLoading':
      return {
        ...state,
        status: 'loading',
      };
    case 'test/questionsLoaded':
      return {
        ...state,
        status: 'idle',
        questions: action.payload,
      };
    default:
      return state;
  }
}

export const setOptions = (difficulty, categoryId) => {
  return {
    type: 'test/optionsSet',
    payload: {
      difficulty: difficulty.toLowerCase(),
      categoryId,
    },
  };
};

export const questionsLoading = () => ({
  type: 'test/questionsLoading',
});

export const fetchQuestions = () => async (dispatch, getState) => {
  dispatch(questionsLoading());
  const { selectedDifficulty, selectedCategory } = getState().test;
  const response = await axios.get(
    `https://opentdb.com/api.php?difficulty=${selectedDifficulty}&category=${selectedCategory}&amount=10&`
  );
  const questions = response.data.results;
  dispatch({ type: 'test/questionsLoaded', payload: questions });
};
