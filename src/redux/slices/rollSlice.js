import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRolls = createAsyncThunk(
  "roll/fetchRollStatus",
  async (params) => {
    const { search, currentPage, order, sortBy } = params;
    const response = await axios.get(
      `https://63ed0de2e6ee53bbf590356d.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${search}`
    );
    return response.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const rollSlice = createSlice({
  name: "roll",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchRolls.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchRolls.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchRolls.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = rollSlice.actions;
export default rollSlice.reducer;
