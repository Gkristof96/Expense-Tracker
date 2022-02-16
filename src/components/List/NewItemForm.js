import { LocalizationProvider, DatePicker, LoadingButton } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  //Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  form: {
    margin: "25px 0",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    borderRadius: "10px",
  },
});

const NewItemForm = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const ItemSchema = Yup.object().shape({
    value: Yup.string().required("Values is required"),
    title: Yup.string()
      .required("Title is required")
      .max(32, "Title is too long"),
    category: Yup.string().required("Category is required"),
  });

  const formik = useFormik({
    initialValues: {
      value: "",
      title: "",
      category: "",
      date: new Date(),
    },
    validationSchema: ItemSchema,
    onSubmit: () => {
      /*dispatch(
        saveExpenseData({
          value: values.value,
          title: values.title,
          category: values.category,
          //expenseDate: values.date,
          //createdAt: serverTimestamp(),
        })
      );*/
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form
        className={classes.form}
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete='value'
            type='text'
            label='Value'
            {...getFieldProps("value")}
            error={Boolean(touched.value && errors.value)}
            helperText={touched.value && errors.value}
          />
          <TextField
            fullWidth
            autoComplete='title'
            type='text'
            label='Title'
            {...getFieldProps("title")}
            error={Boolean(touched.title && errors.title)}
            helperText={touched.title && errors.title}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} error>
            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              autoComplete='category'
              {...getFieldProps("category")}
              error={Boolean(touched.category && errors.category)}
            >
              <MenuItem value='Groceries'>Groceries</MenuItem>
              <MenuItem value='Fun'>Fun</MenuItem>
              <MenuItem value='Bill'>Bill</MenuItem>
              <MenuItem value='Tech'>Tech</MenuItem>
            </Select>
            {Boolean(touched.category) && (
              <FormHelperText>{errors.category}</FormHelperText>
            )}
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Basic example'
              {...getFieldProps("date")}
              autoComplete='date'
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>

        <LoadingButton
          fullWidth
          sx={{ mt: "25px" }}
          type='submit'
          color='primary'
          size='large'
          variant='contained'
          loading={isSubmitting}
        >
          Add Expense
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default NewItemForm;
