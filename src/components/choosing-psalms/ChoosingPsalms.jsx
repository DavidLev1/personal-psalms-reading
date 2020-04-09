import React from 'react';
import PsalmInfoDisplay from '../psalm-info-display/PsalmInfoDisplay';
import { psalmsRawData } from '../../data-files/psalms-data';
import { getUpdatedPsalmsData, setUpdatedPsalmsData, setPsalmsBookReadCount, getPsalmsBookReadCount } from '../../utils/state/storage-state';
import './ChoosingPsalms.css';
import { NavLink } from 'react-router-dom';


//localStorage.clear()

function ChoosingPsalms() {
  let updatedPsalmsData = getUpdatedPsalmsData();

  if (updatedPsalmsData.length === 0) {
    setUpdatedPsalmsData(psalmsRawData);
    updatedPsalmsData = getUpdatedPsalmsData();
  }

  if (updatedPsalmsData.every(psalmObj => psalmObj.isAccessible === false)) {
    const booksReaden = getPsalmsBookReadCount() + 1;
    setPsalmsBookReadCount(booksReaden);

    updatedPsalmsData.forEach(psalmObj => {
      psalmObj.isAccessible = true;
    })

    setUpdatedPsalmsData(updatedPsalmsData);
    updatedPsalmsData = getUpdatedPsalmsData();
  }


  return (
    <div >
      <h2 className='num-of-books-read-header'>
        מספר ספרי תהילים שנקראו:
        <span className='num-of-books-read'> {getPsalmsBookReadCount()} </span>
      </h2>

      <p id='chooce-psalm-header'>פרקי תהילים זמינים</p>
      <br />

      <div className='psalms-container'>
        {
          updatedPsalmsData.map(psalmObj => (
            <NavLink
              exact
              to={{
                pathname: '/psalms?psalmId=' + psalmObj.id + '&psalmName=' + psalmObj.psalmName
              }}
              key={psalmObj.id}
            >
              <PsalmInfoDisplay
                isAccessible={psalmObj.isAccessible}
                psalmObj={psalmObj}
              />
            </NavLink>
          ))
        }
      </div>

    </div>
  )
}

export default ChoosingPsalms
