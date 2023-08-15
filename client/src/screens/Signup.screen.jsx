import React from 'react';
import FormContainer from '../containers/Form.container';
import { Button, FloatingLabel, Form, Image } from 'react-bootstrap';
import { BsBoxArrowInRight, BsFillPersonPlusFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import signupimage from '../assets/signupimage.jpg';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [gender, setGender] = React.useState('');

  const signupHandler = async (e) => {
    e.preventDefault();
    console.log('Signed up');
  };

  return (
    <FormContainer
      leftContent={
        <div className="d-flex flex-column align-items-center">
          <Image src={signupimage} style={{ width: '70%' }} />
          <p className="display-5">Hello there!</p>
          <p className="fs-6">
            This is a boilerplate for MERN authentication app by Kareem Aboeid
          </p>
        </div>
      }
      rightContent={
        <Form
          onSubmit={signupHandler}
          className="px-4 border-secondary-subtle rounded-3 d-flex flex-column justify-content-center align-items-stretch w-75 h-100"
        >
          <h1 className="fs-5 py-3 text-center">Create your account</h1>
          {/* Name */}
          <FloatingLabel label="Your Name *" className="mb-2" controlId="name">
            <Form.Control
              required
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>

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

          {/* repeat Password */}
          <FloatingLabel
            label="Repeat Password *"
            className="mb-2"
            controlId="repeatPassword"
          >
            <Form.Control
              type="password"
              required
              placeholder="xxxxxxxx"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </FloatingLabel>

          {/* gender */}
          <FloatingLabel
            label="Your Gender *"
            controlId="gender"
            className="mb-2"
          >
            <Form.Select
              required
              aria-label="Floating label select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="ratherNotSay">Rather not say</option>
            </Form.Select>
          </FloatingLabel>

          {/* Signup button */}
          <div className="d-flex my-2">
            <Button
              type="submit"
              variant="success"
              className="py-2 w-100 d-flex gap-2 justify-content-center align-items-center"
            >
              <BsFillPersonPlusFill size={20} />
              <span className="text-uppercase">Sign Up</span>
            </Button>
          </div>
          <hr />
          {/* Login button */}
          <div className="d-flex flex-column align-items-stretch my-2">
            <LinkContainer to="/login">
              <Button
                type="button"
                variant="outline-dark"
                className="py-2 w-100 d-flex gap-2 justify-content-center align-items-center"
              >
                <BsBoxArrowInRight size={17} />
                <span className="fs-6">Already have an account? Sign in</span>
              </Button>
            </LinkContainer>
          </div>
        </Form>
      }
    ></FormContainer>
  );
};

export default Signup;
