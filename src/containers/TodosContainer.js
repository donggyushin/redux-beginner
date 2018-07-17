import React, { Component } from "react";
import Todos from "components/Todos";
import { connect } from "react-redux";
import * as todoActions from "store/modules/todo";

class TodosContainer extends Component {
  handleChange = e => {
    const { changeInput } = this.props;
    console.log(e.target.value);
    changeInput(e.target.value);
  };

  handleInsert = () => {
    const { insert, input } = this.props;
    insert(input);
  };

  handleToggle = id => {
    const { toggle } = this.props;
    toggle(id);
  };

  handleRemove = id => {
    const { remove } = this.props;
    remove(id);
  };

  render() {
    const { todos, input } = this.props;
    const { handleChange, handleInsert, handleRemove, handleToggle } = this;
    return (
      <Todos
        todos={todos}
        input={input}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

const mapStateToProps = state => ({
  input: state.todo.input,
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  changeInput: value => dispatch(todoActions.changeInput(value)),
  insert: text => dispatch(todoActions.insert(text)),
  toggle: id => dispatch(todoActions.toggle(id)),
  remove: id => dispatch(todoActions.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
