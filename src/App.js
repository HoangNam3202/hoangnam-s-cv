import React from "react";
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions/action";
import Test from './components/Test'
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Test></Test>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>
  );
}

export default App;
