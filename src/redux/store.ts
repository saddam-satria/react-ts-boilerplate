import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './reducers/example'

export const store = configureStore({
  reducer: {
    posts: exampleReducer,
  },
})

export type store = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store