import React from 'react'; // FC // useState,
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducer';
import { CounterState } from '../../store/reducer/couter-reducer';
import * as counterAction from '../../store/action';

interface BuggyCounterProps {
  counter: CounterState;
  onIncrement(): void;
  onDecrement(): void;
  addCounter(value: number): any;
  decreaseCounter(value: number): void;
}

class BuggyCounter extends React.Component<BuggyCounterProps> {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    // if (this.state.counter === 5) {
    //   // Simulate an error!
    //   throw new Error('I crashed!');
    // }
    console.log(this.props);
    const { onIncrement, onDecrement, addCounter, decreaseCounter, counter } = this.props;
    return (
      <div className="buggyCounterContainer">
        <h1>{counter.count}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={() => addCounter(5)}>Add 5</button>
        <button onClick={() => decreaseCounter(5)}>Decrease 5</button>
      </div>
    );
  }
}

// interface BuggyCounterProps {}

// const BuggyCounter: FC<BuggyCounterProps> = props => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter => counter + 1);
//   };
//   if (counter === 5) {
//     // Simulate an error!
//     throw new Error('I crashed!');
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={handleClick}>+</button>
//     </div>
//   );
// };

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: counterAction.myThunkDispatch) => {
  return {
    onIncrement: () => dispatch(counterAction.incrementCounter()),
    onDecrement: () => dispatch(counterAction.decrementCounter()),
    addCounter: (value: number) => dispatch(counterAction.addCounter(value)),
    decreaseCounter: (value: number) => dispatch(counterAction.decreaseCounter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuggyCounter);
