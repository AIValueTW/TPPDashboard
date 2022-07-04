import React, { useEffect, useState } from "react";
// import "../../../../../charts/chartsStyle.css";
import Card from "@mui/material/Card";

import Chart from "react-apexcharts";
import { CardContent, Typography } from "@mui/material";
import useWindowDimensions from "../../../components/useWindowDimensions";
import { getD2ChartHeight } from "../../../components/DynamicHeight";

import { RiVipCrownFill } from "react-icons/ri";
import crownIcon from "../../../../../src/crownIcon.png"
// import { getAllChartHeight, getChartHeight, getYAxisSize } from "../../../components/DynamicHeight";

export function MemberBarChart({
  testData,
  seriesData,
  countyCity,
  actionName,
  setMemberNameFilter,
  setColor
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [memberAccount, setMemberAccount] = useState([]);
  const [chartRHeight, setChartRHeight] = useState([]);
  const [textSize, setTextSize] = useState([]);
  const { height } = useWindowDimensions();
  const chartHeight = 800;

  useEffect(() => {
    setChartRHeight(getD2ChartHeight({ chartHeight, height }));
  }, [chartHeight, height]);

  useEffect(() => {
    if (seriesData.score) {
      setSeries([{ name: "積分", data: seriesData.score }]);
    }
    if (seriesData.data) {
      setCategories(seriesData.data);
    }
    if (testData.account) {
      setMemberAccount(testData.account);
    }
  }, [testData, seriesData, actionName]);
  console.log(!categories.length);
  useEffect(() => {
    if (categories.length) {
      setOptions({
        chart: {
          type: "bar",
          height: 350,
          offsetY: 10,
          toolbar: {
            show: false,
          },
          events: {
            dataPointSelection: function (event, chartContext, config) {
              var yIndex = config.selectedDataPoints[0][0];
              let colorsTemp = config.w.config.colors
              let memberTemp = [];
              if (config.selectedDataPoints[0].length) {
                memberTemp.push(categories[yIndex].member_name);
                setMemberNameFilter(memberTemp);
                setColor(colorsTemp[yIndex])
              }
            },
          },
        },
        title: {
          text: "黨員排行榜",
          offsetX: 5,
          offsetY: -5,
          style: {
            fontSize: "28px",
            fontWeight: "bold",
            color: "#ffffff",
          },
        },
        subtitle: {
          text: "縣市：" + countyCity,
          offsetY: 38,
          offsetX: 3,
          style: {
            color: "#ffffff",
            fontSize: "18px",
          },
        },
        // tooltip:{
        //   style:{
        //     fontSize:"16px"
        //   },
        //   x:{
        //     formatter:function(value){
        //       return value+"的【"+actionName+"】動作"
        //     },
        //   },
        // },

        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.labels[dataPointIndex];

            return (
              '<div class="arrow_box">' +
              "<span>" +
              "<b>黨員</b>：" +
              data.member_name +
              "<br/>" +
              "<b>帳號</b>：" +
              data.account +
              "<br/>" +
              "<b>地區</b>：" +
              data.county_city +
              "<br/>" +
              "<hr/>" +
              "<b>動作</b>：" +
              actionName +
              "<br/>" +
              "<b>積分</b>：" +
              series[seriesIndex][dataPointIndex] +
              "</span>" +
              "</div>"
            );
          },
        },

        // colors: ["#28AFC0","#56A9BB","#81BEBF","#2C6779","#5CB3C4","#9E9E9E","#4A7A78","#3E7A87"],
        colors: [
          "#9de0e0",
          "#27c7c7",
          "#f7b756",
          "#f39f5f",
          "#bec9c5",
          "#f5c855",
          "#f8e191",
          "#fb613b",
        ],
        plotOptions: {
          bar: {
            // borderRadius: 4,
            columnWidth: "45%",
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          // offsetX: -35,
          // offsetY:1,

          style: {
            fontSize: "18px",
            colors: ["#ffffff"],
          },
          formatter: function (val, opt) {
            
            console.log(opt.dataPointIndex===0);
            if (opt.w.globals.labels[opt.dataPointIndex]&&opt.dataPointIndex===0){
              return (
                "No." +
                (opt.dataPointIndex + 1) +
                " " +
                opt.w.globals.labels[opt.dataPointIndex].member_name +
                "：" +
                val +
                // " 👑"
                // " 👍"
                " 🏆"
                // " 🥇"
              );
            }
            else if(opt.w.globals.labels[opt.dataPointIndex])
            {
              return (
                "No." +
                (opt.dataPointIndex + 1) +
                " " +
                opt.w.globals.labels[opt.dataPointIndex].member_name +
                "：" +
                val
              );
            }  
          },
          dropShadow: {
            enabled: true,
          },
        },

        xaxis: {
          categories: categories,
          labels: {
            hideOverlappingLabels: true,
            style: {
              fontSize: "15px",
              colors: "#f0eafb",
            },
            offsetY: 6,
          },
          tickAmount: 6,
          axisTicks: {
            offsetY: -1,
          },
        },
        yaxis: {
          labels: {
            show: false,
            offsetY: 6,
            style: {
              fontSize: "18px",
              colors: "#f0eafb",
            },
          },
        },
        legend: {
          show: false,
        },
        states: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: "darken",
            value: 1,
          },
        },
      });
    }
  }, [categories, countyCity, actionName]);

  return (
    <>
      <Card raised={true}>
        <CardContent>
          {options ? (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={chartRHeight}
              width={"100%"}
            />
          ) : null}
        </CardContent>
      </Card>
    </>
  );
}
