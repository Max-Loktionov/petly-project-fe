import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormWrapper } from "./LoginForm.styled";
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
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"email"} placeholder={"Email"} {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type={"password"} placeholder={"Password"} {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>
    </FormWrapper>
  );
};
