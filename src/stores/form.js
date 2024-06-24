import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../slices/form'

const store = configureStore({
  reducer: formReducer,
})

export default store
