import { Router } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#357a38",
    },
  },
  typography: {
    fontFamily: "Oswald",
    fontWeightLight: 400,
  },
});

function App() {
  const dispatch = useDispatch();
  const unsubAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(login(user.accessToken));
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
