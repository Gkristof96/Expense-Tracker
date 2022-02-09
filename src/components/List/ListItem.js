import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
  Modal,
  Paper,
  Stack,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { firestore, auth } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
  cardcontent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: { flexGrow: 4 },
});

const ListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();

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

  console.log(data);
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
            width: "400px",
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
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <Avatar>{data.category[0]}</Avatar>
          <Typography>{data.value}</Typography>
          <Typography>{data.title}</Typography>
          <IconButton>
            <DeleteIcon onClick={openModalHandler} />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default ListItem;
