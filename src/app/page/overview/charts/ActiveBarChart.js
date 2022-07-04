import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";

import Chart from "react-apexcharts";
import { CardContent, Typography } from "@mui/material";
import useWindowDimensions from "../../../components/useWindowDimensions";
import { getAllChartHeight, getChartHeight, getYAxisSize } from "../../../components/DynamicHeight";


function getMemberName(data){
  if (data.length) {
    let categoriesTemp=[]
    data.map((datum)=>{
      categoriesTemp.push(datum.member_name)
  })

  console.log(categoriesTemp)
    return categoriesTemp;
   } 
}

export function ActiveBarChart({ seriesData, title, chartHeight,color }) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [chartRHeight, setChartRHeight] = useState([]);
  const [textSize,setTextSize]=useState([])
  const { height } = useWindowDimensions();

  useEffect(() => {
    if(chartHeight<600){
      setChartRHeight(getChartHeight({ chartHeight, height }));
      setTextSize(getYAxisSize(height))
    }else{
      setChartRHeight(getAllChartHeight({ chartHeight, height }))
      setTextSize("18")
    }
    
  }, [chartHeight,height]);

  useEffect(() => {
    if (seriesData.score) {
      setSeries([{ name: title, data: seriesData.score}]);
    }
    if (seriesData.data) {
      setCategories(seriesData.data);
    }
  }, [seriesData]);

  useEffect(() => {
    if(categories.length){
      getMemberName(categories)
      setOptions({
      chart: {
        type: "bar",
        height: 350,
        offsetY:10,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
        },
      },
      title: {
        text: title,
        offsetX: 5,
        offsetY:-5,
        floating: false,
        style: {
          fontSize: "22px",
          fontWeight: "bold",
          // color: "#28c8c8",
          color:"#EEEEEE",
          // color:"#2f2f2f"
        },
      },
      // colors: ["#D9D9D9"],
      colors:[color],
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          distributed: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -33,
        offsetY:9,
        textAnchor: "start",
        style: {
          fontSize: textSize,
          colors: ["#3F3F3F"],
        },
      },
      
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
            "<b>積分</b>：" +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        },
      },
      xaxis: {
        categories: categories,
        labels: {
          hideOverlappingLabels: true,
          style: {
            fontSize: "15px",
            colors: "#f0eafb",
            // colors:color
          },
          offsetY: 5,
         
        },
        tickAmount: 5,
        axisTicks: {
          offsetY: 0,
        },
      },
      yaxis: {
        labels: {
          show: true,
          offsetY: 6,
          style: {
            fontSize: textSize,
            fontWeight: 500,
            colors: "#f0eafb",
            // colors:color
          },
           formatter: function(value) {
            return value.member_name
          }
        },
        
      },
      legend: {
        show: false,
      },
      fill:{
        opacity: 1
      }
    })
    }
    
  }, [categories]);


  return (
    <>
      <Card raised={true} >
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
