import { LoginForm } from "components/LoginForm";
import { Container, FormTitle, FormWrapper } from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <main>
      <Container>
        <FormWrapper>
          <FormTitle>Login</FormTitle>
          <LoginForm />
        </FormWrapper>
      </Container>
    </main>
  );
};

export default LoginPage;
