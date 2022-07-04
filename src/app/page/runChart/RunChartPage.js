import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { RunChartFilters } from "./filter/RunChartFilters";
import { ActiveColumnChart } from "./charts/ActiveColumnChart";

import { TrendLineChart } from "./charts/TrendLineChart";
import useWindowDimensions from "../../components/useWindowDimensions";
import { getD3ChartHeight } from "../../components/DynamicHeight";
import { dateISOString } from "../../datas/components/dateISOString";

export function RunChartPage() {
const [countyCityFilter, setCountyCityFilter] = useState(["all"]); 
const [systemNameFilter, setSystemNameFilter] = useState("all");
const [datePickerFilter, setDatePickerFilter] = useState([]);
const [dateRangeFilter, setDateRangerFilter] = useState([null, null]);
const [timeMasonryName,setTimeMasonryName]=useState("nearly_week")
const [countyCityName, setCountyCityName] = useState("直轄市"); 
const [systemName, setSystemName] = useState("整體");
const [datePickerName, setDatePickerName] = useState([]);

const [mouseMove, setMouseMove] = useState(false);

const [chartHeight, setChartHeight] = useState([]);

const { height } = useWindowDimensions()
const dfHeight=370
useEffect(() => {
  setChartHeight(getD3ChartHeight({ dfHeight, height }))
}, [dfHeight,height]);

const dispatch = useDispatch();

const{dashboard3ChartData,dashboard3_2DateRange,defaultTime}=useSelector(
  (state)=>({
   dashboard3ChartData: state.dashboard.dashboard3ChartData,
   dashboard3_2DateRange:state.dashboard.dashboard3_2DateRange,
   defaultTime:state.dashboard.defaultTime
  }),
  shallowEqual
)
useEffect(()=>{
  dispatch(actions.getDefaultTime())
},[])

useEffect(()=>{
  dispatch(actions.getDashboard3ChartData({
    cityname: countyCityFilter,
    system:systemNameFilter
  }))
},[countyCityFilter,systemNameFilter])

useEffect(()=>{
   dispatch(actions.getDashboard3_2DateRange({
    date:timeMasonryName,
    cityname: countyCityFilter,
    system:systemNameFilter,
    start:dateRangeFilter[0],
    end:dateRangeFilter[1]
  }))
  
},[timeMasonryName,countyCityFilter,systemNameFilter,dateRangeFilter])

  return (
    <>
  
        <Container maxWidth="false">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={9}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
              <ActiveColumnChart seriesData={dashboard3ChartData?dashboard3ChartData:{}} height={chartHeight} countyCityName={countyCityFilter} systemName={systemNameFilter}/>
              </Grid>
              <Grid item xs={12} sm={12}>
              <TrendLineChart seriesData={dashboard3_2DateRange?dashboard3_2DateRange:{}} height={chartHeight} countyCityName={countyCityFilter} systemName={systemNameFilter} dateRange={dateRangeFilter[0]==null||dateRangeFilter[1]==null?datePickerFilter:dateRangeFilter} setMouseMove={setMouseMove}/>
              </Grid>
           
            </Grid>
            <Grid item xs={12} sm={3} >
              <RunChartFilters
              countyCityFilter={countyCityFilter}
              systemNameFilter={systemNameFilter}
              datePickerFilter={datePickerFilter}
              dateRangeFilter={dateRangeFilter}
              countyCityName={countyCityName}
              systemName={systemName}
              datePickerName={datePickerName}
              mouseMove={mouseMove}
              setCountyCityFilter={setCountyCityFilter}
              setSystemNameFilter={setSystemNameFilter}
              setDatePickerFilter={setDatePickerFilter}
              setDateRangerFilter={setDateRangerFilter}
              setTimeMasonryName={setTimeMasonryName}
              setCountyCityName={setCountyCityName}
              setSystemName={setSystemName}
              setDatePickerName={setDatePickerName}
              setMouseMove={setMouseMove}
              rangerDate={defaultTime?defaultTime:{}}
              />
            </Grid>
          </Grid>
        </Container>

    </>
  );
}
