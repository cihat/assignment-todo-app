import { v4 as uuidv4 } from "uuid";
import { loadLocalStorage } from "../../utils/localStorage";
import { TodosActionTypes as TodoTypes } from "../types/todos";

const initialState = {
  todos: loadLocalStorage("todos"),
  visibilityFilter: "SHOW_ALL",
};

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.text,
          completed: false,
        },
      ];
    case TodoTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case TodoTypes.UPDATE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ? { ...todo, text: action.text } : todo;
      });
    case TodoTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default todos;
