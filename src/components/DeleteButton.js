/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { connect } from 'react-redux'

function DeleteButton (props) {
  const deleteButton = <button type = "button" className = "delete_button"
                        onClick = {() => props.dispatch({ type: 'DELETE_TASK', payload: props.data })}>
                        Delete
                        </button>
  return deleteButton
}

export default connect()(DeleteButton)
