import { AppDispatch, RootState } from './../store/store'

import { Action, ThunkAction } from '@reduxjs/toolkit'
import { viewLoaded, viewLoading } from '../reducers/viewReducer'

import { rangeResult } from '../reducers/rangeReducer'
import { Range } from '../interfaces/Range'

export const fetchRange =
  (
    init: number,
    end: number
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    dispatch(viewLoading())
    console.log('a')
    const url = `http://localhost:8081/range`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ init: init, end: end }),
    })
    const data = (await resp.json()) as Range

    dispatch(viewLoaded())
    dispatch(rangeResult(data))
  }
