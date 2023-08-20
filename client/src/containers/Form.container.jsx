import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ leftContent, rightContent }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          {leftContent}
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          {rightContent}
        </Col>
      </Row>
      {/* ////////////////////////////// */}
      {/* ////////////////////////////// */}
      {/* ////////////////////////////// */}
      {/* <Row className="justify-content-md-center mt-2">
        <Col xs={10} md={4}>
          {children}
        </Col>
      </Row> */}
    </Container>
  );
};

FormContainer.propTypes = {
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default FormContainer;
