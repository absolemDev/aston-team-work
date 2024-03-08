import { Form, InputGroup } from "react-bootstrap";
import "./style.css";

export const Search = ({currentSearch}:any) => {
  return (
    <div>
      <p className="form-input_header">Поиск</p>
      <InputGroup
        className="mb-3 form-input"
      >
        <Form.Control aria-describedby="inputGroup-sizing-default" 
          onChange={(e)=>currentSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};
