/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PillNavigation from './PillNavigation'
import DivWithoutPillNavigation from './DivWithoutPillNavigation'

function DivWithPillNavigation (props) {
  const divWithPillNavigation = (
                    <div className = "new_div1">
                      <PillNavigation />
                      <DivWithoutPillNavigation />
                    </div>
  )

  return divWithPillNavigation
}

export default DivWithPillNavigation
