import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <AiOutlineGithub classname="git" />
        <h1>github data</h1>
        <button className="btn" onClick={loginWithRedirect}>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  svg {
    font-size: 20rem;
    scale: 1;
    z-index: -1;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
