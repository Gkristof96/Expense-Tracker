import {
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { firestore, auth } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import SearchIcon from "@mui/icons-material/Search";
import List from "../components/list/List";
import NewItemForm from "../components/list/NewItemForm";
import CloseIcon from "@mui/icons-material/Close";

const ExpensesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const expensesRef = collection(
    firestore,
    `users/${auth.currentUser.uid}/expenses`
  );

  useEffect(() => {
    onSnapshot(expensesRef, (snapshot) => {
      setExpenses(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // eslint-disable-next-line
  }, []);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={modalOpen}
        onClose={closeModalHandler}
      >
        <Paper sx={{ p: "30px 40px", width: "400px", position: "relative" }}>
          <Typography variant='h6'>Add new expense</Typography>
          <IconButton
            sx={{ position: "absolute", top: "25px", right: "25px" }}
            onClick={closeModalHandler}
          >
            <CloseIcon />
          </IconButton>
          <NewItemForm onClick={closeModalHandler} />
        </Paper>
      </Modal>
      <Box
        sx={{
          m: "25px 0",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant='h4'>Expenses</Typography>
        <Button variant='contained' onClick={openModalHandler}>
          New Expense
        </Button>
      </Box>
      <Paper sx={{ p: " 10px 25px" }}>
        <Box
          sx={{
            m: "25px 0",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TextField
            placeholder='Search expenses'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <List items={expenses} />
      </Paper>
    </Container>
  );
};

export default ExpensesPage;
