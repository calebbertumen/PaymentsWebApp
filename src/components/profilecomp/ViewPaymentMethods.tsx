import { Button, Divider, Grid, Typography } from "@mui/material";

function ViewPaymentMethods() {
  return (
    <>
      {/* Card Info View */}
      <Grid container sx={{ py: 1, width: 1400 }}>
        <Grid item xs={8}>
          <Typography>Credit Card</Typography>
          <Typography>xxxx 0123</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">Edit</Button>
          <Button variant="text">Delete</Button>
        </Grid>
      </Grid>
      <Divider />

      {/* Card Info View */}
      <Grid container sx={{ py: 1, width: 1400 }}>
        <Grid item xs={8}>
          <Typography>Credit Card</Typography>
          <Typography>xxxx 0123</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="text">Edit</Button>
          <Button variant="text">Delete</Button>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default ViewPaymentMethods;
