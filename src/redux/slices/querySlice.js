import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {

  },
})

export const { } = querySlice.actions

export default querySlice.reducer