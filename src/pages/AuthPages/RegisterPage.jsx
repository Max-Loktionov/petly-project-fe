import RegisterForm from "components/AuthForms/RegisterForm";
import { Section, Container, Title, Text, LogoLink, Wrap } from "./authPages.styled";

const RegisterPage = () => {
  return (
    <Section>
      <Wrap paddingTopTablet={241} paddingTopDesktop={114}>
        <Container>
          <Title>Registration</Title>
          <RegisterForm />
          <Text>
            Already have an account?
            <LogoLink href="/petly-project-fe/login">Login</LogoLink>
          </Text>
        </Container>
      </Wrap>
    </Section>
  );
};

export default RegisterPage;
