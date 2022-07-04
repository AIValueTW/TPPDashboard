import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';



export function ActiveCard({data}) {

  return (
    <>
     
          <Card raised={true}>

            <CardContent style={{backgroundColor:"#28c8c8",height:"140px"}}>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{fontWeight:"bold",color:"#ffffff"}}
                gutterBottom
              >
                <div >{data.system} 活躍度</div>
           
               <div> {data.score}</div>
              </Typography>
              <Typography variant="h5" component="div" style={{fontWeight:"bold",color:"#2F3D41"}}>
                月成長 {data.m_growth}
              </Typography>
            </CardContent>
          </Card>
       

    </>
  );
}
