import  React from 'react';
import { useTheme , styled} from '@mui/material/styles';
import Popper from "@mui/material/Popper";
import FormControl from '@mui/material/FormControl';

  import { Autocomplete,   autocompleteClasses, Card,  TextField } from '@mui/material';

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



const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

export function MemberNameFilter({options,personName,
  setPersonName,setColor}) {
  const theme = useTheme();

  let memberTemp=[]
  if(options.length){
    options.map((option)=>{
      memberTemp.push(option)
    })
  }
 const names=memberTemp.sort()
console.log(personName)
  return (
    <Card raised={true}>
      <FormControl sx={{ m: 1, width:"95%" }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        PopperComponent={StyledPopper}
        options={names}
        onChange={(e, value) => {
          setPersonName(value)
          setColor("all")
        }} 
        getOptionLabel={(option) => option}
        filterSelectedOptions
        groupBy={(option) => option[0].toUpperCase()}
        renderInput={(params) => (
          <TextField
            {...params}
            label="黨員"
            placeholder={
              names && names.length > 0
                ? names[0] + "、" + names[1]
                : undefined
            }
          />
        )}    
      />
      </FormControl>
   </Card>
  );
}