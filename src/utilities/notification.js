import { toast } from "react-toastify";

export const loginError = message => toast.error(message);
export const registerError = () => toast.error('User with this email already exists!');
