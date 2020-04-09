import React from 'react';
import './PsalmContentDisplay.css';
import { getPsalmToDisplay } from '../../utils/display-utils/psalms/psalmToDisplay';
import { psalmSkip } from '../../utils/display-utils/psalms/psalmSkip';
import { psalmEnd } from '../../utils/display-utils/psalms/psalmEnd';

import { withRouter } from 'react-router-dom';


function PsalmContentDisplay(props) {
  const currentPsalmName = props.match.params.psalmName;
  let psalmToDislay = getPsalmToDisplay(props);


  return (
    <div className='text-style'>
      {psalmToDislay}

      <div className='buttons-container'>
        <button className='finish-psalm-btn' onClick={() => psalmEnd(props)} >
          סיימתי פרק {currentPsalmName}
        </button>
        &emsp;
        <button className='skip-psalm-btn' onClick={() => psalmSkip(props)} >
          לא סיימתי פרק {currentPsalmName}
        </button>
      </div>
      <br />

    </div>
  )
}


export default withRouter(PsalmContentDisplay)