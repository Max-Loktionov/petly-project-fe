import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { loginError } from "utilities/notification";
import { useLoginUserMutation } from "redux/auth/authApi";
import { authSlice } from "redux/auth";
import { Form, Input, RegisterBtn } from "./authForms.styled";
import { loginFormSchima } from "utilities/auth-validation-schemas";

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
      dispatch(setToken(result.data.token));
      console.log(result.data.token);
    } catch (error) {
      loginError(error.message);
      console.log(error);
    }
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type={"email"} placeholder={"Email"} {...register("email")} />
      <p>{errors.email?.message}</p>
      <Input type={"password"} placeholder={"Password"} {...register("password")} />
      <p>{errors.password?.message}</p>
      <RegisterBtn type="submit">{isLoading ? "Loading" : "Login"}</RegisterBtn>
      <ToastContainer />
    </Form>
  );
};
