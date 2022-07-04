import React from "react";

import { Provider } from "react-redux";
import { styled } from '@mui/system';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { MemberPage } from "./page/member/MemberPage";
import { OverviewPage } from "./page/overview/OverviewPage";
import { RunChartPage } from "./page/runChart/RunChartPage";
import { MaterialThemeProvider } from "./layout/MaterialThemeProvider";
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { CssBaseline } from "@mui/material";

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 21px;
  font-weight: 500;
  background-color: transparent;
  width: 10%;
  padding: 12px 10px;
  margin: 0px 0px;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #4d74a3;
    font-weight: 600;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fd633c;
    color: #fff;
    font-weight: 600;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 10px 5px;
  margin: 10px 0px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 100%;
  background-color: #3b597d;
  border-radius: 0px;
  margin-bottom: 19px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;


export default function SimpleTabs({store}) {

  return (
    <Provider store={store}>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          
          <Tab >總覽</Tab>
          <Tab >個人積分排行</Tab>
          <Tab  >趨勢圖</Tab>
        </TabsList>

      <MaterialThemeProvider>
        <CssBaseline/>
      <TabPanel value={0} >
        <OverviewPage />
      </TabPanel>
      <TabPanel value={1} >
        <MemberPage />
      </TabPanel>
      <TabPanel value={2} >
        <RunChartPage/>
      </TabPanel>
      </MaterialThemeProvider>
      </TabsUnstyled>
      </Provider>
  );
}
