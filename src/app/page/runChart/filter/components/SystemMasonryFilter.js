import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { Button, Grid, Stack } from "@mui/material";

const ButtonName = ["全部系統"];
const ButtonName2 = [
  {name:"民眾黨官網首頁",color:"#154858"},
  {name:"民眾黨APP",color:"#276072"},
  {name:"民眾黨義工系統",color:"#398ba5"},
  {name:"民眾黨黨員系統",color:"#4bb7d9"}
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  //   border: '1px solid black',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function SystemMasonryFilter({ height, value, setValue }) {

  const handleChange = (event) => {
    setValue([event.target.value]);
  };

  return (
        <>
    <Box sx={{ width: "100%" ,marginLeft:1}}  >
        <Masonry  columns={1} >
          {ButtonName.map((name) => (

            <Item  sx={{height:height-20}}>
               <Button onClick={handleChange} value="all" variant="text" sx={{height:"100%",width:"100%",fontSize:"22px"}} color="inherit">
             {name}
             </Button>
            </Item>

          ))}
        </Masonry>
        <Masonry  columns={2}>
          {ButtonName2.map((datum) => (

           <Item sx={{height:height-30}}>
           <Button onClick={handleChange} value={datum.name} variant="text" sx={{height:"100%",width:"100%",fontSize:"20px"}} color="inherit">
      {datum.name}
         </Button>
        </Item>
          ))}
        </Masonry>
      </Box>
      </>
  );
}
