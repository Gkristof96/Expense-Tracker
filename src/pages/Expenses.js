import {
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Modal,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import List from "../components/list/List";
import NewItemForm from "../components/list/NewItemForm";
import CloseIcon from "@mui/icons-material/Close";

const ExpensesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
          <NewItemForm />
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
          <FormControl variant='standard' sx={{ width: "100px" }}>
            <Select>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <List></List>
      </Paper>
    </Container>
  );
};

export default ExpensesPage;
