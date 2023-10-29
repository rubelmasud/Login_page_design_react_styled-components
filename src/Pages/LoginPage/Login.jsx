import image from "../../assets/Group 3608.png";
import styled from "styled-components";
import LoginForm from "../../Components/LoginSection";
import LoginSection from "../../Components/LoginSection";

const Login = () => {
  return (
    <div>
      <Container>
        <ImageSection>
          <img src={image} alt="" />
        </ImageSection>
        <LoginSection />
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    flex-direction: column;
    height: 400px;
  }
`;

export default Login;
