import {
  Avatar,
  Card,
  IconButton,
  Typography,
  Button,
  Modal,
  Paper,
  Stack,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { firestore, auth } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import Grid from "@mui/material/Grid";

const ListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expenseRef = doc(
    firestore,
    `users/${auth.currentUser.uid}/expenses`,
    data.id
  );

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const expenseDeleteHandler = () => {
    deleteDoc(expenseRef)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={isModalOpen}
        onClose={closeModalHandler}
      >
        <Paper
          sx={{
            p: "30px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "400px",
            position: "relative",
          }}
        >
          <Typography variant='h6'>
            Are you sure delete this expense?
          </Typography>
          <Stack sx={{ mt: "25px" }} direction='row' spacing={4}>
            <Button variant='contained' onClick={expenseDeleteHandler}>
              Delete
            </Button>
            <Button onClick={closeModalHandler}>Cancel</Button>
          </Stack>
        </Paper>
      </Modal>
      <Card sx={{ mb: "15px" }}>
        <Grid container sx={{ p: "10px", alignItems: "center" }}>
          <Grid item xs={1}>
            <Avatar>{data.category[0]}</Avatar>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ pl: "25px" }}>{data.value} Ft</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{data.title}</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <IconButton onClick={openModalHandler}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ListItem;
