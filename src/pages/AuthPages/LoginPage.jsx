import { LoginForm } from "components/AuthForms";
import { Section, Container, Title, Text, LogoLink, Wrap } from "./authPages.styled";

const LoginPage = () => {
  return (
    <Section>
      <Wrap paddingTopTablet={276} paddingTopDesktop={148}>
        <Container>
          <Title>Login</Title>
          <LoginForm />
          <Text>
            Don't have an account?
            <LogoLink href="/petly-project-fe/register">Registration</LogoLink>
          </Text>
        </Container>
      </Wrap>
    </Section>
  );
};

export default LoginPage;
