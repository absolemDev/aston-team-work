import { Col, Row } from "react-bootstrap";
import { RegisterForm } from "../ui";

const SignupPage = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <RegisterForm />
      </Col>
    </Row>
  );
};

export { SignupPage };
