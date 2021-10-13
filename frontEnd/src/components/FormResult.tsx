import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useForm } from 'react-hook-form'

import { fetchRandom } from '../thunkActions/fetchRandom'

import { AnyAction } from 'redux'
import { RootState } from '../store/store'

type Props = PropsFromRedux
type FormData = {
  value: string
}
const FormResult: React.FC<Props> = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit((data: FormData) => {
    props.dispatch(fetchRandom(data.value) as unknown as AnyAction)
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea {...register('value')} />

        <button type="submit" disabled={props.loading}>
          enviar
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.viewReducer.loading,
})

// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
//   return {
//     dispatch: dispatch(fetchRandom('s')),
//   }
// }

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FormResult)
