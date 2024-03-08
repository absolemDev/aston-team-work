import { Form } from "react-bootstrap";
import uuid from "react-uuid";
import "../style.css";

interface propsFormat {
    format: string[];
    name: string;
  }

const FormFiltersFormat = (props: propsFormat) => {
  return (
    <form className="main-form_container" key={uuid()}>
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
      >
        <option>Откройте меню выбора</option>
        {props.format.map((el) => {
          return <option key={uuid()}>{el}</option>
            
        })}
      </Form.Select>
    </form>
  );
};

export { FormFiltersFormat };
