import RegisterForm from "components/RegisterForm/RegisterForm";
import { Header } from "./registerPage.styled";


const RegisterPage = () => {
    return (
        <>
            <Header>Registration</Header>
            <RegisterForm />
            <p>Already have an account?
                <a href="/">Login</a>
            </p>
        </>
    )
}

export default RegisterPage;