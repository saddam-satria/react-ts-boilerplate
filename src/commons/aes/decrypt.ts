import CryptoJS from 'crypto-js'
const decryptAES = <T>(ciphertext: string, salt: string) : T | null => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        return null;
    }
}

export default decryptAES