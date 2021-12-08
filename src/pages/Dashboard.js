import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateCurrentMonthExpenses } from "../features/balance/balanceSlice";
import ListItem from "../components/List/ListItem";

import { Pie, Bar } from "react-chartjs-2";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { balance, currentMonthExpense } = useSelector(
    (state) => state.balance
  );
  const expenses = useSelector((state) => state.balance.expenses);

  useEffect(() => {
    dispatch(calculateCurrentMonthExpenses());
  }, [dispatch]);
  return (
    <Fragment>
      <Grid sx={{ p: "25px 50px" }} container spacing={3}>
        <Grid container item xs={3} spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Balance' />
              <CardContent>{balance} Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Current Expenses' />
              <CardContent>{currentMonthExpense} Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Current Incomes' />
              <CardContent>3400Ft</CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Bar
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "# of votes",
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                    // {
                    //   label: 'Quantity',
                    //   data: [47, 52, 67, 58, 9, 50],
                    //   backgroundColor: 'orange',
                    //   borderColor: 'red',
                    // },
                  ],
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  legend: {
                    labels: {
                      fontSize: 25,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Pie
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "# of votes",
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                    // {
                    //   label: 'Quantity',
                    //   data: [47, 52, 67, 58, 9, 50],
                    //   backgroundColor: 'orange',
                    //   borderColor: 'red',
                    // },
                  ],
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  legend: {
                    labels: {
                      fontSize: 25,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title='Latest expenses' />
            <CardContent>
              {expenses.map((item) => (
                <ListItem key={item.id} data={item} />
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title='Latest incomes' />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;
