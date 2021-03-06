let INITIAL_STATE = false
export const counterReducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 5;
    case "DECREMENT":
      return state - 5;
    default:
      return state;
  }
};

export default counterReducer;