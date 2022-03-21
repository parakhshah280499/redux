/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'

function EditButton (props) {
  function onEditTask () {
    props.dispatch({ type: 'EDITID_CHANGED', payload: props.data.taskId })
    props.dispatch({ type: 'FORM_VALUE_CHANGED', payload: props.data.taskName })
  }

  const editButton = <button type = "button" className = "edit_button" onClick = {onEditTask}>
                      Edit
                      </button>
  return editButton
}

export default connect()(EditButton)
