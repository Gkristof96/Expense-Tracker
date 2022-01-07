import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    margin: "25px 0",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    borderRadius: "10px",
  },
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
      <Stack spacing={3}>
        <TextField
          fullWidth
          variant='outlined'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          label='Value'
        />
        <TextField
          variant='outlined'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          label='Title'
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            label='Category'
            variant='outlined'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value='Groceries'>
              <em>Groceries</em>
            </MenuItem>
            <MenuItem value='Fun'>Fun</MenuItem>
            <MenuItem value='Bill'>Bill</MenuItem>
            <MenuItem value='Tech'>Tech</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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
      </Stack>

      <Button
        fullWidth
        sx={{ mt: "25px" }}
        type='submit'
        color='primary'
        size='large'
        variant='contained'
      >
        Add Expense
      </Button>
    </form>
  );
};

export default NewItemForm;
