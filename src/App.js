import { Router } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";

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
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
