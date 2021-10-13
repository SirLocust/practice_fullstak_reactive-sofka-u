import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '../store/store'

type Props = PropsFromRedux

const Result: React.FC<Props> = (props: Props) => {
  return <div>{props.result && `Resultado ${props.result.randomList}`}</div>
}

const mapStateToProps = (state: RootState) => ({
  result: state.resultReducer.result,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Result)
