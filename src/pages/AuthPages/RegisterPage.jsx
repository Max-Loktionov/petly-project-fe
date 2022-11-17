import RegisterForm from "components/AuthForms/RegisterForm";
import { Section, Container, Title, Text, LogoLink, Wrap } from "./authPages.styled";

const RegisterPage = () => {
    return (
        <Wrap>
            <Section>
                <Container>
                    <Title>Registration</Title>
                    <RegisterForm />
                    <Text>Already have an account?
                        <LogoLink href="/login">Login</LogoLink>
                    </Text>
                </Container> 
            </Section>
        </Wrap>
    )
}

export default RegisterPage;