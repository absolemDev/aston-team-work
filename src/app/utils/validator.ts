interface ValidatorData {
  [key: string]: string;
}

interface ValidatorMethod {
  isRequired?: ValidatorParams;
  isEmail?: ValidatorParams;
  isCapitalSymbol?: ValidatorParams;
  isContainDigit?: ValidatorParams;
  min?: ValidatorParams;
}

interface ValidatorParams {
  message: string;
  value?: number;
}

export interface ValidatorConfig {
  [key: string]: ValidatorMethod;
}

const validate = (
  validateMethod: keyof ValidatorMethod,
  data: string,
  config: ValidatorParams
): string => {
  let statusValidate;
  switch (validateMethod) {
    case "isRequired": {
      statusValidate = data.trim() === "";
      break;
    }
    case "isEmail": {
      const emailRegExp = /^\S+@\S+\.\S+$/g;
      statusValidate = !emailRegExp.test(data);
      break;
    }
    case "isCapitalSymbol": {
      const capitalRegExp = /[A-Z]+/g;
      statusValidate = !capitalRegExp.test(data);
      break;
    }
    case "isContainDigit": {
      const digitRegExp = /\d+/g;
      statusValidate = !digitRegExp.test(data);
      break;
    }
    case "min": {
      statusValidate = data.length < Number(config.value);
      break;
    }
    default:
      break;
  }
  return statusValidate ? config.message : "";
};

export const validator = (
  data: ValidatorData,
  config: ValidatorConfig
): ValidatorData => {
  const errors: ValidatorData = {};
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod as keyof ValidatorMethod,
        data[fieldName],
        config[fieldName][
          validateMethod as keyof ValidatorMethod
        ] as ValidatorParams
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
