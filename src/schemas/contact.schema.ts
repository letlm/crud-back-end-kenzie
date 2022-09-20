import * as yup from "yup";

const createContactSchema = yup.object().shape({
  email: yup.string().required("Email is required.").email("Email is invalid."),
  telephone: yup
    .string()
    .required("Telephone is required")
    .min(6, "Telephone requires at least 6 characters")
    .max(14, "Telephone cannot exceed 14 characters"),
});

export default createContactSchema;
