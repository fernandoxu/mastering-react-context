import { useReducer, createContext, useContext } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
};

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </CounterContext.Provider>
);

const AddOneButton = () => {
  const [_, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD' })}>Add One</button>
    </div>
  );
};

const MinusOneButton = () => {
  const [_, dispatch] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'MINUS' })}>Minus One</button>
    </div>
  );
};

const Container = () => (
  <div>
    <div>
      <AddOneButton />
      <MinusOneButton />
    </div>
  </div>
);

const Counter = () => {
  const [counter] = useContext(CounterContext);

  return <div>Counter: {counter}</div>;
};

const CounterUseReducer = () => (
  <CounterContextProvider>
    <Counter />
    <Container />
  </CounterContextProvider>
);

export default function CounterUseReducerPage() {
  return (
    <div>
      <CounterUseReducer />
      <CounterUseReducer />
      <CounterUseReducer />
    </div>
  );
}
