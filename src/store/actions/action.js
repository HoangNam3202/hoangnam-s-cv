export const increment = (text) => {
    return {
      type: "INCREMENT",
      payload: text,
    };
  };
  export const decrement = (text) => {
    return {
      type: "DECREMENT",
      payload: text,
    };
  };