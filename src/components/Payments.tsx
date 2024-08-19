import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ImageIcon from "@mui/icons-material/Image";
import TextField from "@mui/material/TextField";
import { Box, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Payments() {
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        display="flex"
        sx={{ py: 2 }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            py: 2,
            width: { sm: "100", md: "70%" },
          }}
        >
          {/* Search Bar */}
          <Box height={50} width={500}>
            <TextField fullWidth label="Search" size="small" />
          </Box>
          
          {/* Payments List */}
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component={"span"} id="nested-list-subheader">
                1 January 2024
              </ListSubheader>
            }
          >
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary="Target" />
              <ListItemText primary="$24.90" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary="Daiso" />
              <ListItemText primary="$12.77" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary="Safeway" />
              <ListItemText primary="$58.21" />
            </ListItemButton>
            <Divider />
          </List>
        </Stack>
      </Box>
    </>
  );
}
