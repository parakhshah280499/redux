/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Label from './Label'
import ButtonGroup from './ButtonGroup'

function TaskBlock (props) {
  const taskBlock = <div className = "new-task" style = {{ display: props.data.show }}>
                      <Label data = {props.data} />
                      <ButtonGroup data = {props.data} />
                    </div>

  return taskBlock
}

export default TaskBlock
