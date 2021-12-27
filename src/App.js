import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

// Components
import Layout from "./components/Layout/Layout";

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
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
