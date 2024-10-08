import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

//Profile Components
import ViewContact from "./profilecomp/ViewContact";
import ViewPaymentMethods from "./profilecomp/ViewPaymentMethods";

//Tab Functions
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box sx={{ p: 3 }}>{children}</Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

//Profile Function
export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          py: 3,
          flexGrow: 1,
          display: "flex",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Contact" {...a11yProps(0)} />
          <Tab label="Payment Methods" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ViewContact />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ViewPaymentMethods />
        </TabPanel>
      </Box>
    </>
  );
}
