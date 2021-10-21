import {
  Container,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List/List";
import NewItemForm from "../components/NewItemForm";

const Incomes = () => {
  const incomes = useSelector((state) => state.balance.incomes);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <Container>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Add Incomes
      </Typography>
      <NewItemForm />
      <List data={incomes} title='Previous Incomes' />
    </Container>
  );
};

export default Incomes;
