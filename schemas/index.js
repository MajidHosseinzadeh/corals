import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const schema = yup.object().shape({
    username: yup
    .string()
    .min(3)
    .required("Requierd"),

    email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),

    password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password"})
    .required("Required"),

    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
})

export const loginSchema = yup.object().shape({
    username: yup
    .string()
    .min(3)
    .required("Requierd"),

    password: yup
    .string()
    .min(8)
    .required("Required"),

})