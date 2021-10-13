import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import resultReducer from '../reducers/resultReducer'
import viewReducer from '../reducers/viewReducer'

export const store = configureStore({
  reducer: { viewReducer, resultReducer },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
