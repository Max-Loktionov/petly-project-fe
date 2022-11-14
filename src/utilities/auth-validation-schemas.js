import * as yup from "yup";

export const loginFormSchima = yup.object({
  email: yup.string().email("Email should be like: email@domain.com").required(),
  password: yup.string().required(),
});
