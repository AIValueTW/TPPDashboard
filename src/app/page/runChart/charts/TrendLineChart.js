import React, { useEffect, useState } from "react";
// import "../../../../../charts/chartsStyle.css";
import Card from "@mui/material/Card";

import Chart from "react-apexcharts";
import { CardContent, Typography } from "@mui/material";
import useWindowDimensions from "../../../components/useWindowDimensions";
// import { getAllChartHeight, getChartHeight, getYAxisSize } from "../../../components/DynamicHeight";

import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { dateISOString } from "../../../datas/components/dateISOString";
// import "../../../../../src/filter.png"

export function TrendLineChart({
  seriesData,
  height,
  countyCityName,
  systemName,
  dateRange,
  setMouseMove
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    if (seriesData.data) {
      setSeries(seriesData.data);
    }
    if (seriesData.date) {
      setCategories(seriesData.date);
    }
    if (seriesData.member) {
      setMember(seriesData.member);
    }
  }, [seriesData]);
console.log(series)
  useEffect(() => {
    setOptions({
      chart: {
        type: "line",
        height: 350,
        offsetY: 10,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        events: {
          mouseMove: function() {
            setMouseMove(true)
          }
        }
      },
      title: {
        text:
          (!systemName.length || systemName == "all"
            ? "整體"
            : systemName + " ") + "成長趨勢圖",
        align: "center",
        offsetX: 5,
        offsetY: -5,
        style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ffffff",
        },
      },
      subtitle: {
        text:
          (dateRange.length >= 2
            ? dateISOString(dateRange[0]) + "～" + dateISOString(dateRange[1])
            : dateRange.length
            ? dateRange
            : "近一週") + " 成長趨勢",
        align: "center",
        offsetY: 38,
        offsetX: 3,
        style: {
          color: "#ffffff",
          fontSize: "18px",
        },
      },
      colors: [
       "#9de0e0","#27c7c7","#f7b756","#fb613b","#bec9c5","#8FBC40","#b37000"
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: "4",
        curve: "smooth",
      },
      grid: {
        borderColor: "#8f8f8f",
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
          // offsetX:3
        },
        // tickAmount: 6,
        axisTicks: {
          offsetY: -1,
        },
      },
      yaxis: {
        labels: {
          show: true,
          // offsetY: 6,
          style: {
            fontSize: "18px",
            colors: "#f0eafb",
          },
        },
        tickAmount: 6,
      },
      tooltip: {
        style: {
          fontSize: "16px",
        },
        y:{
          formatter: function(value) {
            return value.toFixed(0)
          }
        } 
        // y: {
        //   formatter: function (y,opt) {

        //    let yAxisData=opt.series
        //    let yAxisTemp=[]

        //    yAxisData.map((datum)=>{
        //      yAxisTemp.push(datum[opt.dataPointIndex])
        //    })
        //    yAxisTemp.sort(function(a, b) {
        //       return b - a;
        //     })
        //     return yAxisTemp[opt.seriesIndex]
        //   },
        //   title: {
        //     formatter: function (val,w,seriesIndex) {
        //       console.log(w)
        //       var rawData=w.w.globals.initialSeries
        //       let seriesTemp=[]
        //       rawData.map((datum)=>{
        //         seriesTemp.push({name:datum.name,data:datum.data})
        //       })
        //       let titleTemp=sortArray(seriesTemp)

        //       function sortArray(array) {
        //         var temp = 0;
        //         if (array.length > 1)
        //           for (var i = 0; i < array.length; i++) {
        //             for (var j = i; j < array.length; j++) {
        //               if (array[j].data[w.dataPointIndex] > array[i].data[w.dataPointIndex]) {
        //                 temp = array[j];
        //                 array[j] = array[i];
        //                 array[i] = temp;
        //               }
        //             }
        //           }
        //         return array.map(datum=>datum.name);
        //       }  
        //      console.log(titleTemp)
        //      return titleTemp
        //     }
        //   }
        // },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
        offsetY: 10,
        fontSize:"16px",
        labels:{
          colors:["#ffffff"]
        }
      },
    });
  }, [categories, systemName, countyCityName, dateRange]);

  return (
    <>
      <Card raised={true}>
        <CardContent>
          {/* <IconButton aria-label="filter" size="large" sx={{position:"sticky",left:1300}}>
        <FilterAltIcon fontSize="inherit" />
      </IconButton> */}

          {options ? (
            <Chart
              options={options}
              series={series}
              type="line"
              height={height}
              width={"100%"}
            />
          ) : null}
        </CardContent>
      </Card>
    </>
  );
}
