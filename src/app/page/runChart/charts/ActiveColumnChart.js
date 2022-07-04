import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import Chart from "react-apexcharts";
import { CardContent } from "@mui/material";

export function ActiveColumnChart({ seriesData ,height,countyCityName,systemName}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(null);
  const [categories, setCategories] = useState([]);
  const [member,setMember] = useState([])

  useEffect(() => {
    if (seriesData.data) {
      setSeries(seriesData.data);
    }
    if (seriesData.city_name) {
      setCategories(seriesData.city_name);
    }
    if (seriesData.member) {
      setMember(seriesData.member);
    }
  }, [seriesData]);
console.log(countyCityName)
  useEffect(() => {
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
        text:(!systemName.length||systemName=="all"?"整體":systemName+" ")+"活躍度比較圖",
        align: 'center',
        offsetX: 5,
        offsetY:-5,
        style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ffffff",
        },
      },
      subtitle:{
        text:"縣市："+(!countyCityName.length||countyCityName=="all"?"台北市、新北市、桃園市、台中市、台南市、高雄市":countyCityName.join('、')),
        align: 'center',
        offsetY:38,
        offsetX:3,
        style:{
          color:"#ffffff",
          fontSize:"18px"
        }
      },
      colors: ["#f1eada","#f5c855","#27c7c7"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: "14px",
          colors: ["#ffffff"],
        },
        offsetY:-20
      },
      tooltip:{
        style:{
          fontSize:"16px"
        },
        y:{
          formatter: function(value) {
            return value.toFixed(0)
          }
        } 
      },
      xaxis: {
        categories: categories,
        labels: {
          hideOverlappingLabels: true,
          style: {
            fontSize: "15px",
            colors: "#f0eafb",
          },
          // offsetY: 6,
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
      fill: {
        opacity: 1
      },
      legend: {
        show: false,
      },
    });
  }, [categories,systemName,countyCityName]);


  return (
    <>
      <Card raised={true} >
        <CardContent>
          {options ? (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={height}
              width={"100%"}
            />
          ) : null}
        </CardContent>
      </Card>
    </>
  );
}
