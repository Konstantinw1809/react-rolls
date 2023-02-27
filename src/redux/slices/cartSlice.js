import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCart = createAsyncThunk("cart/fetchCartStatus", async () => {
//   const response = await axios.get(
//     `https://63ed0de2e6ee53bbf590356d.mockapi.io/cart`
//   );
//   return response.data;
// });

const initialState = {
  totalPrice: 0,
  items: [],
  // status: "loading",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (action.payload.count !== 0) {
        const findItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (findItem) {
          findItem.count = action.payload.count;
        } else {
          state.items.push({ ...action.payload });
        }
        state.totalPrice = state.items.reduce(
          (sum, obj) => (sum += obj.price * obj.count),
          0
        );
      }
    },
    plusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count++;
        state.totalPrice += findItem.price;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
  },
  // extraReducers: {
  //   [fetchCart.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   [fetchCart.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   [fetchCart.rejected]: (state) => {
  //     state.status = "error";
  //     state.items = [];
  //   },
  // },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
