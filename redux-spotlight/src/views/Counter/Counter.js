import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  randomplus,
  randomminus,
} from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value fro
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="reset"
        onClick={() => {
          dispatch(reset());
        }}
      >
        0
      </button>

      <button
        aria-label="plus random"
        onClick={() => {
          dispatch(randomplus());
        }}
      >
        + random
      </button>
      <button
        aria-label="minus random"
        onClick={() => {
          dispatch(randomminus());
        }}
      >
        - random
      </button>
    </div>
  );
};

export default Counter;
