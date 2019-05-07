// Root Reducer
import * as types from "../actions/ActionTypes";

const initialState = {
  counters: [
    {
      color: "black",
      number: 0
    }
  ]
};

function counter(state = initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case type.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case type.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };
    default:
      return state;
  }
}

export default counter;
