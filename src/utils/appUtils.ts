

function APPUtils() {

    const key = "";
    //  TODO :  Encrypt and decrypt localstorage data
}

export default APPUtils;


export const encryptLocalStorage = (storedData: any)  => {
    const encryptedData = atob(storedData);
    
    return encryptedData;
}


export const decryptLocalStorage = async (dataEncrypted: any)  => {
    const decryptedData = await atob(dataEncrypted);
    return decryptedData;
}

