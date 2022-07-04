import React from "react";

import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MemberPage } from "./page/member/MemberPage";
import { OverviewPage } from "./page/overview/OverviewPage";
import { RunChartPage } from "./page/runChart/RunChartPage";
import { MaterialThemeProvider } from "./layout/MaterialThemeProvider";
import { CssBaseline } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs({store}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Provider store={store}>
      <AppBar
        sx={{ bgcolor: "#3B597D" }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab sx={{fontSize:"20px"}} label="總覽" {...a11yProps(0)} />
          <Tab sx={{fontSize:"20px"}} label="個人積分排行" {...a11yProps(1)} />
          <Tab sx={{fontSize:"20px"}} label="趨勢圖" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <MaterialThemeProvider>
        <CssBaseline/>
      <TabPanel value={value} index={0}>
        <OverviewPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MemberPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RunChartPage/>
      </TabPanel>
      </MaterialThemeProvider>
      </Provider>
  );
}
