import { useState } from "react";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormikProvider, Form, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Firstname is required!"),
    lastName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Firstname is required!"),
    email: Yup.string()
      .email("Email Must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      console.log(
        "registered",
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate>
        <Stack spacing={3}>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
            <TextField
              fullWidth
              label='First name'
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label='Last name'
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete='username'
            type='email'
            label='Email address'
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete='current-password'
            type={showPassword ? "text" : "password"}
            label='Password'
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword} edge='end'>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
