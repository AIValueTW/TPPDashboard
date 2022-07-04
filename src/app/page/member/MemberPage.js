import React, { useState, useEffect } from "react";
import * as actions from "../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MemberFilters } from "./filter/MemberFilters";
import { MemberActionChart } from "./charts/MemberActionChart";
import { MemberBarChart } from "./charts/MemberBarChart";

export function MemberPage() {
  const [countyCityFilter, setCountyCityFilter] = useState("all");
  const [countyCityName, setCountyCityName] = useState("全部");
  const [actionFilter, setActionFilter] = useState("all");
  const [actionName, setActionName] = useState("全部");
  const [memberNameFilter, setMemberNameFilter] = useState([]);
  const [color,setColor] = useState("all")

  const dispatch = useDispatch();

  const { dashboard1ChartData, dashboard2ChartData,dashboard2_2ChartData } = useSelector(
    (state) => ({
      dashboard1ChartData: state.dashboard.dashboard1ChartData,
      dashboard2ChartData: state.dashboard.dashboard2ChartData,
      dashboard2_2ChartData:state.dashboard.dashboard2_2ChartData
    }),
    shallowEqual
  );
  useEffect(() => {

      if(!memberNameFilter.length){
        dispatch(
        actions.getDashboard2ChartData({
          cityname: countyCityFilter,
          actionname:actionFilter
        })
      );
      }
      else{
        dispatch(
          actions.getDashboard2_2ChartData({
            cityname: countyCityFilter,
            member_name:memberNameFilter
          })
        );
      }
  }, [memberNameFilter,countyCityFilter, actionFilter]);

  return (
    <>
      <Container maxWidth="false" >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
               <MemberBarChart
                testData={dashboard1ChartData?.barchart["整體活躍度"]||{}}
                seriesData={dashboard2ChartData?.barchart || {}}
                countyCity={countyCityName}
                actionName={actionName}
                setMemberNameFilter={setMemberNameFilter}
                setColor={setColor}
              />      
            </Grid>
            <Grid item xs={12} sm={6}>
              <MemberActionChart
                seriesData={dashboard2ChartData?.columnchart || {}}
                seriesData2={dashboard2_2ChartData?dashboard2_2ChartData:dashboard2ChartData?.columnchart||{}}
                memberName={memberNameFilter}
                color={color}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2.3}>
            <MemberFilters
              countyCityFilter={countyCityFilter}
              countyCityName={countyCityName}
              actionFilter={actionFilter}
              actionName={actionName}
              memberNameFilter={memberNameFilter}
              setCountyCityFilter={setCountyCityFilter}
              setCountyCityName={setCountyCityName}
              setActionFilter={setActionFilter}
              setActionName={setActionName}
              setMemberNameFilter={setMemberNameFilter}
              setColor={setColor}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
