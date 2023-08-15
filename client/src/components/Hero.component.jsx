import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <Container className="mt-4 d-flex flex-column gap-3 align-content-center justify-content-between">
      <h1 className="display-2 text-center">MERN authentication App</h1>
      <Card>
        <Card.Body className="text-center">
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
          library. by:{' '}
          <a className="link-dark" href="https://github.com/KareemAbo3id">
            Kareem Aboeid
          </a>
        </Card.Body>
        <Card.Body className="d-flex justify-content-center flex-row gap-2">
          <LinkContainer to="/login">
            <Button
              variant="link"
              className="text-uppercase link-primary text-decoration-none"
            >
              Login
            </Button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Button variant="primary" className="text-uppercase">
              get started
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Hero;
