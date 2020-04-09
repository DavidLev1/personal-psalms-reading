
export const setUpdatedPsalmsData = updatedPsalmsData => {
    return localStorage.setItem('psalmsData', JSON.stringify(updatedPsalmsData));
}

export const getUpdatedPsalmsData = () => {
    return JSON.parse(localStorage.getItem('psalmsData')) || [];
}


export const setPsalmsBookReadCount = readenBooksCount => {
    return localStorage.setItem('psalmsBookReadCount', JSON.stringify(readenBooksCount));
}

export const getPsalmsBookReadCount = () => {
    return JSON.parse(localStorage.getItem('psalmsBookReadCount')) || 0;
}
