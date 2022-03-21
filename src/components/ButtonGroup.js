/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

function ButtonGroup (props) {
  const buttonGroup = <div className = "button_group">
                        <EditButton data = {props.data}/>
                        <DeleteButton data = {props.data} />
                      </div>

  return buttonGroup
}

export default ButtonGroup
