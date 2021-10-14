import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

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
  value: { flexGrow: 6 },
  date: { flexGrow: 6 },
  btn: { flexGrow: 0 },
});

const ExpensesCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <Avatar className={classes.avatar}>{props.expense.category[0]}</Avatar>
        <Typography className={classes.value}>
          {props.expense.value} Ft
        </Typography>
        <Typography className={classes.date}>
          {format(props.expense.date, "do MMMM Y")}
        </Typography>
        <IconButton className={classes.btn}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ExpensesCard;
