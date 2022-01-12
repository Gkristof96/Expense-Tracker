import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "20px",
  },
  cardcontent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: { flexGrow: 4 },
});

const ListItem = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
        <Typography className={classes.value}>{data.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default ListItem;
