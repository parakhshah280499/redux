/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'

function ActiveTab (props) {
  if (props.tabState === 2) {
    return (
        <button className = "Active" id = "active"
              onClick = {() => props.dispatch({ type: 'ACTIVE_TAB_CLICKED', payload: 2 })}>Active</button>
    )
  }

  return (
    <button className = "a" id = "active"
              onClick = {() => props.dispatch({ type: 'ACTIVE_TAB_CLICKED', payload: 2 })}>Active</button>
  )
}

function mapStateToProps (state) {
  return { tabState: state.tab }
}

export default connect(mapStateToProps)(ActiveTab)
