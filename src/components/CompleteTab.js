/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux'

function CompleteTab (props) {
  if (props.tabState === 3) {
    return (
      <button className = "Active" id = "completed"
          onClick = {() => props.dispatch({ type: 'COMPLETED_TAB_CLICKED', payload: 3 })}>Completed</button>
    )
  }

  return (
    <button className = "a" id = "completed"
          onClick = {() => props.dispatch({ type: 'COMPLETED_TAB_CLICKED', payload: 3 })}>Completed</button>
  )
}

function mapStateToProps (state) {
  return { tabState: state.tab }
}

export default connect(mapStateToProps)(CompleteTab)
