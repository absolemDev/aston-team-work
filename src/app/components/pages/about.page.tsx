import {Col, Row, Image} from "react-bootstrap";
import describeSource from "./../../describe.json"

const AboutPage = () => {
  return (
  <Col>
    <Row>
    <span className="text-uppercase text-center p-3">{describeSource.aboutPage.title}</span>
    </Row>
    <Row>
      <span className="text-center p-2">{describeSource.aboutPage.describe}</span>
    </Row>
    <Row>
      <span className="text-center p-2 mb-3">{describeSource.aboutPage.aboutCharacter}</span>
    </Row>
    <Row>
      <Image src={describeSource.aboutPage.urlImg}></Image>
    </Row>
  </Col>
  );
};

export { AboutPage };
