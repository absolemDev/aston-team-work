import axios from "axios";
import { localStorageService } from "#services";

interface AuthData {
  email: string;
  password: string;
}

const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: process.env.REACT_APP_FIREBASE_API_KEY,
  },
});

httpAuth.interceptors.response.use(
  (res) => res,
  (error) => {
    throw new Error(error.response.data.error.message);
  }
);

const authService = {
  register: async ({ email, password }: AuthData) => {
    const { data } = await httpAuth.post(`accounts:signUp`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  login: async ({ email, password }: AuthData) => {
    const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export { authService };
