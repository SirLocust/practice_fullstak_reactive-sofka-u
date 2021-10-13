import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import viewReducer from '../reducers/viewReducer'

export const store = configureStore({
  reducer: { viewReducer },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
