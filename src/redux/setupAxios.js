import { MODAL } from "../service/modalSession/ModalService";
import { SERVER } from "../app/helpers/BaseHost";
import Crypto from "../app/helpers/config.EnDeCrypt";

export default function setupAxios(axios, store) {
  axios.defaults.baseURL = SERVER;
  axios.interceptors.request.use(
    async (config) => {
      const {
        auth: { authToken },
      } = store.getState();

      if (config.data) {
        let item = {
          encrypt: await Crypto.encrypt(config.data),
        };
        config.data = item;
      }
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    async function (response) {
      response.data = await Crypto.decrypt(response.data);
      return response;
    },
    async function (error) {
      if (error.response.data)
        error.response.data = await Crypto.decrypt(error.response.data);
      if (
        (error.response?.status === 400 || error.response?.status === 401) &&
        (error.response?.data.message === "TokenExpiredError" ||
          error.response?.data.message === "UNAUTORIZED")
      ) {
        var title = "";
        var message = "";
        var button = "";
        if (
          localStorage.getItem("i18nConfig") &&
          JSON.parse(localStorage.getItem("i18nConfig")).selectedLang === "id"
        ) {
          title = "Sesi Masuk";
          message = "Waktu sesi Anda sudah berakhir. Silakan masuk lagi !!";
          button = "Keluar";
        } else {
          title = "Session Log In";
          message = "Your session time is over. Please sign in again !!";
          button = "Sign Out";
        }
        MODAL.showSession(title, message, button);
      }
      console.log("Error interceptors.response => ", error.response);
      return Promise.reject(error);
    }
  );
}
