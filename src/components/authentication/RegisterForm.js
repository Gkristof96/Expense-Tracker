import { useState } from "react";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { FormikProvider, Form, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { login } from "../../features/user/userSlice";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      .email("Email Must be a valid email address!")
      .required("Email is required"),
    password: Yup.string().required("Password is required!"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password should match!")
      .required("Password is required!"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((cred) => {
          updateProfile(auth.currentUser, {
            displayName: `${values.firstName} ${values.lastName}`,
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/expense-tracker-a6a87.appspot.com/o/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg?alt=media&token=57b9c49c-b7e4-484f-b098-5e129edda3da",
          })
            .then(() => {
              console.log("User registered with extra data:", auth);
            })
            .catch((err) => {
              console.log(
                "User registration with extra data failed: ",
                err.message
              );
            });
          dispatch(login(cred._tokenResponse.idToken));
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log("User register failed: ", err.message);
        });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleShowCPassword = () => {
    setShowCPassword((show) => !show);
  };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
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

          <TextField
            fullWidth
            autoComplete='current-password'
            type={showCPassword ? "text" : "password"}
            label='Confirm Password'
            {...getFieldProps("cPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowCPassword} edge='end'>
                    {showCPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.cPassword && errors.cPassword)}
            helperText={touched.cPassword && errors.cPassword}
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
