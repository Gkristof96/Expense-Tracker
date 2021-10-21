import { Container, Typography, makeStyles } from "@material-ui/core";
import List from "../components/List/List";

import { useSelector } from "react-redux";
import NewItemForm from "../components/NewItemForm";

const Expenses = () => {
  const expenses = useSelector((state) => state.balance.expenses);

  /*const submitHandler = (event) => {
    event.preventDefault();
    if (value !== "" && category !== "" && date !== "" && title !== "") {
      dispatch(
        addExpense({
          id: expenses.length,
          title,
          value,
          category,
          date: {
            weekDay: str[0],
            month: str[1],
            day: str[2],
            year: str[3],
          },
        })
      );
    }
  };*/

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
      <NewItemForm />
      <List title='Previous Expenses' data={expenses} />
    </Container>
  );
};

export default Expenses;
