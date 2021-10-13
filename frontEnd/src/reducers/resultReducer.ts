import { Random } from './../interfaces/Random'
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'

import ResultState from '../interfaces/ResultState'

const initialState: ResultState = {
  result: {
    date: '',
    id: '',
    originalList: '',
    randomList: '',
  },
}

const resultReducer = createSlice({
  name: 'result',
  initialState,
  reducers: {
    randomResult: (state, action: PayloadAction<Random>) => {
      return {
        result: action.payload,
      }
    },
  },
})

export const { randomResult } = resultReducer.actions

export default resultReducer.reducer as Reducer<typeof initialState>
