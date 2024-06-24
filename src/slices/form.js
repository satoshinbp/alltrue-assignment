import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: null,
  },
  reducers: {
    submit: (state, action) => {
      state.form = action.payload
    },
  },
})

export const { submit } = formSlice.actions
export default formSlice.reducer
