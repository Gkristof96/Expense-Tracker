import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeExpense } from "../features/balance/balanceSlice";

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
  },
  cardcontent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: { flexGrow: 0, marginRight: "15px" },
  title: { flexGrow: 4 },
  value: { flexGrow: 4 },
  date: { flexGrow: 4 },
  btn: { flexGrow: 0 },
});

const ExpensesCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeExpenseHandler = () => {
    dispatch(removeExpense(props.expense.id));
  };
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <Avatar className={classes.avatar}>{props.expense.category[0]}</Avatar>
        <Typography className={classes.title}>{props.expense.title}</Typography>
        <Typography className={classes.value}>
          {props.expense.value} Ft
        </Typography>
        <Typography className={classes.date}>
          {`${props.expense.date.day} ${props.expense.date.year} ${props.expense.date.month}`}
        </Typography>
        <IconButton className={classes.btn}>
          <DeleteIcon onClick={removeExpenseHandler} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ExpensesCard;
