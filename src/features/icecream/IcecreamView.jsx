import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numOfcreams = useSelector((state) => state.icecream.numOfcreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Num of icecreams - {numOfcreams} </h1>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(1))}>Restocked</button>
    </div>
  );
}

export default IcecreamView;
