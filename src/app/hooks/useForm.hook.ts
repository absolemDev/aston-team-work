import { ChangeEventHandler, FormEvent, useCallback, useState } from "react";
import { ValidatorConfig, validator } from "#utils";

interface FormState {
  [key: string]: string;
}

export type FormSubmit = (formData: FormState) => void;

const useForm = (
  initialState: FormState = {},
  validatorConfig: ValidatorConfig,
  onSubmit: FormSubmit
) => {
  const [formData, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormState>({});

  const validate = useCallback(() => {
    const errors = validator(formData, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData, validatorConfig]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!validate()) return;
      onSubmit(formData);
    },
    [formData, onSubmit, validate]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setForm((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    []
  );

  return { formData, handleSubmit, handleChange, errors };
};

export { useForm };
