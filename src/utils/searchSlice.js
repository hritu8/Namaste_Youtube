import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    CacheResults: (state, action) => {
      //  {"i":["ip","iphone","iphone Pro"]},
      return { ...state, ...action.payload };
      // state = Object.assign(state, action.payload);
    },
  },
});

export const { CacheResults } = searchSlice.actions;
export default searchSlice.reducer;
