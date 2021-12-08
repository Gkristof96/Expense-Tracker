import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setLoading(false);
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
          Sign in
        </Typography>
        <Box
          component='form'
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
            label='Email Address'
          />
          <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
          />
          <LoadingButton
            loading={loading}
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item>
              <Button onClick={props.onToggleAuthMode}>
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
