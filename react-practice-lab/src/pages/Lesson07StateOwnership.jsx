import { useState } from "react";

// Lessons learned: 
// You must pass state and update functions to child like attributes in HTML.
// The child takes those "attributes" as one object.
// Parent must hold state if it is shared. 

export default function Lesson07StateOwnership() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 7: State Ownership</h1>
      <p className="lesson-description">
        Learn where state should live in the component tree.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Determine where the state needs to live to share it between two sibling components.</li>
          <li>Lift the state up to the appropriate parent component.</li>
          <li>Pass the state and updater functions down as props.</li>
          <li>Make both counters update together when either is clicked.</li>
        </ul>
      </div>

      {/* TODO: You might need to move some state out of these components */}
      <div className="flex-gap">
        <CounterA count={count} incrementCount={incrementCount}/>
        <CounterB count={count} incrementCount={incrementCount}/>
      </div>
    </div>
  );
}

// Sibling A
function CounterA({count, incrementCount}) {
  // TODO: Refactor state ownership
  return (
    <div className="card" style={{ flex: 1, textAlign: 'center' }}>
      <h3>Counter A</h3>
      <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>{count}</h2>
      <button className="btn" onClick={incrementCount}>+ Increment</button>
    </div>
  );
}

// Sibling B
function CounterB({count, incrementCount}) {
  // TODO: Refactor state ownership
  return (
    <div className="card" style={{ flex: 1, textAlign: 'center' }}>
      <h3>Counter B</h3>
      <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>{count}</h2>
      <button className="btn" onClick={incrementCount}>+ Increment</button>
    </div>
  );
}
