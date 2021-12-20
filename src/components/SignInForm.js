import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../features/user/userSlice";

import { useDispatch } from "react-redux";

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
<<<<<<< HEAD
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setLoading(false);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/expense-tracker-a6a87.appspot.com/o/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg?alt=media&token=57b9c49c-b7e4-484f-b098-5e129edda3da",
        }).then(() => {
          console.log(auth);
=======
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        // ...
      } else {
        return res.json().then((data) => {
          // show an error modal
          console.log(data);
>>>>>>> b5ae801a3e0c7ee1542cc18d822e472cefeae706
        });
        dispatch(login(cred._tokenResponse.idToken));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                fullWidth
                label='Full name'
                name='name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                fullWidth
                label='Email Address'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
              />
            </Grid>
          </Grid>
          <LoadingButton
            loading={loading}
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </LoadingButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button variant='text' onClick={props.onToggleAuthMode}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInForm;
