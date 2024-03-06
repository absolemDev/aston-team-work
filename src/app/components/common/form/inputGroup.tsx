import { ChangeEventHandler, memo, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface InputGroupProps {
  value: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
}

const FieldGroup = ({
  id,
  type = "text",
  label,
  name,
  error,
  ...props
}: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Form.Group className="mb-3" controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : type}
          name={name || id}
          {...props}
          isInvalid={!!error}
          className="rounded-0"
        />
        {type === "password" && (
          <Button variant="outline-secondary" onClick={toggleShowPassword}>
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </Button>
        )}
        {error && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </InputGroup>
    </Form.Group>
  );
};

const InputGroupMemo = memo(FieldGroup);

export { InputGroupMemo };
