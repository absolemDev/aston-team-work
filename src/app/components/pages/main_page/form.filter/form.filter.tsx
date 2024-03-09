import { Form } from "react-bootstrap";
import { propsFilter } from "../interfaces";
import uuid from "react-uuid";
import "../style.css";
import { useState } from "react";

const FormFilters = (props: propsFilter) => {
  const [param, setParam] = useState("");
  return (
    <form className="main-form_container" key={uuid()}>
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
        onChange={(el) => {
          setParam(el.target.value);
          props.change(props.filter_param,el.target.value);
        }}
        value={param}
      >
        <option>Откройте меню выбора</option>
        {props.arrOfInfo.map((el) => {
          return (
            el.key === props.filter_param &&
            el.value.map((currentElem: any) => {
              return <option key={uuid()}>{currentElem}</option>;
            })
          );
        })}
      </Form.Select>
    </form>
  );
};

export { FormFilters };
