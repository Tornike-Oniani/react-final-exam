import axios from 'axios';

const initialState = {
  status: 'idle',
  selectedDifficulty: 'Any',
  selectedCategory: 'Any',
  questions: [],
  result: {
    time: 0,
    score: 0,
  },
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case 'test/testInitialized':
      return {
        ...state,
        questions: [],
        result: {
          ...state.result,
          time: 0,
          score: 0,
        },
      };
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
    case 'test/resultSet':
      return {
        ...state,
        result: {
          ...state.result,
          time: action.payload.time,
          score: action.payload.score,
        },
      };
    default:
      return state;
  }
}

export const initializeTest = () => {
  return {
    type: 'test/testInitialized',
  };
};

export const setOptions = (difficulty, categoryId) => {
  return {
    type: 'test/optionsSet',
    payload: {
      difficulty: difficulty,
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

  // Handle 'Any' difficult and category
  let queryParams = '';
  if (
    selectedDifficulty ||
    selectedCategory ||
    selectedDifficulty !== 'Any' ||
    selectedCategory !== 'Any'
  ) {
    if (selectedDifficulty && selectedDifficulty !== 'Any') {
      queryParams += `difficulty=${selectedDifficulty.toLowerCase()}`;
      // If we have both difficulty and category add '&' in between
      if (selectedCategory && selectedCategory !== 'Any') {
        queryParams += '&';
      }
    }
    if (selectedCategory && selectedCategory !== 'Any') {
      queryParams += `category=${selectedCategory}`;
    }
  }

  const response = await axios.get(
    `https://opentdb.com/api.php?${queryParams}&amount=10&`
  );
  const questions = response.data.results.map((question) => {
    return {
      category: question.category,
      difficulty: question.difficulty,
      question: question.question,
      correctAnswer: question.correct_answer,
      answers: shuffleArray([
        question.correct_answer,
        ...question.incorrect_answers,
      ]),
    };
  });
  dispatch({ type: 'test/questionsLoaded', payload: questions });
};

export const setResult = (time, score) => {
  return {
    type: 'test/resultSet',
    payload: {
      time,
      score,
    },
  };
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
