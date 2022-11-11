import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'; 
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';
import { Button } from '../Button';
import { Form } from './registerForm.styled';
import { Input } from './registerForm.styled';

const RegisterForm = () => {
    // const dispatch = useDispatch();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // const handleChange = ({ target: { name, value } }) => {
    //     switch (name) {
    //         case 'email':
    //             return setEmail(value);
    //         case 'password':
    //             return setPassword(value);
    //         default:
    //             return;
    //     }
    // }

    // const onSubmit = data => {
    //     console.log(data);
    //     dispatch(authOperations.register({ email, password }));
    //     setEmail('');
    //     setPassword('');
    //     reset();
    // }

    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return (
        <Form color={"black"}>
            <Input
                label='Email'
                {...register("email", { required: 'This is required', pattern: { value: emailValidation, message: 'Check your email' } })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Email"
            />
            <Input
                label="Password"
                {...register("password", { required: 'This is required', minLength: { value: 7, message: 'Min length is 7' } })}
                aria-invalid={errors.password ? "true" : "false"}
                type='password'
                placeholder="Password"
            />
            <Input
                label="Confirm Password"
                {...register("password", { required: 'This is required', minLength: { value: 7, message: 'Min length is 7' } })}
                aria-invalid={errors.password ? "true" : "false"}
                type='password'
                placeholder="Confirm Password"
            />
            <Input type='submit' />
        </Form>
    )
}

export default RegisterForm;
        