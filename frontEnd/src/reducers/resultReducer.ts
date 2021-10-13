import { Random } from './../interfaces/Random'
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { ConnectedProps, connect } from 'react-redux'

import ResultState from '../interfaces/ResultState'
import { RootState } from '../store/store'

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

const mapStateToProps = (state: RootState) => {
  return state.resultReducer
}
const mapDispatchToProps = {
  randomResult: resultReducer.actions.randomResult,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromResultReducer = ConnectedProps<typeof connector>
