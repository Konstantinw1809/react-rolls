import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  currentPage: 1,
  sortType: { name: "по алфавиту А-Я", sortProperty: "-title" },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setSearchValue, setCurrentPage, setSortType } =
  filterSlice.actions;
export default filterSlice.reducer;
