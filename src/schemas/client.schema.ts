import * as yup from "yup";

const createClientSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name requires at least 3 characters")
    .max(128, "Name cannot exceed 128 characters"),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "The password must contain an uppercase letter, a number and a special character."
    ),
});

export default createClientSchema;
