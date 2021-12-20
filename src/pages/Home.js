import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import NewItemForm from "../components/NewItemForm";

const Home = () => {
  console.log("home");
  return (
    <Container
      sx={{
        height: "calc((100vh - 80px))",
        backgroundColor: "red",
        width: "100%",
      }}
    >
      <Typography color='primary'>Hello there</Typography>
      <NewItemForm onSubmit={console.log("megy")} />
    </Container>
  );
};

export default Home;
