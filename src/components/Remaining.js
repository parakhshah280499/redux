/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'

function Remaining (props) {
  const remaining = <p className = "remaining" id = "remaining">
                      {props.activeTasks > 0 ? props.activeTasks + ' tasks remaining' : ' '}</p>

  return remaining
}

function mapStateToProps (state) {
  return { activeTasks: state.countOfActiveTasks }
}

export default connect(mapStateToProps)(Remaining)
