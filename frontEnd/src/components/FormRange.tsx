import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useForm } from 'react-hook-form'

import { AnyAction } from 'redux'
import { RootState } from '../store/store'
import { fetchRange } from '../thunkActions/fetchRange'

type Props = PropsFromRedux
type FormData = {
  init: number
  end: number
}
const FormRange: React.FC<Props> = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data)
    props.dispatch(fetchRange(data.init, data.end) as unknown as AnyAction)
  })
  return (
    <div className="container">
      <form className="row d-flex justify-content-center" onSubmit={onSubmit}>
        <div className="col-auto text-center">
          <h3>rango inicial</h3>
          <input {...register('init')} type="number" />
        </div>
        <div className="col-auto text-center">
          <h3>rango final</h3>
          <input {...register('end')} type="number" />
        </div>

        <button
          className="mt-3 btn btn-primary "
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

export default connector(FormRange)
