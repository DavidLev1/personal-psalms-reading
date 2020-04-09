import {getUpdatedPsalmsData, setUpdatedPsalmsData} from '../../state/storage-state';

export const psalmEnd = componentProps => {
    const updatedPsalmsData = getUpdatedPsalmsData();
    const idOfEndedPsalm = componentProps.match.params.psalmId;
    
    for(let i = 0; i < updatedPsalmsData.length; i++) {
      if (updatedPsalmsData[i].id.toString() === idOfEndedPsalm) {
        updatedPsalmsData[i].isAccessible = false;
        setUpdatedPsalmsData(updatedPsalmsData);
        i = updatedPsalmsData.length;
      }
    }
  
    componentProps.history.push({
      pathname: '/'
    })
  }