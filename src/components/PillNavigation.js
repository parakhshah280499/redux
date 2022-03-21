/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import AllTab from './AllTab'
import ActiveTab from './ActiveTab'
import CompleteTab from './CompleteTab'
import { connect } from 'react-redux'

function PillNavigation (props) {
  const pillNavigation = (
                          <div className = "pill-nav">
                          <AllTab />
                          <ActiveTab />
                          <CompleteTab />
                          </div>
  )

  return pillNavigation
}

function mapStateToProps (state) {
  return { tabState: state.tab }
}

export default connect(mapStateToProps)(PillNavigation)
