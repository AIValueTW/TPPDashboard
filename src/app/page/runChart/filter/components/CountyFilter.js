import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
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

export function CountyFilter({ countyCity, setCountyCity, setName }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if(value.length>1&&value[0]=="all"){
      setCountyCity(value.slice(1))
      setName("直轄市")
   }
    else if(value[value.length-1]!=="all"){
      setCountyCity(
      typeof value === 'string' ? value.split(',') : value,
    );
    setName(
      typeof value === 'string' ? value.split(',') : value,
    );
    }
    else{
      setCountyCity(
        value.slice(-1)
      );
      setName("直轄市")
    }
  };

  return (
    <Card raised={true}>
      <FormControl sx={{ m: 1, width: "94%" }}>
        <InputLabel id="demo-multiple-checkbox-label">縣市</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={countyCity}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          renderValue={(selected) => selected=="all"?"直轄市":selected.join(", ")}
          MenuProps={MenuProps}
        >
          <optgroup
            label="依直轄市"
            style={{ color: "#B1B4B5", marginLeft: 5 }}
          />
          <MenuItem key={"all"} value={"all"} name={"直轄市"}>
            <Checkbox checked={countyCity.indexOf("all") > -1} />
            <ListItemText primary={"直轄市"} />
          </MenuItem>
          <optgroup
            label="依縣市"
            style={{ color: "#B1B4B5", marginLeft: 5 }}
          />
          {names.map((name) => (
            <MenuItem key={name} value={name} name={name}>
              <Checkbox checked={countyCity.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Card>
  );
}
