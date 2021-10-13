import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { Range } from '../interfaces/Range'
import { RangeState } from './../interfaces/RangeState'

const initialState: RangeState = {
  range: {
    init: 0,
    end: 0,
    rangeList: '',
  },
}

const resultReducer = createSlice({
  name: 'range',
  initialState,
  reducers: {
    rangeResult: (state, action: PayloadAction<Range>) => {
      return {
        range: action.payload,
      }
    },
  },
})

export const { rangeResult } = resultReducer.actions

export default resultReducer.reducer as Reducer<typeof initialState>
