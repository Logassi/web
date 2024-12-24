import { object, string, ref } from "yup";

const RegisterSchema = object({
  email: string().email("Invalid email format").required("Email is required"),
  username: string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default RegisterSchema;
