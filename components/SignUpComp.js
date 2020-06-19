import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUpCompStyles = styled.div`
  h1 {
    font-family: 'MuseoModerno', cursive;
    font-size: 40px;
    text-transform: uppercase;
    color: #ff8200;
    text-align: center;
    margin-bottom: 20px !important;
  }

  .btn {
    background: #ff8200;
    width: 100%;
    display: block;
    margin: auto;
    max-width: 600px;
    font-size: 14px;
    line-height: 50px;
    height: 50px;
    padding: 0 30px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    border: none;
    outline: none;
  }
  .social-btns-container {
    padding-top: 10px;
    /* margin: 0 auto; */
  }
  .social-btn {
    width: 100%;
    height: 50px;
    text-align: center;
    text-transform: none;
    margin: 1rem 0rem;
    padding-left: 0;
    padding-right: 0;
    border-radius: 2px;
    font-weight: bold;
    border: none;
    outline: none;
    max-width: 220px;
    p {
      color: #fff;
      padding-left: 0.5rem;
    }
  }
  .t-btn {
    background: #1da1f2;
    .t-icon {
      color: #fff;
      font-size: 3rem;
    }
  }

  .fb-btn {
    background-color: #4267b2;
    .fb-icon {
      color: #fff;
      font-size: 4rem;
    }
  }

  .g-btn {
    background-color: #4285f4;
    .g-icon {
      background-color: #fff;
      font-size: 4.5rem;
    }
  }
  .or {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    border: 0.5px solid #e8e8e8;
    background-color: #fff;
    color: #bcc3cd;
    padding: 5px;
    span {
      font-weight: 100 !important;
      font-style: italic;
    }
  }
`;
function SignUp() {
  return (
    <SignUpCompStyles className="container">
      <div className="heading">
        <h1>sign up</h1>
      </div>

      <button className="btn">Sign up</button>
      <div className="container d-flex justify-content-center">
        <button className="or my-5 ">
          <span>OR</span>
        </button>
      </div>
      <div className="container">
        <div className="social-btns-container row d-flex justify-content-center">
          <button className="col-sm d-flex justify-content-start align-items-center social-btn fb-btn mx-3">
            <FaFacebookSquare className="fb-icon" />
            <p className="d-flex align-items-center justify-content-start">
              Continue with Facebook
            </p>
          </button>
          <button className="col-sm  d-flex justify-content-start align-items-center social-btn g-btn mx-3">
            <FcGoogle className="g-icon mx-1" />
            <p className="d-flex align-items-center justify-content-center">
              sign in with Google
            </p>
          </button>
          <button className="col-sm d-flex justify-content-start justify-content-sm-start align-items-center social-btn t-btn mx-3">
            <FaTwitter className="t-icon ml-2 mr-3" />
            <p className="d-flex align-items-center justify-content-center">
              Sign in with twitter
            </p>
          </button>
        </div>
      </div>
    </SignUpCompStyles>
  );
}

export default SignUp;
