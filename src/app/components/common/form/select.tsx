import { ChangeEventHandler, memo } from "react";
import { Col, Form } from "react-bootstrap";
import uuid from "react-uuid";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  options: Option[] | string[];
  defaultOption?: string;
  id: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  label?: string;
}

const Select = ({
  id,
  label,
  name,
  options,
  defaultOption,
  ...props
}: SelectProps) => {
  return (
    <Form.Group as={Col} className="mb-3" controlId={id}>
      {label && (
        <Form.Label className="d-block text-center">{label}</Form.Label>
      )}
      <Form.Select {...props} name={name || id} className="rounded-0">
        {defaultOption && <option value="">{defaultOption}</option>}
        {options.map((option) => (
          <option
            value={typeof option === "string" ? option : option.value}
            key={uuid()}
          >
            {typeof option === "string" ? option : option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

const SelectMemo = memo(Select);

export { SelectMemo };
