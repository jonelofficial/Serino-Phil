import React, { useState } from "react";

const MyComponent = ({ headerText, children }) => {
  const [clicks, setClicks] = useState(0);

  // 1. Instead of using this.state.clicks to update the state of clicks, the clickHandler function is modifying it through this.clicks.
  // 2. It's not good practice to use refs in React to add or remove click event listeners. Instead, the onClick prop can be used to directly add the event listener to the component.
  // 3. Rather than a class component, React hooks can be used to make this component more simpler and concise.

  return (
    <div
      className="my-component"
      style={{ cursor: "pointer" }}
      onClick={() => setClicks((prevState) => prevState + 1)}
    >
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  );
};
export default MyComponent;

// =======================================================
// Question #1 - React - Identify the Problem and Refactor
// =======================================================

// Please identify the problems and tell us what the problems are, then improve this React Component by coding your own version!

// It would be a plus point if you can convert/refactor them into React hooks.

// class MyComponent extends React.Component {
//   constructor(props) {
//     // set the default internal state
//     this.state = {
//       clicks: 0
//     };
//   }

//   componentDidMount() {
//     this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
//   }

//   componentWillUnmount() {
//     this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
//   }

//   clickHandler() {
//     this.setState({
//       clicks: this.clicks + 1
//     });
//   }

//   render() {
//     let children = this.props.children;

//     return (
//       <div className="my-component" ref="myComponentDiv">
//       <h2>My Component ({this.state.clicks} clicks})</h2>
//       <h3>{this.props.headerText}</h3>
//     {children}
//     </div>
//     );
//   }
// }
