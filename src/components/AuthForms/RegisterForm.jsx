<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'; 
import { useState } from 'react';
import { Form, Input, RegisterBtn } from './authForms.styled';

const RegisterForm = () => {
    // const dispatch = useDispatch();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [nextPage, setNextPage] = useState(false);
    const [btnText, setBtnText] = useState('Next');
    // const [btnType, setBtnType] = useState('button');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClick = evt => {
        if (evt) {
            setNextPage(true);
            setBtnText('Register');
            // setBtnType('submit');
        }
    }

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
        <Form>
            {!nextPage && <Input
                label='Email'
                {...register("email", { required: 'This is required', pattern: { value: emailValidation, message: 'Check your email' } })}
                aria-invalid={errors.email ? "true" : "false"}
                type='email'
                placeholder="Email"
            />}
            {!nextPage && <Input
                label="Password"
                {...register("password", { required: 'This is required', minLength: { value: 7, message: 'Min length is 7' }, maxLength: { value: 32, message: 'Min length is 32' } })}
                aria-invalid={errors.password ? "true" : "false"}
                type='password'
                placeholder="Password"
            />}
            {!nextPage && <Input
                label="Confirm Password"
                {...register("password", { required: 'This is required', minLength: { value: 7, message: 'Min length is 7' } })}
                aria-invalid={errors.password ? "true" : "false"}
                type='password'
                placeholder="Confirm Password"
            />}
            {nextPage && <Input
                label="Name"
                {...register("name", { required: 'This is required' })}
                aria-invalid={errors.name ? "true" : "false"}
                type='text'
                placeholder="Name"
            />}
            {nextPage && <Input
                label="Location"
                {...register("location", { required: 'This is required' })}
                aria-invalid={errors.location ? "true" : "false"}
                type='text'
                placeholder="City, region"
            />}
            {nextPage && <Input
                label="Number"
                {...register("number", { required: 'This is required' })}
                aria-invalid={errors.number ? "true" : "false"}
                type='tel'
                placeholder="Mobile Phone"
            />}
            <RegisterBtn type='button' onClick={handleClick} active>{btnText}</RegisterBtn>
        </Form>
    )
}

export default RegisterForm;
        
=======
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Form, Input, RegisterBtn, BackBtn, ErrorText } from "./authForms.styled";
import { authSlice } from "redux/auth";
import { useRegisterUserMutation } from "redux/auth/authApi";

const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const { setToken } = authSlice;
  const dispatch = useDispatch();

  const [nextPage, setNextPage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setFocus,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (nextPage) {
      setFocus("name");
    }
    setFocus("email");
  }, [nextPage, setFocus]);

  const handleClick = () => {
    setNextPage(true);
  };

  const handleClickBack = () => {
    setNextPage(false);
  };

  const handleInputChange = () => {
    setIsDisabled(false);
  };

  const onSubmit = async ({ email, password, name, city, phone }) => {
    const result = await registerUser({ email, password, name, city, phone });
    dispatch(setToken(result.data.token));
  };

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const passwordRegex = /^\S*$/;
  const nameRegex = /[a-zA-Z]+/;
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      {isLoading}
      {!nextPage && (
        <div>
          <Input
            label="Email"
            {...register("email", {
              required: "This is required",
              pattern: { value: emailRegex, message: "Check your email" },
            })}
            type="email"
            placeholder="Email"
          />
          <ErrorText>{errors?.email && <p>{errors?.email?.message}</p>}</ErrorText>
          <Input
            label="Password"
            {...register("password", {
              required: "This is required",
              minLength: { value: 7, message: "Min length is 7" },
              maxLength: { value: 32, message: "Min length is 32" },
              pattern: { value: passwordRegex, message: "Password should not contain spaces" },
            })}
            type="password"
            placeholder="Password"
          />
          <ErrorText>{errors?.password && <p>{errors?.password?.message}</p>}</ErrorText>
          <Input
            label="Confirm Password"
            {...register("confirmPassword", {
              required: "This is required",
              validate: value => {
                if (watch("password") !== value) {
                  return "Your passwords do not match";
                }
              },
            })}
            type="password"
            placeholder="Confirm Password"
          />
          <ErrorText>{errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}</ErrorText>
        </div>
      )}
      {nextPage && (
        <div>
          <Input
            label="Name"
            onInput={handleInputChange}
            {...register("name", {
              required: "This is required",
              pattern: { value: nameRegex, message: "Enter only letters" },
            })}
            type="text"
            placeholder="Name"
          />
          <ErrorText>{errors?.name && <p>{errors?.name?.message}</p>}</ErrorText>
          <Input
            label="City"
            {...register("city", {
              pattern: { value: cityRegex, message: "Error. Example: Brovary, Kyiv" },
            })}
            type="text"
            placeholder="City, region"
          />
          <ErrorText>{errors?.city && <p>{errors?.city?.message}</p>}</ErrorText>
          <Input
            label="Phone"
            {...register("phone", {
              minLength: { value: 13, message: "Min length is 13" },
              maxLength: { value: 13, message: "Min length is 13" },
              pattern: { value: phoneRegex, message: "Number must be +3800000000 " },
            })}
            type="tel"
            placeholder="Mobile Phone"
          />
          <ErrorText>{errors?.phone && <p>{errors?.phone?.message}</p>}</ErrorText>
        </div>
      )}
      {!nextPage ? (
        <RegisterBtn type="button" onClick={handleClick} disabled={!isValid}>
          Next
        </RegisterBtn>
      ) : (
        <RegisterBtn type="submit" disabled={isDisabled}>
          Register
        </RegisterBtn>
      )}
      {nextPage && (
        <BackBtn type="button" onClick={handleClickBack}>
          Back
        </BackBtn>
      )}
    </Form>
  );
};

export default RegisterForm;
>>>>>>> dev
