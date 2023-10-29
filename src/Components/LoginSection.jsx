import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginSection = () => {
  return (
    <LoginForm>
      <FormTitle>Login</FormTitle>
      <InputSection>
        <InputGroup>
          <InputLabel>Login ID</InputLabel>
          <InputField type="text" placeholder="Enter Login ID" />
        </InputGroup>
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <InputField type="password" placeholder="Enter Password" />
        </InputGroup>
        <CheckboxContainer>
          <div>
            <CheckboxInput />
            <CheckboxLabel type="checkbox" id="rememberMe">
              Remember Me
            </CheckboxLabel>
          </div>
          <ForgetPasswordLink>Change Password</ForgetPasswordLink>
        </CheckboxContainer>
        <div>
          <CheckboxInput />
          <CheckboxLabel type="checkbox" id="agreeTerms">
            Agree to <HyperLink>Terms & Conditions</HyperLink>
          </CheckboxLabel>
        </div>
      </InputSection>

      <LoginButton>Login</LoginButton>
      <RegisterPageLink>
        Don’t have an account?
        <HyperLink> Register Here</HyperLink>
      </RegisterPageLink>
    </LoginForm>
  );
};

const LoginForm = styled.div`
  width: 100%;
  font-family: Poppins;
  padding: 30px;
  border-radius: 12px;
  background: #fff;
  margin: 0px 30px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 96%;
  }
`;

const FormTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  display: inline;
`;

const InputSection = styled.div`
  margin: 20px 0;
  width: 96%;
`;

const InputGroup = styled.div`
  margin: 10px 0;
`;

const InputField = styled.input`
  height: 30px;
  outline: none;
  width: 90%;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  padding: 0 10px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #04072f;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })``;
const CheckboxLabel = styled.span`
  color: #737b86;
`;

const ForgetPasswordLink = styled.a`
  cursor: pointer;
  color: #f78719;
  margin: 0px 40px;
  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

const HyperLink = styled.a`
  color: #f78719;
  text-decoration: underline;
  text-align: start;
  cursor: pointer;
`;

const LoginButton = styled.a`
  height: 36px;
  border-radius: 8px;
  background-color: #1575a7;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  cursor: pointer;
`;

const RegisterPageLink = styled.p`
  margin-top: 30px;
`;

export default LoginSection;
