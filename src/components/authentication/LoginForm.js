import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const LoginForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <form onSubmit={submitHandler}>
      <Stack spacing={3}>
        <TextField type='email' fullWidth label='Email address' />
        <TextField type='password' fullWidth label='Password' />
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ my: 2 }}
        >
          <FormControlLabel control={<Checkbox />} label='Remember me' />

          <Link component={RouterLink} variant='subtitle2' to='#'>
            Forgot password?
          </Link>
        </Stack>
        <LoadingButton fullwidth variant='contained' size='large' type='submit'>
          Login
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default LoginForm;
