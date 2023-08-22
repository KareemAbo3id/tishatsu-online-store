import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../context/slices/usersApi.slice';
import { setUserInfo } from '../context/slices/auth.slice';
import FormContainer from '../containers/Form.container';
import { Button, FloatingLabel, Form, Image } from 'react-bootstrap';
import { BsBoxArrowInRight, BsFillPersonPlusFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import loginimage from '../assets/loginimage.png';
import { useDocTitle } from '../hooks/docTitle.hook';

export const LoginScreen = ({ documentTitle }) => {
  const [docTitle, setDocTitle] = useDocTitle(documentTitle);
  const [emailOrUsername, setEmailOrUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginProcces, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  React.useEffect(() => {
    // if user is logged in, direct to home page:
    if (userInfo) navigate('/');
  }, [navigate, userInfo]);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      // 1 get the response from the mutution with email and password passed in:
      const res = await loginProcces({ emailOrUsername, password }).unwrap();

      // 2 dispatch the action with response from mutution to update user info:
      dispatch(setUserInfo({ ...res }));

      // 3 direct to home page:
      navigate('/');

      // error:
    } catch (err) {
      toast.error(err?.data?.message || err?.error, { theme: 'colored' });
    }
  };

  return (
    <FormContainer
      leftContent={
        <div className="d-flex mb-md-5 flex-column align-items-center justify-content-center">
          <p className="fs-2 fw-light d-lg-none">Welcome back!</p>
          <Image src={loginimage} style={{ width: '70%' }} />
          <p className="fs-2 fw-light d-none d-lg-block">Welcome back!</p>
        </div>
      }
      rightContent={
        <Form
          onSubmit={loginHandler}
          className="px-4 mb-md-5 pb-3 d-flex flex-column justify-content-start align-items-stretch h-100"
          style={{ minWidth: '400px' }}
        >
          <h1 className="fs-5 py-3 text-center">Log In</h1>
          {/* Email */}
          <FloatingLabel
            label="Email address or username"
            className="mb-2"
            controlId="text"
          >
            <Form.Control
              type="text"
              required
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
          </FloatingLabel>

          {/* Password */}
          <FloatingLabel label="Password" className="mb-2" controlId="password">
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          {/* LoginScreen button */}
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

LoginScreen.propTypes = {
  documentTitle: PropTypes.string.isRequired,
};
