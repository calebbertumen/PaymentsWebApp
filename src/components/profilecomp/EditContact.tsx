import { Avatar, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Stack from "@mui/material/Stack";

function EditContact() {
  return (
    <Grid container rowSpacing={8} columnSpacing={5}>
      {/* Profile Picture */}
      <Grid container alignItems="center" justifyContent="center" xs={3}>
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: { sm: 100, md: 150 }, height: { sm: 100, md: 150 } }}
        />
      </Grid>

      <Grid container xs={9} rowSpacing={5} columnSpacing={5}>
        {/* First Name Field */}
        <Grid xs={5}>
          <Stack spacing={1}>
            <Typography variant="overline" display="block">
              First Name
            </Typography>
            <TextField
              disabled
              hiddenLabel
              fullWidth
              id="filled-hidden-label-small-full-width"
              variant="filled"
              size="small"
              defaultValue="Caleb"
            />
          </Stack>
        </Grid>

        {/* Last Name Field */}
        <Grid xs={5}>
          <Stack spacing={1}>
            <Typography variant="overline" display="block">
              Last Name
            </Typography>
            <TextField
              disabled
              hiddenLabel
              fullWidth
              id="filled-hidden-label-small-full-width"
              variant="filled"
              size="small"
              defaultValue="Bertumen"
            />
          </Stack>
        </Grid>

        {/* Email Field */}
        <Grid xs={5}>
          <Stack spacing={1}>
            <Typography variant="overline" display="block">
              Email
            </Typography>
            <TextField
              disabled
              hiddenLabel
              fullWidth
              id="filled-hidden-label-small-full-width"
              variant="filled"
              size="small"
              defaultValue="calebbertumen@example.com"
            />
          </Stack>
        </Grid>

        {/* Mobile Phone # Field */}
        <Grid xs={5}>
          <Stack spacing={1}>
            <Typography variant="overline" display="block">
              Mobile Phone #
            </Typography>
            <TextField
              disabled
              hiddenLabel
              fullWidth
              id="filled-hidden-label-small-full-width"
              variant="filled"
              size="small"
              defaultValue="0123456789"
            />
          </Stack>
        </Grid>
      </Grid>

      {/* Street Address Field */}
      <Grid xs={5}>
        <Stack spacing={2}>
          <Typography variant="overline" display="block">
            Street Address
          </Typography>
          <TextField
            disabled
            hiddenLabel
            fullWidth
            id="filled-hidden-label-small-full-width"
            variant="filled"
            size="small"
            defaultValue="123 Street"
          />
        </Stack>
      </Grid>

      {/* City Address Field */}
      <Grid xs={5}>
        <Stack spacing={2}>
          <Typography variant="overline" display="block">
            City
          </Typography>
          <TextField
            disabled
            hiddenLabel
            fullWidth
            id="filled-hidden-label-small-full-width"
            variant="filled"
            size="small"
            defaultValue="New York"
          />
        </Stack>
      </Grid>

      {/* State  Field */}
      <Grid xs={5}>
        <Stack spacing={2}>
          <Typography variant="overline" display="block">
            State
          </Typography>
          <TextField
            disabled
            hiddenLabel
            fullWidth
            id="filled-hidden-label-small-full-width"
            variant="filled"
            size="small"
            defaultValue="NY"
          />
        </Stack>
      </Grid>

      {/* Zip Code Field */}
      <Grid xs={5}>
        <Stack spacing={2}>
          <Typography variant="overline" display="block">
            Zip Code
          </Typography>
          <TextField
            disabled
            hiddenLabel
            fullWidth
            id="filled-hidden-label-small-full-width"
            variant="filled"
            size="small"
            defaultValue="12345"
          />
        </Stack>
      </Grid>

      {/* Edit Button */}
      <Grid container xs={9.5} justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}

export default EditContact;
