const initialState = [
  {
    id: 0,
    name: 'Any',
  },
  {
    id: 1,
    name: 'Easy',
  },
  {
    id: 2,
    name: 'Medium',
  },
  {
    id: 3,
    name: 'Hard',
  },
];

export default function difficultyReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
