import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Input, RegisterBtn } from "./authForms.styled";

const RegisterForm = () => {
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [nextPage, setNextPage] = useState(false);
  const [btnText, setBtnText] = useState("Next");
  // const [btnType, setBtnType] = useState('button');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = evt => {
    if (evt) {
      setNextPage(true);
      setBtnText("Register");
      // setBtnType('submit');
    }
  };

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

  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return (
    <Form>
      {!nextPage && (
        <Input
          label="Email"
          {...register("email", { required: "This is required", pattern: { value: emailValidation, message: "Check your email" } })}
          aria-invalid={errors.email ? "true" : "false"}
          type="email"
          placeholder="Email"
        />
      )}
      {!nextPage && (
        <Input
          label="Password"
          {...register("password", {
            required: "This is required",
            minLength: { value: 7, message: "Min length is 7" },
            maxLength: { value: 32, message: "Min length is 32" },
          })}
          aria-invalid={errors.password ? "true" : "false"}
          type="password"
          placeholder="Password"
        />
      )}
      {!nextPage && (
        <Input
          label="Confirm Password"
          {...register("password", { required: "This is required", minLength: { value: 7, message: "Min length is 7" } })}
          aria-invalid={errors.password ? "true" : "false"}
          type="password"
          placeholder="Confirm Password"
        />
      )}
      {nextPage && (
        <Input
          label="Name"
          {...register("name", { required: "This is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          type="text"
          placeholder="Name"
        />
      )}
      {nextPage && (
        <Input
          label="Location"
          {...register("location", { required: "This is required" })}
          aria-invalid={errors.location ? "true" : "false"}
          type="text"
          placeholder="City, region"
        />
      )}
      {nextPage && (
        <Input
          label="Number"
          {...register("number", { required: "This is required" })}
          aria-invalid={errors.number ? "true" : "false"}
          type="tel"
          placeholder="Mobile Phone"
        />
      )}
      <RegisterBtn type="button" onClick={handleClick} active>
        {btnText}
      </RegisterBtn>
    </Form>
  );
};

export default RegisterForm;
