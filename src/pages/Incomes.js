import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../features/balance/balanceSlice";
import List from "../components/List/List";
import NewItemForm from "../components/NewItemForm";

const Incomes = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.balance.incomes);

  const addNewIncome = (incomeData) => {
    const str = String(incomeData.date).slice(0, 15).split(" ");
    const incomesLength = incomes.length;
    dispatch(
      addIncome({
        id: incomesLength > 0 ? incomes[incomesLength - 1].id + 1 : 0,
        title: incomeData.title,
        value: incomeData.value,
        category: incomeData.category,
        date: {
          weekday: str[0],
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
        Add Incomes
      </Typography>
      <NewItemForm onSubmit={addNewIncome} />
      <List data={incomes} title='Previous Incomes' />
    </Container>
  );
};

export default Incomes;
