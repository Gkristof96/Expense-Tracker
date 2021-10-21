import { Container, Typography } from "@material-ui/core";
import List from "../components/List/List";

import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../features/balance/balanceSlice";
import NewItemForm from "../components/NewItemForm";

const Expenses = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.balance.expenses);

  const addNewExpense = (expenseData) => {
    const str = String(expenseData.date).slice(0, 15).split(" ");
    const expensesLength = expenses.length;
    console.log(expensesLength);
    dispatch(
      addExpense({
        id: expensesLength > 0 ? expenses[expensesLength - 1].id + 1 : 0,
        title: expenseData.title,
        value: expenseData.value,
        category: expenseData.category,
        date: {
          weekDay: str[0],
          month: str[1],
          day: str[2],
          year: str[3],
        },
      })
    );
  };

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
      <NewItemForm onSubmit={addNewExpense} />
      <List title='Previous Expenses' data={expenses} />
    </Container>
  );
};

export default Expenses;
