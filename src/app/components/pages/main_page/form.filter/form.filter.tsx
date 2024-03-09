import { Form } from "react-bootstrap";
import { propsFilter } from "../interfaces";
import uuid from "react-uuid";
import "../style.css";

const FormFilters = (props: propsFilter) => {
  return (
    <form className="main-form_container" key={uuid()}>
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
        onChange={(el)=>localStorage.setItem('formFilters',JSON.stringify({nameOfParam:el.target.value}))}
      >
        <option>Откройте меню выбора</option>
        {props.arrOfInfo.map((el) => {
          return el.key === props.filter_param && el.value.map((currentElem: any) => {
            return <option key={uuid()}>{currentElem}</option>;
          });
        })}
      </Form.Select>
    </form>
  );
};

export { FormFilters };
