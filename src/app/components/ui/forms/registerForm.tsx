import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { FormSubmit, useAppDispatch, useAppSelector, useForm } from "#hooks";
import { ButtonMemo, InputGroupMemo } from "#commonComponents";
import {
  clearAuthError,
  getAuthError,
  getUserLoadingStatus,
  signUp,
} from "#store";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inititialData = { name: "", email: "", password: "" };
  const isLoading = useAppSelector(getUserLoadingStatus);
  const authError = useAppSelector(getAuthError);

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
    },
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 6 символов",
        value: 6,
      },
    },
  };

  const onSubmit: FormSubmit = useCallback(
    (data) =>
      dispatch(
        signUp(data.name, data.email, data.password, () => navigate("/"))
      ),
    [dispatch, navigate]
  );

  const { formData, handleSubmit, handleChange, errors } = useForm(
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
    <>
      <h2>РЕГИСТРАЦИЯ</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <InputGroupMemo
          id="name"
          value={formData.name}
          onChange={handleChange}
          label="Имя"
          placeholder="Введите имя"
          error={errors.name}
        />
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
        <ButtonMemo type="submit" disabled={isLoading} variant="dark" stretch>
          Регистрация
        </ButtonMemo>
        {authError && (
          <Alert variant="danger" className="mt-3">
            {authError}
          </Alert>
        )}
      </Form>
    </>
  );
};

export { RegisterForm };
