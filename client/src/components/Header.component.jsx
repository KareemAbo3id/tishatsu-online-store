import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { NavDropdown, Badge, Form, Row, Col, Offcanvas } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
import logo from '../assets/logo/tishatsu-logo192.png';
import { BsCaretDownFill, BsCart3, BsPinMap } from 'react-icons/bs';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // address modal states:
  const [showAddressSearchModal, setShowAddressSearchModal] =
    React.useState(false);
  const handleCloseAddressSearchModal = () => setShowAddressSearchModal(false);
  const handleShowAddressSearchModal = () => setShowAddressSearchModal(true);

  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        key="lg"
        className="mb-3"
      >
        <Container fluid>
          <Form className="d-flex w-100">
            <Form.Control
              type="search"
              placeholder="Search"
              className="bg-dark"
              aria-label="Search"
            />
          </Form>
        </Container>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src={logo} width={80} alt="tishatsu logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <div className="d-flex flex-column justify-content-center">
              <p className="fs-6 text-secondary m-0">Deliver to:</p>
              <Button
                variant="link"
                className="fs-6 link-underline-opacity-50 link-primary p-0"
                onClick={handleShowAddressSearchModal}
              >
                Select Address <BsCaretDownFill size="12" />
              </Button>
            </div>
          </Nav>
          <Nav className="ms-auto px-4">
            <div className="text-white">
              <BsCart3 size={25} />
            </div>
          </Nav>

          {/*
          ////////////
          Offcanvas
          ////////////
          */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            className="bg-dark text-white"
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="border-bottom border-secondary"
            >
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 px-4 me-xs-auto">
              <Form className="d-flex w-100">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="me-auto text-center d-lg-none">
              {userInfo ? (
                <>
                  <LinkContainer to="/profile">
                    <Nav.Link>profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/orders">
                    <Nav.Link>orders</Nav.Link>
                  </LinkContainer>
                  <Nav.Link>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      <Button className="text-uppercase" type="submit">
                        get started
                      </Button>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
            <Nav className="me-auto text-center d-none d-lg-block">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.username} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <hr />
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      <Button className="text-uppercase" type="submit">
                        get started
                      </Button>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>

          <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Container>
      </Navbar>
      <Modal
        show={showAddressSearchModal}
        onHide={handleCloseAddressSearchModal}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 fw-bold d-flex align-items-center justify-content-center gap-2">
            <BsPinMap size="16" /> Add New Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>search erea</Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-between gap-2">
          <Button variant="secondary" onClick={handleCloseAddressSearchModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseAddressSearchModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
