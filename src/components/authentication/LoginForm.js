import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { login } from "../../features/user/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email Must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((cred) => {
          dispatch(login(cred._tokenResponse.idToken));
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label='Remember me'
          />

          <Link component={RouterLink} variant='subtitle2' to='#'>
            Forgot password?
          </Link>
        </Stack>
        <LoadingButton
          fullWidth
          variant='contained'
          size='large'
          type='submit'
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
