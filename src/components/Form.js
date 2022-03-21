/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { connect } from 'react-redux'
import store from '../store.js'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: this.props.formState }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    store.dispatch({ type: 'FORM_VALUE_CHANGED', payload: event.target.value })
  }

  handleSubmit (event) {
    const newTaskName = this.props.formState
    const newTaskString = String(newTaskName)

    let valid = true

    const length = newTaskString.length
    if (length === 0) { valid = false }

    let nonSpace = false
    for (let ch = 0; ch < length; ++ch) {
      if (newTaskString.charAt(ch) !== ' ') {
        nonSpace = true
        break
      }
    }

    valid = nonSpace

    if (valid === false) {
      alert('Task is INVALID !! \n Please add a valid task')

      event.preventDefault()
      return
    }

    store.dispatch({ type: 'ADD_NEW_TASK', payload: newTaskName })
    event.preventDefault()
  }

  render () {
    return (
        <form onSubmit = {this.handleSubmit}>
          <label>
            <input type = "text" placeholder = "Enter your task here"
                value = {this.props.formState}
                style = {{ fontSize: '12pt', height: '40px', width: '90%' }}
                onChange = {this.handleChange} />
          </label>
          <button type = "submit" className = "button1">Add</button>
        </form>
    )
  }
}

function mapStateToProps (state) {
  return { formState: state.formValue }
}

export default connect(mapStateToProps)(Form)
