import React, { useState, useEffect } from "react";
import * as actions from "../../../datas/_redux/DashboardActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CountyCityFilter } from "./components/CountyCityFilter";
import { MemberNameFilter } from "./components/MemberNameFilter";
import { ActionFilterRadio } from "./components/ActionFilterRadio";
import useWindowDimensions from "../../../components/useWindowDimensions";
import { getFilterHeight } from "../../../components/DynamicHeight";
import { Demo } from "./components/Demo";

export function MemberFilters({
  countyCityFilter,
  countyCityName,
  memberNameFilter,
  actionFilter,
  actionName,
  setCountyCityFilter,
  setCountyCityName,
  setMemberNameFilter,
  setActionFilter,
  setActionName,
  setColor
}) {
  const [filterHeight, setFilterHeight] = useState([]);
  const { height } = useWindowDimensions();
  const chartHeight = 255;

  const dispatch = useDispatch();
  const { dashboard2Filter } = useSelector(
    (state) => ({
      dashboard2Filter: state.dashboard.dashboard2Filter,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      actions.getDashboard2Filter({
        cityname: countyCityFilter,
        member_name:memberNameFilter,
        actionname: actionFilter,
      })
    );
  }, [countyCityFilter,memberNameFilter, actionFilter]);
  useEffect(() => {
    setFilterHeight(getFilterHeight({ chartHeight, height }));
  }, [chartHeight, height]);

  return (
    <Stack spacing={2}>
      <CountyCityFilter
        height={filterHeight}
        options={dashboard2Filter?.city_name || {}}
        value={countyCityFilter}
        setValue={setCountyCityFilter}
        name={countyCityName}
        setName={setCountyCityName}
        setPersonName={setMemberNameFilter}
        setColor={setColor}
      />
      <ActionFilterRadio
        height={filterHeight}
        options={dashboard2Filter?.system_action || {}}
        value={actionFilter}
        setValue={setActionFilter}
        name={actionName}
        setName={setActionName}
      />
      <MemberNameFilter
        options={dashboard2Filter?.member_name || {}}
        personName={memberNameFilter}
        setPersonName={setMemberNameFilter}
        setColor={setColor}
      />
      {/* <Demo/> */}
    </Stack>
  );
}
