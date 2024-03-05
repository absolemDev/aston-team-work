const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USER_ID_KEY = "user-local-id";
const USER_NAME_KEY = "user-local-name";

interface Tokens {
  refreshToken: string;
  idToken: string;
  localId: string;
  expiresIn: number;
}

const setTokens = ({
  refreshToken,
  idToken,
  localId,
  expiresIn = 3600,
}: Tokens) => {
  const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(USER_ID_KEY, localId);
  localStorage.setItem(TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate.toString());
};

const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_KEY);
};

const removeAuthData = () => {
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
};

const getTokenExpiresDate = () => {
  return localStorage.getItem(EXPIRES_KEY);
};

const getUserId = () => {
  return localStorage.getItem(USER_ID_KEY);
};

const getUserName = () => {
  return localStorage.getItem(USER_NAME_KEY);
};

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  getUserName,
  removeAuthData,
};

export { localStorageService };
