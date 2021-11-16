import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import Nilai from "../app/helpers/config.RegexMe";

const encryptor = encryptTransform({
  secretKey: Nilai,
  onError: function (error) {
    console.error("REDUX_PERSIST -> encryptor: ", error);
  },
});

const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.0",
  storeConfig: {
    key: "aplication",
    storage,
    whitelist: ["auth"],
    transforms: [encryptor],
  },
};

export default REDUX_PERSIST;
