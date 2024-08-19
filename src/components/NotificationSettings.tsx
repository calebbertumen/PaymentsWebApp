import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid } from "@mui/material";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData("Payment Made", 159, 6.0),
  createData("Payment Modified", 237, 9.0),
  createData("Payment Method Updated", 262, 16.0),
  createData("Payment Method Added", 262, 16.0),
  createData("Payment Method Removed", 262, 16.0),
  createData("Contact Info Updated", 262, 16.0),
];

function NotificationSettings() {
  return (
    <>
      <Container sx={{ py: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1 }} aria-label="notification settings">
            <TableHead>
              <TableRow>
                <TableCell>Notfications</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">App</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container justifyContent="flex-end" sx={{ pr: 5, py: 3 }}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Container>
    </>
  );
}
export default NotificationSettings;
