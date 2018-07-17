const CHANGE_INPUT = "todo/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value
});
export const insert = text => ({
  type: INSERT,
  text
});
export const toggle = id => ({
  type: TOGGLE,
  id
});
export const remove = id => ({
  type: REMOVE,
  id
});

let id = 0;
const initialState = {
  input: "",
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      console.log(action.value);
      return {
        input: action.value,
        todos: [...state.todos]
      };
    case INSERT:
      const newTodo = {
        id: id++,
        text: state.input,
        checked: false
      };
      return {
        input: "",
        todos: [...state.todos, newTodo]
      };
    case TOGGLE:
      const nextTodos = [...state.todos];
      nextTodos[action.id] = {
        ...nextTodos[action.id],
        checked: !nextTodos[action.id].checked
      };

      return {
        ...state,
        todos: nextTodos
      };
    case REMOVE:
      const removedTodos = state.todos.filter(todo => todo.id !== action.id);

      console.log(removedTodos);
      return {
        ...state,
        todos: removedTodos
      };

    default:
      return state;
  }
}
