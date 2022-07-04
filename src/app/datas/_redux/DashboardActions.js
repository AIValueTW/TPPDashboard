import * as dashboardAPI from "./DashboardCrud.js";
import { DashboardSlice } from "./DashboardSlice";

const { actions } = DashboardSlice;


export const getDashboard1ChartData = () => (dispatch) => {

    return dashboardAPI
      .getDashboard1ChartData() 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard1ChartData({
            dashboard1ChartData: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };

  export const getDashboard2ChartData =
  ({cityname,actionname}) => (dispatch) => {
 
    return dashboardAPI
      .getDashboard2ChartData(cityname,actionname) 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard2ChartData({
            dashboard2ChartData: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };


  export const getDashboard2_2ChartData =
  ({cityname,member_name}) => (dispatch) => {

    return dashboardAPI
      .getDashboard2_2ChartData(cityname,member_name.join()) 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard2_2ChartData({
            dashboard2_2ChartData: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };

  export const getDashboard3ChartData = ({cityname,system}) => (dispatch) => {

    return dashboardAPI
      .getDashboard3ChartData(cityname.join(),system) 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard3ChartData({
            dashboard3ChartData: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };

  export const getDashboard3_2DateRange = ({date,cityname,system,start,end}) => (dispatch) => {
    return dashboardAPI
      .getDashboard3_2DateRange(date,cityname.join(),system,start,end) 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard3_2DateRange({
            dashboard3_2DateRange: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };
  
export const getDashboard2Filter =
  ({cityname,member_name,actionname}) => (dispatch) => {

    return dashboardAPI
      .getDashboard2Filter(
        cityname,member_name,actionname
      ) 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDashboard2Filter({
            dashboard2Filter: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };

  export const getDefaultTime= () => (dispatch) => {

    return dashboardAPI
      .getDefaultTime() 
      .then((res) => {
        const DashboardData = res.data;
        dispatch(
          actions.setDefaultTime({
            defaultTime: DashboardData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });    
  };