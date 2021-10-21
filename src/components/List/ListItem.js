import {
  Avatar,
  Card,
  CardContent,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../features/balance/balanceSlice";

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

const ListItem = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeExpenseHandler = () => {
    dispatch(removeExpense(data.id));
  };
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <Avatar className={classes.avatar}>{data.category[0]}</Avatar>
        <Typography className={classes.value}>{data.value} Ft</Typography>
        <Typography className={classes.title}>{data.title}</Typography>
        <Typography className={classes.date}>
          {`${data.date.day} ${data.date.year} ${data.date.month}`}
        </Typography>
        <IconButton className={classes.btn}>
          <DeleteIcon onClick={removeExpenseHandler} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ListItem;
