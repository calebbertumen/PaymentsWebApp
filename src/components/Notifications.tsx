import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Stack, TextField } from "@mui/material";

export default function Notifications() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
          display="flex"
          sx={{
            py: 2,
            width: { xs: "100", sm: "75%" },
          }}
        >
          {/* Search Bar */}
          <Box height={50} width={500}>
            <TextField fullWidth label="Search" size="small" />
          </Box>

          {/* Delete Button */}
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ pr: 4, width: "100%" }}
          >
            <IconButton aria-label="delete" edge="end">
              <DeleteIcon />
            </IconButton>
          </Box>

          {/* Notification List */}
          <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Box>
    </>
  );
}
