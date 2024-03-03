export const generetaAuthError = (message: string) => {
  switch (message) {
    case "INVALID_LOGIN_CREDENTIALS":
      return "Email или пароль введены некорректно!";
    case "EMAIL_EXISTS":
      return "Пользователь с данным Email уже существует!";
    default:
      return "Слишком много попыток входа. Попробуйте позднее!";
  }
};
