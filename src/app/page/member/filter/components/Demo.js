/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/lab/Autocomplete";

export function Demo() {
  const [val, setVal] = useState([]);
  const [subtype, setSubtype] = useState([]);

  return (
    <div style={{ width: 200 }}>
      <Autocomplete
        id="tags-standard"
        freeSolo
        filterSelectedOptions
        options={DomainOpt}
        onChange={(e, newValue) => {
          if (newValue === null) {
            setVal([]);
            setSubtype([]);
          } else {
              console.log(newValue.value)
            setVal(newValue.value);
            setSubtype([]);
          }
        }}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Type"
            margin="normal"
          />
        )}
      />

      <Autocomplete
        multiple
        id="tags-standard"
        freeSolo
        value={subtype}
        filterSelectedOptions
        options={nobOptions(val)}
        onChange={(e, attr) => setSubtype(attr)}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="SubType"
            margin="normal"
          />
        )}
      />
    </div>
  );
}

const nobOptions = (selectedDomain) => {
  let tempVal = [];
  if (selectedDomain === "Banking")
    tempVal = [
      {
        value: "Corporate Banking",
        label: "Corporate Banking"
      },
      {
        value: "Investment Banking",
        label: "Investment Banking"
      },
      {
        value: "Private Banking",
        label: "Private Banking"
      },
      {
        value: "Retail Banking",
        label: "Retail Banking"
      }
    ];
  else if (selectedDomain === "Central Bank")
    tempVal = [
      {
        value: "Central Bank",
        label: "Central Bank"
      }
    ];
  else
    tempVal = [
      {
        value: "Others",
        label: "Others"
      }
    ];

  return tempVal;
};

let DomainOpt = [
  {
    value: "Banking",
    label: "Banking"
  },
  {
    value: "Central Bank",
    label: "Central Bank"
  },
  {
    value: "Others",
    label: "Others"
  }
];
