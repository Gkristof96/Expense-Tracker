import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ExpensesCard from "../components/ExpensesCard";
import { Pagination } from "@mui/material";

const useStyles = makeStyles({
  form: {
    width: "calc(100% - 30px)",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  sort: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    display: "flex",
    alignItems: "center",
  },
  sortbtn: {
    padding: "5px",
  },

  addbtn: { flexGrow: 0, marginLeft: "20px" },
  expense: { flexGrow: 5, marginRight: "10px" },
  category: { flexGrow: 3, marginRight: "10px" },
  date: { flexGrow: 1 },
  paginate: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
  },
});

const Expenses = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(null);
  const [sort, setSort] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("value:", value, "category: ", category, "Date: ", date);
  };

  const expenses = [
    {
      value: "3400",
      category: "Fun",
      date: new Date(),
      id: 1,
    },
    {
      value: "400",
      category: "Meal",
      date: new Date(),
      id: 2,
    },
    {
      value: "1200",
      category: "Bill",
      date: new Date(),
      id: 3,
    },
  ];

  return (
    <Container>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Add Expenses
      </Typography>
      <form
        onSubmit={submitHandler}
        className={classes.form}
        noValidate
        autoComplete='off'
      >
        <TextField
          variant='outlined'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          label='Value'
          className={`${classes.field} ${classes.expense}`}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            className={`${classes.field} ${classes.category}`}
            variant='outlined'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value=''>
              <em>Groceries</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          className={`${classes.field} ${classes.date}`}
        >
          <DatePicker
            label='Basic example'
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => (
              <TextField variant='outlined' {...params} />
            )}
          />
        </LocalizationProvider>
        <Button
          color='primary'
          size='large'
          className={`${classes.field} ${classes.addbtn}`}
          type='submit'
          variant='contained'
        >
          Add Expense
        </Button>
      </form>
      <div className={classes.sort}>
        <Typography
          variant='h6'
          component='h2'
          gutterBottom
          color='textSecondary'
        >
          Previous Expenses
        </Typography>
        <FormControl variant='standard'>
          <Select
            className={classes.sortbtn}
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value=''>
              <em>Sort</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        {expenses.map((item) => (
          <ExpensesCard key={item.id} expense={item} />
        ))}
      </div>
      <div className={classes.paginate}>
        <Pagination count={10}></Pagination>
      </div>
    </Container>
  );
};

export default Expenses;
