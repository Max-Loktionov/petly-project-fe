import { LoginForm } from "components/AuthForms";
import { Section, Container, Title, Text, LogoLink } from "./authPages.styled";

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <Title>Login</Title>
        <LoginForm />
        <Text>
          Don't have an account?
          <LogoLink href="/petly-project-fe/register">Registration</LogoLink>
        </Text>
      </Container>
    </Section>
  );
};

export default LoginPage;
