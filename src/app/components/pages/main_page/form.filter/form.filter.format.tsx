import { Form } from "react-bootstrap";
import uuid from "react-uuid";
import "../style.css";
import { useState } from "react";

interface propsFormat {
    format: string[];
    name: string;
    change:any;
  }

const FormFiltersFormat = (props: propsFormat) => {
  const [param, setParam] = useState('');
  return (
    <form className="main-form_container" key={uuid()}>
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
        onChange={(el)=>{setParam(el.target.value);props.change('format',el.target.value)}}
        value={param}
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
