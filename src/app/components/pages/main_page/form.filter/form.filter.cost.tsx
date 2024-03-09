import { Form } from "react-bootstrap";
import uuid from "react-uuid";
import "../style.css";

interface propsCost {
  cost: string[];
  name: string;
}

const FormFiltersCost = (props: propsCost) => {
  return (
    <form className="main-form_container" key={uuid()}>
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
        onChange={(el)=>localStorage.setItem('formFilters',JSON.stringify({cost:el.target.value}))}
      >
        <option>Откройте меню выбора</option>
        {props.cost.map((el) => {
          return <option key={uuid()}>{el}</option>
        })}
      </Form.Select>
    </form>
  );
};

export { FormFiltersCost };
