import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prices: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setPrices, setStatus } = cryptoSlice.actions;

export default cryptoSlice.reducer;