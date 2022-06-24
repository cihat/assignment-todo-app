import { v4 as uuidv4 } from "uuid";
import { dummyTodos } from "../../dummy/todos";
import { loadLocalStorage } from "../../utils/localStorage";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = {
  todos: loadLocalStorage("todos"),
  visibilityFilter: "SHOW_ALL",
};

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, text: action.text };
        } else {
          return todo;
        }
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default todos;
