import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Form, Input, RegisterBtn, NextBtn, BackBtn, ErrorText, ButtonWrapper, ButtonEye } from "./authForms.styled";
import { authSlice } from "redux/auth";
import { useRegisterUserMutation } from "redux/auth/authApi";
import { useNavigate } from "react-router-dom";
import { registerError } from "utilities/notification";
import { ToastContainer } from "react-toastify";
import hidden from "img/eye-off.svg";
import view from "img/eye.svg";

const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const { setToken } = authSlice;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);
  const [nextPage, setNextPage] = useState(false);
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

  const onSubmit = async ({ email, password, name, city, phone }) => {
    try {
      city = city === "" ? (city = "no info") : city;
      phone = phone === "" ? (phone = "no info") : phone;

      const result = await registerUser({ email, password, name, city, phone });
      dispatch(setToken(result.data.token));
      navigate("/user");
    } catch (error) {
      registerError();
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
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
          <ButtonWrapper>
            <Input
              label="Password"
              {...register("password", {
                required: "This is required",
                minLength: { value: 7, message: "Min length is 7" },
                maxLength: { value: 32, message: "Min length is 32" },
                pattern: { value: passwordRegex, message: "Password should not contain spaces" },
              })}
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <ButtonEye
              name="showPass"
              onMouseDown={() => setShowPass(true)}
              onTouchStart={() => setShowPass(true)}
              onMouseUp={() => setShowPass(false)}
              onTouchEnd={() => setShowPass(false)}
            >
              <img src={showPass ? view : hidden} alt="button view/hidden password" />
            </ButtonEye>
          </ButtonWrapper>

          <ErrorText>{errors?.password && <p>{errors?.password?.message}</p>}</ErrorText>
          <ButtonWrapper>
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
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
            ></Input>
            <ButtonEye
              name="showConfirmPass"
              onMouseDown={() => setConfirmPass(true)}
              onTouchStart={() => setConfirmPass(true)}
              onMouseUp={() => setConfirmPass(false)}
              onTouchEnd={() => setConfirmPass(false)}
            >
              <img src={showConfirmPass ? view : hidden} alt="button view/hidden password" />
            </ButtonEye>
          </ButtonWrapper>

          <ErrorText>{errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}</ErrorText>
        </div>
      )}
      {nextPage && (
        <div>
          <Input
            label="Name"
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
        <NextBtn type="button" onClick={handleClick} disabled={!isValid}>
          Next
        </NextBtn>
      ) : (
        <RegisterBtn type="submit">Register</RegisterBtn>
      )}
      {nextPage && (
        <BackBtn type="button" onClick={handleClickBack}>
          Back
        </BackBtn>
      )}
      <ToastContainer />
    </Form>
  );
};

export default RegisterForm;
