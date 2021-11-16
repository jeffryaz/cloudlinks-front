import Nilai from "./config.RegexMe";
import CryptoJS from "crypto-js";
// const Response = require("../helpers/response");

const Crypto = {
  decrypt: async (data) => {
    try {
      var bytes = CryptoJS.AES.decrypt(data, Nilai.toString());
      var item = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return item;
    } catch (error) {
      console.log("Crypto -> error", error);
      // return Response._.clientError(res, null, "Invalid Data");
    }
  },
  encrypt: async (data) => {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      Nilai.toString()
    ).toString();
  },
};

export default Crypto;
