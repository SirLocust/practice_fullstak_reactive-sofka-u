import { AppDispatch, RootState } from './../store/store'

import { Action, ThunkAction } from '@reduxjs/toolkit'
import { viewLoaded, viewLoading } from '../reducers/viewReducer'
import { randomResult } from '../reducers/resultReducer'
import { Random } from '../interfaces/Random'

export const fetchRandom =
  (result: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    dispatch(viewLoading())

    const url = `http://localhost:8081/random`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ list: result }),
    })
    const data = (await resp.json()) as Random

    dispatch(viewLoaded())
    console.log(data.originalList)
    dispatch(randomResult(data))
  }
