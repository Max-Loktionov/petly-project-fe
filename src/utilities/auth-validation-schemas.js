import * as yup from "yup";

export const loginFormSchima = yup.object({
  email: yup.string().email("Email should be like this: email@domain.com").required(),
  password: yup.string().min(6, "At least 6 characters"),
});
