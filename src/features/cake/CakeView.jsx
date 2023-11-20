import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Num of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered()) }>Order</button>
      <button onClick={() => dispatch(restocked(1)) }>Restocked</button>
    </div>
  );
}

export default CakeView;
