import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store/store'

type Props = PropsFromRedux
export const Range: React.FC<Props> = (props: Props) => {
  return (
    <div>{props.range.rangeList.length <= 0 ? '' : props.range.rangeList}</div>
  )
}

const mapStateToProps = (state: RootState) => ({
  range: state.rangeReducer.range,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Range)
