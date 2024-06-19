import CryptoJS from 'crypto-js'
const encryptAES = <T>(data: T, salt: string) => {
    return  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
}

export default encryptAES