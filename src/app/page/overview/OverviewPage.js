import React, { useState, useEffect } from "react";
import *　as actions from "../../datas/_redux/DashboardActions"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { ActiveCard } from "./charts/ActiveCard";
import { ActiveBarChart } from "./charts/ActiveBarChart";


export function OverviewPage() {

 const dispatch = useDispatch();
 
 const{dashboard1ChartData}=useSelector(
   (state)=>({
    dashboard1ChartData: state.dashboard.dashboard1ChartData,
   }),
   shallowEqual
 )
 useEffect(()=>{
   dispatch(actions.getDashboard1ChartData())
 },[])

  return (
    <>
      <Container maxWidth="false" >
        <Grid
          container
          direction="column"
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
            <Grid item xs={12} sm={3}>
              <ActiveCard data={dashboard1ChartData?.card["民眾黨官網首頁"]||{}} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ActiveCard data={dashboard1ChartData?.card["民眾黨APP"]||{}} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ActiveCard data={dashboard1ChartData?.card["民眾黨義工系統"]||{}} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ActiveCard data={dashboard1ChartData?.card["民眾黨黨員系統"]||{}} />
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <ActiveBarChart
                seriesData={dashboard1ChartData?.barchart["整體活躍度"]||{}}
                title={"整體活躍度"}
                chartHeight={646}
                color={"#cae0ff"}
              />
            </Grid>
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
                <ActiveBarChart
                  seriesData={dashboard1ChartData?.barchart["民眾黨官網首頁"]||{}}
                  title={"官網活躍度"}
                  chartHeight={287}
                  color={"#f8a2a2"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <ActiveBarChart
                  seriesData={dashboard1ChartData?.barchart["民眾黨APP"]||{}}
                  title={"APP活躍度"}
                  chartHeight={287}
                  color={"#f39f5f"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ActiveBarChart
                  seriesData={dashboard1ChartData?.barchart["民眾黨義工系統"]||{}}
                  title={"義工系統 黨員活躍度"}
                  chartHeight={287}
                  color={"#ebeba4"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <ActiveBarChart
                  seriesData={dashboard1ChartData?.barchart["民眾黨黨員系統"]||{}}
                  title={"黨員系統 黨員活躍度"}
                  chartHeight={287}
                  color={"#ffd15d"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
