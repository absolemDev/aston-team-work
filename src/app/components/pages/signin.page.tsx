import React from "react";
import { LoginFrom } from "../ui/forms/loginFrom";
import { Col, Row } from "react-bootstrap";

const SigninPage = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <LoginFrom />
      </Col>
    </Row>
  );
};

export { SigninPage };
