import axios from "axios";
import { dateISOString } from "../components/dateISOString";

// const ip = "http://35.194.136.138:5002";
const ip = "https://member-dashboard.tpp.org.tw/api";

export const getDashboard1ChartData = () => {
  let data = axios.get(
    ip + "/dashboard_1_api/"
  );
  return data;
};

export const getDashboard2ChartData = (cityname, actionname) => {
  let data = axios.get(
    ip +
      "/dashboard_2_1_api/?cityname=" +
      cityname +
      "&system_action=" +
      actionname
  );
  return data;
};

export const getDashboard2_2ChartData = (cityname, member_name) => {
  console.log(cityname, member_name);
  let data = axios.get(
    ip +
      "/dashboard_2_2_api/?cityname=" +
      cityname +
      "&member_name=" +
      member_name
  );
  return data;
};

export const getDashboard2Filter = (cityname, member_name, actionname) => {
  var memberName = !member_name.length ? "all" : member_name.join();

  let data = axios.get(
    ip +
      "/dashboard_2_filter_api/?cityname=" +
      cityname +
      "&member_name=" +
      memberName +
      "&system_action=" +
      actionname
  );
  return data;
};

export const getDashboard3ChartData = (cityname, system) => {
  var cityName = !cityname.length ? "all" : cityname;

  let data = axios.get(
    ip + "/dashboard_3_1_api/?cityname=" + cityName + "&system=" + system
  );
  return data;
};



export const getDashboard3_2DateRange = (date,cityname, system, start, end) => {
  var cityName = !cityname.length ? "all" : cityname;
  let data={}

  if (start == null || end == null) {
    start = dateISOString(start);
    end = dateISOString(end);
     data = axios.get(
      ip +
      "/dashboard_3_"+
      date+
      "_api/?cityname=" +
      cityName +
      "&system=" +
      system
    );
  } else {
    start = dateISOString(start);
    end = dateISOString(end);
     data = axios.get(
      ip +
         "/dashboard_3_date_api/?cityname=" +
        cityName +
        "&system=" +
        system +
        "&start=" +
        start +
        "&end=" +
        end
    );
  }
  return data;
};

export const getDefaultTime = () => {
  let data = axios.get(
    "https://member-dashboard.tpp.org.tw/api/start_end/"
  );
  return data;
};