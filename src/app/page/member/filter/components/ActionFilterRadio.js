import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export function ActionFilterRadio({height, options, value, setValue,name,setName,setColor}) {

  let actionTemp = [];
  if (options.length) {
    options.map((option) => {
      actionTemp.push(option);
    });
  }

  const options2 = actionTemp.sort();

  let memberTemp = [];
  let appTemp = [];
  let volunteerTemp = [];
  let webTemp = [];

  options2.map((datum) => {
    switch (datum.charAt(3)) {
      case "A":
        appTemp.push(datum);
        break;
      case "官":
        webTemp.push(datum);
        break;
      case "義":
        volunteerTemp.push(datum);
        break;
      case "黨":
        memberTemp.push(datum);
        break;
    }
  });


  const handleChange = (event) => {
    setValue(event.target.value);
    setName(event.target.name);
  };
  return (
    <>
      <Card raised={true}>
        <CardContent>
          <Typography style={{ height: "30px" }}>各項動作 : {name}</Typography>
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
                {memberTemp.length?(<optgroup label="民眾黨黨員系統" style={{ color: "#B1B4B5" }} />):null}
                {memberTemp?.map((option) => {
                  return (
                    <FormControlLabel
                      value={option}
                      name={option.slice(10)}
                      control={<Radio />}
                      label={option.slice(10)}
                    />
                  );
                })}
                {appTemp.length?(<optgroup label="民眾黨APP" style={{ color: "#B1B4B5" }} />):null}
                {appTemp.map((option) => {
                  return (
                    <FormControlLabel
                      value={option}
                      name={option.slice(9)}
                      control={<Radio />}
                      label={option.slice(9)}
                    />
                  );
                })}
                {volunteerTemp.length?(<optgroup label="民眾黨義工系統" style={{ color: "#B1B4B5" }} />):null}
                {volunteerTemp.map((option) => {
                  return (
                    <FormControlLabel
                      value={option}
                      name={option.slice(10)}
                      control={<Radio />}
                      label={option.slice(10)}
                    />
                  );
                })}
                {webTemp.length?(<optgroup label="民眾黨官網首頁" style={{ color: "#B1B4B5" }} />):null}
                {webTemp.map((option) => {
                  return (
                    <FormControlLabel
                      value={option}
                      name={option.slice(10)}
                      control={<Radio />}
                      label={option.slice(10)}
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
