/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'
import CheckMark from './CheckMark'

function Label (props) {
  let label = <label className = "container" style = {{ textDecoration: 'initial' }}>
                   <input type = "checkbox"
                          onChange={() => props.dispatch({ type: 'TOGGLE_TASK_WITH_TASKID', payload: props.data.taskId })}
                          checked = {props.data.isChecked}></input>
                    <CheckMark />
                    {props.data.taskName}
                  </label>

  if (props.data.isChecked) {
    label = <label className = "container" style = {{ textDecoration: 'line-through', textDecorationColor: 'maroon' }}>
                   <input type = "checkbox"
                    onChange={() => props.dispatch({ type: 'TOGGLE_TASK_WITH_TASKID', payload: props.data.taskId })}
                          checked = {props.data.isChecked}></input>
                  <CheckMark />
                  {props.data.taskName}
                </label>
  }

  return label
}

export default connect()(Label)
