import { Component } from "react";
// Define types for state and props
type CounterState = {
  count: number; // 'count' is a number
};

type CounterProps = {}; // No props passed to the Counter component

class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with type annotation
  state: CounterState = {
    count: 0,
  };

  // Define the increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method with JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
