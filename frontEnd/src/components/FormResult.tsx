import { AnyAction } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/store'
import { fetchRandom } from '../thunkActions/fetchRandom'

type Props = PropsFromRedux

type FormData = {
  value: string
}

export const FormResult: React.FC<Props> = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit((data: FormData) => {
    props.dispatch(fetchRandom(data.value) as unknown as AnyAction)
  })
  return (
    <div className="container">
      <form className="row" onSubmit={onSubmit}>
        <textarea className="form-control" {...register('value')} />

        <button
          className="btn btn-primary mt-1"
          type="submit"
          disabled={props.loading}
        >
          enviar
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.viewReducer.loading,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FormResult)
