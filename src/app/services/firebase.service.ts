import axios from "axios";
import config from "../config.json";
import { localStorageService, authService } from "#services";

const firebase = axios.create({
  baseURL: config.firebaseEndpoint,
});

firebase.interceptors.request.use(
  async function (config) {
    const containSlash = /\/$/gi.test(config.url!);
    config.url =
      (containSlash ? config.url!.slice(0, -1) : config.url) + ".json";
    const expiresDate = localStorageService.getTokenExpiresDate() || 0;
    const refreshToken = localStorageService.getRefreshToken();
    if (refreshToken && Number(expiresDate) < Date.now()) {
      const data = await authService.refresh();

      localStorageService.setTokens({
        refreshToken: data.refresh_token,
        idToken: data.id_token,
        expiresIn: data.expires_in,
        localId: data.user_id,
      });
    }
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      config.params = { ...config.params, auth: accessToken };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function transormData(data: any) {
  return data && !data._id
    ? Object.keys(data).map((key) => ({
        ...data[key],
      }))
    : data;
}

firebase.interceptors.response.use(
  (res) => {
    res.data = { content: transormData(res.data) };
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const firebaseService = {
  get: firebase.get,
  post: firebase.post,
  put: firebase.put,
  delete: firebase.delete,
  patch: firebase.patch,
};

export { firebaseService };
