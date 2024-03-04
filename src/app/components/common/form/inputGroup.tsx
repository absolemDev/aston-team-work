import { ChangeEventHandler, memo } from "react";
import { Form } from "react-bootstrap";

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

const InputGroup = ({
  id,
  type = "text",
  label,
  name,
  error,
  ...props
}: InputGroupProps) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name || id}
        {...props}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

const InputGroupMemo = memo(InputGroup);

export { InputGroupMemo };
