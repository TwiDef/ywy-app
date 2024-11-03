import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  page: 1,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    onChangePage: (state, action) => {
      state.page = action.payload
    }
  },
})

export const { onChangePage } = querySlice.actions

export default querySlice.reducer