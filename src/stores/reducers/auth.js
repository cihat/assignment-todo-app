import { AuthTypes } from "../types/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? false,
};

const auth = (state = initialState.user, action) => {
  console.log(action);
  switch (action.type) {
    case AuthTypes.LOGIN:
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };

    case AuthTypes.LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        user: false,
      };

    default:
      return state;
  }
};

export default auth;
