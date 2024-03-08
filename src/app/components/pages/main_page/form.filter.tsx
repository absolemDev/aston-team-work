import { Form } from "react-bootstrap";
import { propsFilter } from "./interfaces";
import uuid from "react-uuid";
import "./style.css";

const FormFilters = (props: propsFilter) => {
  const arrOfParams: any = { cost: props.cost, format: props.format };
  return (
    <form className="main-form_container">
      <p>{props.name}</p>
      <Form.Select
        aria-label="Default select example"
        className="filter-set_container"
      >
        <option>Откройте меню выбора</option>
        {props.arrOfInfo.map((el, i) => {
          return el.key === props.filter_param
            ? el.value.map((currentElem: any) => {
                return <option key={uuid()}>{currentElem}</option>;
              })
            : (arrOfParams["cost"] !== undefined ||
                arrOfParams["format"] !== undefined) &&
                arrOfParams[`${props.filter_param}`].map((el: string) => {
                  return <option key={uuid()}>{el}</option>;
                });
        })}
      </Form.Select>
    </form>
  );
};

export { FormFilters };
