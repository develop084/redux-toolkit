import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// auto-matic it will create action for us 
export const { add, remove } = cartSlice.actions;

// export reducer 
export default cartSlice.reducer;