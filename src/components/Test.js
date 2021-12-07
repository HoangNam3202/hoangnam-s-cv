import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/action";

function Test() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      
    </div>
  );
}

export default Test;
