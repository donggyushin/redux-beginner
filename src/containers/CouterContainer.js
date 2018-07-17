import React, { Component } from "react";
import Counter from "components/Counter";
import { connect } from "react-redux";
import * as counterActions from "store/modules/counter";

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;
    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

//props 값으로 넣어 줄 상태를 정의해준다.
const mapStateToProps = state => ({
  number: state.counter.number
});

//props 값으로 넣어 줄 액션 함수들을 정의해준다.
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement())
});

//컴포넌트를 리덕스와 연동 할 때에는 connect를 사용합니다.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
