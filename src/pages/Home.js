import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item xs={6} spacing={1}>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Balance' />
              <CardContent>3400Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Expenses' />
              <CardContent>3400Ft</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title='Incomes' />
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
