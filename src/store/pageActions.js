const initialState = {
  lang: "en",
};

export const pageActions = (state = initialState, action) => {
  console.log(typeof(action.value))
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
       ...state,
        lang: action.value,
      };
    default:
      return state;
  }
};
