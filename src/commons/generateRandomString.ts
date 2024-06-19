const generateRandomString = (length: number) => {
  const randomBytes = new Uint8Array(length);

  window.crypto.getRandomValues(randomBytes);

  const charArray =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor((randomBytes[i] / 256) * charArray.length);
    result += charArray[randomIndex];
  }

  return result;
};

export default generateRandomString;
