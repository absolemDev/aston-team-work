import React, {ChangeEvent} from 'react';
import {Container, Form} from "react-bootstrap";
import style from "./itemsPerPage.module.css"

 type ItemsPerPageType = {
   onChangeHandlerRange: (e: ChangeEvent<HTMLSelectElement>) => void,
   isLoading: boolean,
 }

const ItemsPerPage = ({onChangeHandlerRange, isLoading} : ItemsPerPageType) => {
  return (
    <Container className="d-flex align-items-center">
      <span>Показать</span>
        <Form.Select className={`${style.select} m-2`}
                     defaultValue={16}
                     onChange={onChangeHandlerRange}
                     disabled={isLoading}>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
          <option value={24}>24</option>
        </Form.Select>
      <span>карточек на странице.</span>
    </Container>
  );
};

export { ItemsPerPage };
