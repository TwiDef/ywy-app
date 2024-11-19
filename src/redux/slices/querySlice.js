import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: "",
  genreId: "",
  order: "NUM_VOTE",
  type: "",
  page: 1,
  dailyQuotaLimitOut: false
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    onChangePage: (state, action) => {
      state.page = action.payload
    },
    onChangeKeyword: (state, action) => {
      state.keyword = action.payload
    },
    switchDailyQuotaStatus: (state, action) => {
      state.dailyQuotaLimitOut = action.payload
    }
  },
})

export const { onChangePage, onChangeKeyword, switchDailyQuotaStatus } = querySlice.actions

export default querySlice.reducer