import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grow, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DateRangeFilter } from "./components/DateRangeFilter";
import TimeMasonryFilter from "./components/TimeMasonryFilter";
import SystemMasonryFilter from "./components/SystemMasonryFilter";
import { getCardHeight, getMasonryHeight } from "../../../components/DynamicHeight";
import useWindowDimensions from "../../../components/useWindowDimensions";
import { CountyFilter } from "./components/CountyFilter";

export function RunChartFilters({
  countyCityFilter,
  systemNameFilter,
  datePickerFilter,
  dateRangeFilter,
  mouseMove,
  setCountyCityFilter,
  setSystemNameFilter,
  setDatePickerFilter,
  setDateRangerFilter,
  setTimeMasonryName,
  setCountyCityName,
  rangerDate,
}) {
  const [masonryHeight, setMasonryHeight] = useState([]);
  const [cardHeight, setCardHeight] = useState([]);
  const [textSize, setTextSize] = useState([]);
  const { height } = useWindowDimensions();

  const chartHeight = 120;
  const chartHeight2 = 300;

  useEffect(() => {
    setMasonryHeight(getMasonryHeight({ chartHeight, height }));
  }, [chartHeight, height]);

  useEffect(() => {
    setCardHeight(getCardHeight({ chartHeight2, height }));
  }, [chartHeight2, height]);

  return (
    <Stack spacing={2}>
      <CountyFilter
        countyCity={countyCityFilter}
        setCountyCity={setCountyCityFilter}
        setName={setCountyCityName}
      />
      <SystemMasonryFilter
        height={masonryHeight}
        value={systemNameFilter}
        setValue={setSystemNameFilter}
      />
      {mouseMove ? (
        <Grow in={true} timeout={900}>
          <Card raised={true} sx={{ height: cardHeight }}>
            <Typography
              sx={{ fontSize: "20px", marginTop: 1, marginLeft: 2 }}
            ></Typography>
            <CardContent>
              <Stack spacing={2} justifyContent="center">
                <TimeMasonryFilter
                  height={masonryHeight}
                  value={datePickerFilter}
                  setValue={setDatePickerFilter}
                  setName={setTimeMasonryName}
                  setDateRangerFilter={setDateRangerFilter}
                />
                <DateRangeFilter
                  value={dateRangeFilter}
                  setValue={setDateRangerFilter}
                  start={rangerDate ? rangerDate.start : []}
                  end={rangerDate ? rangerDate.end : []}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grow>
      ) : null}
    </Stack>
  );
}
