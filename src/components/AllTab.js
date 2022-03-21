/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux'

function AllTab (props) {
  if (props.tabState === 1) {
    return (
        <button className = "Active" id = "all"
                onClick = {() => props.dispatch({ type: 'ALL_TAB_CLICKED', payload: 1 })}>All</button>
    )
  }

  return (
    <button className = "a" id = "all"
      onClick = {() => props.dispatch({ type: 'ALL_TAB_CLICKED', payload: 1 })}>All</button>
  )
}

function mapStateToProps (state) {
  return { tabState: state.tab }
}

export default connect(mapStateToProps)(AllTab)
