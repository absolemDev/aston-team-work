import { Col, Row } from "react-bootstrap";
import { LoginFrom } from "#ui";

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
