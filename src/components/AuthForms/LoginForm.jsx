import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input, RegisterBtn } from "./authForms.styled";
import { loginFormSchima } from "utilities/auth-validation-schemas";

export const LoginForm = () => {
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

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type={"email"} placeholder={"Email"} {...register("email")} />
      <p>{errors.email?.message}</p>
      <Input type={"password"} placeholder={"Password"} {...register("password")} />
      <p>{errors.password?.message}</p>
      <RegisterBtn type="submit">Login</RegisterBtn>
    </Form>
  );
};
