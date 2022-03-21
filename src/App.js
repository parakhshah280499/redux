import React from 'react'
import './App.css'
import Form from './components/Form'
import DivWithPillNavigation from './components/DivWithPillNavigation'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends React.Component {
  render () {
    const card = (
              <Provider store = {store}>
                <div className = "card">
                  <p className = "text">What needs to be done?</p>

                  <Form />
                  <DivWithPillNavigation />

                </div>
                </Provider>
    )

    return card
  }
}

export default App
