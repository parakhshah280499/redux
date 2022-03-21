/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Remaining from './Remaining'
import TaskBlock from './TaskBlock'
import { connect } from 'react-redux'

function DivWithoutPillNavigation (props) {
  const taskBlocks = props.currentState

  let divWithoutPillNavigation = (
                <div className = "new_div2" id = "new_div2">
                  <Remaining />
                  {taskBlocks.map((item, i) => <TaskBlock data = {item}
                                                          />)}
                </div>
  )

  if (props.tabState === 2) {
    const newTaskBlocks = taskBlocks.filter(function (item) {
      return item.isChecked !== true
    })

    divWithoutPillNavigation = (
        <div className = "new_div2" id = "new_div2">
          <Remaining />
          {newTaskBlocks.map((item, i) => <TaskBlock data = {item}
                                                  />)}
        </div>
    )
  } else if (props.tabState === 3) {
    const newTaskBlocks = taskBlocks.filter(function (item) {
      return item.isChecked === true
    })

    divWithoutPillNavigation = (
        <div className = "new_div2" id = "new_div2">
          <Remaining />
          {newTaskBlocks.map((item, i) => <TaskBlock data = {item}
                                                  />)}
        </div>
    )
  }

  return divWithoutPillNavigation
}

function mapStateToProps (state) {
  return {
    currentState: [...state.taskBlocks],
    tabState: state.tab
  }
}

export default connect(mapStateToProps)(DivWithoutPillNavigation)
