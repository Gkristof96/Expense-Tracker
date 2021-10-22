import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

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
  value: { flexGrow: 2, marginRight: "10px" },
  title: { flexGrow: 2, marginRight: "10px" },
  category: { flexGrow: 3, marginRight: "10px" },
  date: { flexGrow: 1 },
  addbtn: { flexGrow: 0, marginLeft: "20px" },
});

const NewItemForm = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (value !== "" && category !== "" && date !== "" && title !== "") {
      props.onSubmit({ value, title, category, date });
    }
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
      noValidate
      autoComplete='off'
    >
      <TextField
        variant='outlined'
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label='Value'
        className={classes.value}
      />
      <TextField
        variant='outlined'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        label='Title'
        className={classes.title}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          className={classes.category}
          variant='outlined'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value='Groceries'>
            <em>Groceries</em>
          </MenuItem>
          <MenuItem value='Fun'>Fun</MenuItem>
          <MenuItem value='Bill'>Bill</MenuItem>
          <MenuItem value='Tech'>Tech</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        className={classes.date}
      >
        <DatePicker
          label='Basic example'
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField variant='outlined' {...params} />}
        />
      </LocalizationProvider>
      <Button
        type='submit'
        color='primary'
        size='large'
        className={classes.addbtn}
        variant='contained'
      >
        Add Expense
      </Button>
    </form>
  );
};

export default NewItemForm;
