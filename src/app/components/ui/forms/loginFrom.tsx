import { useCallback, useEffect } from "react";
import { Alert, Form } from "react-bootstrap";
import { useForm, FormSubmit, useAppDispatch, useAppSelector } from "#hooks";
import { ButtonMemo, InputGroupMemo } from "#commonComponents";
import {
  clearAuthError,
  getAuthError,
  getUserLoadingStatus,
  logIn,
} from "#store";
import { useNavigate } from "react-router-dom";

const LoginFrom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inititialData = { email: "", password: "" };
  const isLoading = useAppSelector(getUserLoadingStatus);
  const authError = useAppSelector(getAuthError);

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Введите корректную электронную почту",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      min: {
        message: "Пароль должен состоять минимум из 6 символов",
        value: 6,
      },
    },
  };

  const onSubmit: FormSubmit = useCallback(
    (data) => dispatch(logIn(data.email, data.password, () => navigate("/"))),
    [dispatch]
  );

  const { formData, handeleSubmit, handleChange, errors } = useForm(
    inititialData,
    validatorConfig,
    onSubmit
  );

  useEffect(
    () => () => {
      if (authError) dispatch(clearAuthError());
    },
    [dispatch, authError]
  );

  return (
    <Form onSubmit={handeleSubmit}>
      <InputGroupMemo
        id="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        placeholder="Введите почту"
        error={errors.email}
      />
      <InputGroupMemo
        id="password"
        value={formData.password}
        onChange={handleChange}
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        error={errors.password}
      />
      <ButtonMemo type="submit" disabled={isLoading} stretch>
        Вход
      </ButtonMemo>
      {authError && (
        <Alert variant="danger" className="mt-3">
          {authError}
        </Alert>
      )}
    </Form>
  );
};

export { LoginFrom };