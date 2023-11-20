import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfcreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfcreams--;
    },
    restocked: (state, action) => {
      state.numOfcreams += action.payload;
    },
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
