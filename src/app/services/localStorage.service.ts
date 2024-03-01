const TOKEN_KEY = "accessToken";
const EMAIL_KEY = "email";

interface User {
  email: string;
  accessToken: string;
}

export const startSession = (user: User) => {
  localStorage.setItem(EMAIL_KEY, user.email);
  localStorage.setItem(TOKEN_KEY, user.accessToken);
};

export const getSession = () => {
  return {
    email: localStorage.getItem(EMAIL_KEY),
    accessToken: localStorage.getItem(TOKEN_KEY),
  };
};

export const endSession = () => {
  localStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().accessToken;
};
