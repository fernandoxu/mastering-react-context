import { useState, createContext, useContext } from 'react';

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Add One
      </button>
    </div>
  );
};

const Container = () => (
  <div>
    <AddOneButton />
  </div>
);

const Counter = () => {
  const [counter] = useContext(CounterContext);

  return <div>Counter: {counter}</div>;
};

const CounterUseState = () => (
  <CounterContextProvider>
    <Container />
    <Counter />
  </CounterContextProvider>
);

export default function CounterUseStatePage() {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  );
}
