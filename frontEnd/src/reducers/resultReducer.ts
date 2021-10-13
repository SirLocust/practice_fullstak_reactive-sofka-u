import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import ResultState from '../interfaces/ResultState'

const initialState: ResultState = {
  result: '',
}

const resultReducer = createSlice({
  name: 'result',
  initialState,
  reducers: {
    randomResult: (state, action: PayloadAction<ResultState>) => {
      return {
        result: action.payload.result,
      }
    },
  },
})

export const { randomResult } = resultReducer.actions

export default resultReducer.reducer as Reducer<typeof initialState>
