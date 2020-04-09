import React from 'react'
import './PsalmInfoDisplay.css'

function PsalmInfoDisplay(props) {
  let psalmNameStyleClass = props.isAccessible ? 'psalm-name-accessible' : 'psalm-name-not-accessible'

  return (
    <div >
      <h2
        className={`${psalmNameStyleClass}`}
      >
        {props.psalmObj.psalmName}
      </h2>
    </div>
  )
}

export default PsalmInfoDisplay
