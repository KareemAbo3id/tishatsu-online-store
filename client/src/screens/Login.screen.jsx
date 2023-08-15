import React from 'react';
import FormContainer from '../containers/Form.container';
import { Button, FloatingLabel, Form, Image } from 'react-bootstrap';
import { BsBoxArrowInRight, BsFillPersonPlusFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import signupimage from '../assets/signupimage.jpg';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log('logged in');
  };

  return (
    <FormContainer
      leftContent={
        <div className="d-flex flex-column align-items-center">
          <Image src={signupimage} style={{ width: '70%' }} />
          <p className="display-5">Welcome back, Log In!</p>
        </div>
      }
      rightContent={
        <Form
          onSubmit={loginHandler}
          className="px-4 border-secondary-subtle rounded-3 d-flex flex-column justify-content-center align-items-stretch w-75 h-100"
        >
          <h1 className="fs-5 py-3 text-center">Log In</h1>
          {/* Email */}
          <FloatingLabel
            label="Email address *"
            className="mb-2"
            controlId="email"
          >
            <Form.Control
              type="email"
              required
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          {/* Password */}
          <FloatingLabel
            label="Password *"
            className="mb-2"
            controlId="password"
          >
            <Form.Control
              type="password"
              required
              placeholder="xxxxxxxx"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          {/* Login button */}
          <div className="d-flex my-2">
            <Button
              type="submit"
              variant="primary"
              className="py-2 w-100 d-flex gap-2 justify-content-center align-items-center"
            >
              <BsBoxArrowInRight size={20} />
              <span className="text-uppercase">Login</span>
            </Button>
          </div>
          <hr />
          {/* Signup button */}
          <div className="d-flex flex-column align-items-stretch my-2">
            <LinkContainer to="/signup">
              <Button
                type="button"
                variant="outline-success"
                className="py-2 w-100 d-flex gap-2 justify-content-center align-items-center"
              >
                <BsFillPersonPlusFill size={17} />
                <span className="fs-6">Create New Account</span>
              </Button>
            </LinkContainer>
          </div>
        </Form>
      }
    ></FormContainer>
  );
};

export default Login;
