import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import { addWeeks } from 'date-fns';


export function DateRangeFilter({value, setValue,start,end}) {

  return (
    // <Card raised={true}>
    //  <CardContent >
     <>
    <LocalizationProvider dateAdapter={AdapterDateFns}   >
      <DateRangePicker
        startText="起始日期"
        endText="結束日期"
        value={value}
        // maxDate={getWeeksAfter(value[0], 4)}
        minDate={new Date(start)}
        maxDate={new Date(end)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    </>  
    //  </CardContent> 
    // </Card>
  );
}




