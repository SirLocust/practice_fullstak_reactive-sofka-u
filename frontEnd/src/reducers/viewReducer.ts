import { createSlice, Reducer } from '@reduxjs/toolkit'

import ViewState from '../interfaces/ViewState'
import { RootState } from '../store/store'

const initialState: ViewState = {
  loading: false,
}

const viewReducer = createSlice({
  name: 'view',
  initialState,
  reducers: {
    viewLoading: () => {
      return {
        loading: true,
      }
    },
    viewLoaded: () => {
      return {
        loading: false,
      }
    },
  },
})

export const { viewLoaded, viewLoading } = viewReducer.actions

export const getViewStateSelector = (state: RootState) => state.viewReducer

export default viewReducer.reducer as Reducer<typeof initialState>
