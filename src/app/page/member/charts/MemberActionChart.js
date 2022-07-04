import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import Chart from "react-apexcharts";
import { CardContent } from "@mui/material";
import useWindowDimensions from "../../../components/useWindowDimensions";
import { getD2ChartHeight } from "../../../components/DynamicHeight";

export function MemberActionChart({ seriesData, seriesData2, memberName, color }) {
  const [options, setOptions] = useState(null);
  const [chartRHeight, setChartRHeight] = useState([]);
  const { height } = useWindowDimensions();
  const [series2, setSeries2] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [member2, setMember2] = useState([]);
  const chartHeight = 800;

  useEffect(() => {
    setChartRHeight(getD2ChartHeight({ chartHeight, height }));
  }, [chartHeight, height]);

  useEffect(() => {
    let seriesData2Temp = [];
    if (memberName.length) {
      for (const key in seriesData2) {
        seriesData2Temp.push(seriesData2[key]);
      }
    } else {
      seriesData2Temp = seriesData;
    }

    if (seriesData2Temp.length) {
      let seriesTemp = [];
      let memberTemp = [];

      seriesData2Temp.map((datum) => {
        seriesTemp.push({
          name: datum.member_name + "的積分",
          data: datum.score,
        });
        memberTemp.push(datum.member_name);
      });

      setSeries2(seriesTemp);
      setMember2(memberTemp.join("、"));
      setCategories2(seriesData2Temp[0].system_action);
    } else if (seriesData2Temp) {
      setSeries2([
        {
          name: seriesData2Temp.member_name + "的積分",
          data: seriesData.score,
        },
      ]);
      setCategories2(seriesData.system_action);
      setMember2(seriesData.member_name);
    }
  }, [seriesData, seriesData2]);

  function categoriesSplit(categories) {
    let categoriesTemp = [];
    if (categories.length) {
      categories.map((datum) => {
        categoriesTemp.push(datum.split("-"));
      });
    }

    return categoriesTemp;
  }

  useEffect(() => {
    setOptions({
      chart: {
        type: "bar",
        height: 350,
        offsetY: 10,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
        },
      },
      title: {
        text: "黨員各項動作積分",
        offsetX: 5,
        offsetY: -5,
        style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ffffff",
        },
      },
      subtitle: {
        text: "黨員：" + member2,
        offsetY: 38,
        offsetX: 3,
        style: {
          color: "#ffffff",
          fontSize: "18px",
        },
      },
      colors: color==="all"?([
        "#9de0e0",
        "#27c7c7",
        "#f7b756",
        "#f39f5f",
        "#bec9c5",
        "#f5c855",
        "#f8e191",
        "#fb613b",
      ]):(color),
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "45%",
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

        // dropShadow: {
        //   enabled: true,
        // },
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
      },
      xaxis: {
        categories: categoriesSplit(categories2 ? categories2 : []),
        labels: {
          hideOverlappingLabels: true,
          rotate: -35,
          rotateAlways: false,
          style: {
            fontSize: "15px",
            colors: "#f0eafb",
          },
          offsetY: 6,
          offsetX: 0,
        },
        // tickAmount: 6,
        axisTicks: {
          offsetY: -1,
        },
      },
      yaxis: {
        labels: {
          show: true,
          offsetY: 6,
          style: {
            fontSize: "18px",
            colors: "#f0eafb",
          },
        },
        tickAmount: 6,
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
    });
  }, [member2, categories2]);

  return (
    <>
      <Card raised={true}>
        <CardContent>
          {options ? (
            <Chart
              options={options}
              series={series2}
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
