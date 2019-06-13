import crypto from "crypto";

function pCrypt(dataToEncrypt: string | number) {
  return new Promise((resolve, reject) => {
    if (!dataToEncrypt) {
      resolve(false);
    }

    dataToEncrypt = dataToEncrypt.toString();
    crypto.pbkdf2(
      dataToEncrypt,
      process.env.SALT,
      50000,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) {
          reject(err);
        }
        resolve(derivedKey.toString("hex"));
      }
    );
  });
}

export async function hashNewPassword(dataToEncrypt: string | number) {
  const callBackPCrypt = async () => {
    return await pCrypt(dataToEncrypt);
  };
  return await callBackPCrypt();
}
