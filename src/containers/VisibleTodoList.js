import { connect } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../stores/actions";
import TodoList from "../components/TodoList";
import { FiltersActionTypes as FilterTypes } from "../stores/types/todos";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos;
    case FilterTypes.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case FilterTypes.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id) => dispatch(updateTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
