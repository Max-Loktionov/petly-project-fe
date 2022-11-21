import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { loginError } from "utilities/notification";
import { useLoginUserMutation } from "redux/auth/authApi";
import { authSlice } from "redux/auth";
import { Form, Input, RegisterBtn, ErrorText } from "./authForms.styled";
import { loginFormSchima } from "utilities/auth-validation-schemas";
import { fetchErrorHendler } from "utilities/fetchErrorHendler";

export const LoginForm = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { setToken } = authSlice;
  const dispatch = useDispatch();
  const {
    reset,
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchima) });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit = async data => {
    try {
      const result = await loginUser(data);
      if (result.error) {
        const errorMessage = fetchErrorHendler(result.error);
        throw new Error(errorMessage);
      }
      dispatch(setToken(result.data.token));
      reset();
    } catch (error) {
      loginError(error.message);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type={"email"} placeholder={"Email"} {...register("email")} />
      <ErrorText>{errors.email?.message}</ErrorText>
      <Input type={"password"} placeholder={"Password"} {...register("password")} />
      <ErrorText>{errors.password?.message}</ErrorText>
      <RegisterBtn type="submit">{isLoading ? "Loading" : "Login"}</RegisterBtn>
      <ToastContainer />
    </Form>
  );
};
