const initialState = [];

export default function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case 'results/resultAdded':
      return [...state, action.payload];
    default:
      return state;
  }
}

export const addResult = (date, time, score) => {
  return {
    type: 'results/resultAdded',
    payload: {
      date,
      time,
      score,
    },
  };
};
