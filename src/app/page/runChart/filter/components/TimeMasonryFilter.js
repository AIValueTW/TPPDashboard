import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const ButtonName = [
  { value: "歷年年總分", name: "year" },
  { value:"近三年季總分", name: "quarter" },
  { value:"近一年月總分", name: "nearly_year" },
];
const ButtonName2 = [
  { value: "近一週", name: "nearly_week" },
  { value: "近一個月", name: "nearly_month" },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  //   border: '1px solid black',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '&:hover': {
    backgroundColor: grey[800],
  },
}));

export default function TimeMasonryFilter({
  height,
  value,
  setValue,
  setName,
  setDateRangerFilter,

}) {
  const handleChange = (event) => {
    setValue([event.target.value]);
    setName(event.target.name);
    
    setDateRangerFilter([null,null])
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Masonry columns={2}>
          {ButtonName2.map((name) => (
            <Item key={name.value} sx={{ height: height }}>
              <Button
                onClick={handleChange}
                value={name.value}
                name={name.name}
                variant="text"
                sx={{ height: "100%", width: "100%", fontSize: "22px" }}
                color="inherit"
              >
                {name.value}
              </Button>
            </Item>
          ))}
        </Masonry>
        <Masonry columns={3}>
          {ButtonName.map((name) => (
            <Item key={name.value} sx={{ height: height }}>
              <Button
                onClick={handleChange}
                value={name.value}
                name={name.name}
                variant="text"
                sx={{ height: "100%", width: "100%", fontSize: "17px" }}
                color="inherit"
              >
                {name.value}
              </Button>
            </Item>
          ))}
        </Masonry>
      </Box>
    </>
  );
}
