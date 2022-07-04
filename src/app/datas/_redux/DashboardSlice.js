import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  actionsLoading: false,
  //NewAPI
  dashboard1ChartData:undefined,
  dashboard2ChartData:undefined,
  dashboard2_2ChartData:undefined,
  dashboard3ChartData:undefined,
  dashboard3_2DateRange:undefined,
  //NewFilterAPI
  dashboard2Filter:[],
  //defTime
  defaultTime:undefined
};
export const callTypes = {
  action: "action",
};

export const DashboardSlice = createSlice({
  name: "dashborad",
  initialState: initialDashboardState,
  reducers: {
    startCall: (state, action) => {
      state.actionsLoading = true;
    },
    //NewAPI
    setDashboard1ChartData: (state, action) => {
      state.dashboard1ChartData = action.payload.dashboard1ChartData;
    },
    setDashboard2ChartData: (state, action) => {
      state.dashboard2ChartData = action.payload.dashboard2ChartData;
    },
    setDashboard2_2ChartData:(state, action) => {
      state.dashboard2_2ChartData = action.payload.dashboard2_2ChartData;
    },
    setDashboard3ChartData: (state, action) => {
      state.dashboard3ChartData = action.payload.dashboard3ChartData;
    },
    setDashboard3_2DateRange: (state, action) => {
      state.dashboard3_2DateRange = action.payload.dashboard3_2DateRange;
    },
    //NewFilterAPI
    setDashboard2Filter: (state, action) => {
      state.dashboard2Filter = action.payload.dashboard2Filter;
    },
    //defTime
    setDefaultTime: (state, action) => {
      state.defaultTime = action.payload.defaultTime;
    },
  },
});
