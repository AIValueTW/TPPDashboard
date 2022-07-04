import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export function CountyCityFilter({ height,options,value, setValue,name,setName ,setPersonName,setColor}) {
  
  const countyCity = options.length?options:[
    "基隆市",
    "台北市",
    "新北市",
    "新竹市",
    "新竹縣",
    "苗栗縣",
    "桃園市",  
    "雲林縣",
    "嘉義市",
    "嘉義縣",
    "南投縣",
    "台中市",
    "彰化縣",
    "台南市",
    "高雄市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "台東縣",
    "澎湖縣",   
    "金門縣",
    "連江縣",
  ];
  // useEffect(() => {
  //   setOptions(getCountyCityFilterOptions());
  // }, [filteredData]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setName(event.target.name);
    setPersonName([])
    setColor("all")
  };
  return (
    <>
      <Card raised={true}>
        <CardContent>
          <Typography style={{ height: "30px" }}>縣市 : {name}</Typography>
          <Typography style={{ height: height, overflow: "auto" }}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="all"
                  name="全部"
                  control={<Radio />}
                  label="全部"
                />
                {countyCity.map((option) => {
                  return (
                    <FormControlLabel
                      value={option}
                      name={option}
                      control={<Radio color="primary" />}
                      label={option}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
