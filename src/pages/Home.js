import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementBalance,
  decrementBalance,
  calculateCurrentMonthExpenses,
} from "../features/balance/balanceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { balance, currentMonthExpense } = useSelector(
    (state) => state.balance
  );

  const addMoneyHandler = () => {
    dispatch(incrementBalance(100));
  };
  const removeMoneyHandler = () => {
    dispatch(decrementBalance(100));
  };

  useEffect(() => {
    dispatch(calculateCurrentMonthExpenses());
  }, [dispatch]);

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item xs={6} spacing={1}>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Balance' />
              <CardContent>
                {balance} Ft<Button onClick={addMoneyHandler}>Add 100</Button>
                <Button onClick={removeMoneyHandler}>remove 100</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Current Expenses' />
              <CardContent>{currentMonthExpense} Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Current Incomes' />
              <CardContent>3400Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Diagram' />
              <CardContent>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Diagram' />
              <CardContent>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container xs={12} item spacing={1}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Még nem tudom' />
              <CardContent>
                <Typography>3400Ft</Typography>
                <Typography>3400Ft</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
