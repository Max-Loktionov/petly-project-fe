import RegisterForm from "components/AuthForms/RegisterForm";
import { Section, Container, Title, Text, LogoLink } from "./authPages.styled";

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <Title>Registration</Title>
        <RegisterForm />
        <Text>
          Already have an account?
          <LogoLink href="/petly-project-fe/login">Login</LogoLink>
        </Text>
      </Container>
    </Section>
  );
};

export default RegisterPage;
