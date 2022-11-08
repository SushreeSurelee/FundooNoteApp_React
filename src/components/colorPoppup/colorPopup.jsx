import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

export default function ColorPopup(props) {
    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  const [anchorEl, setAnchorEl] = React.useState(null);

  const applyColor = (colour) => {
    props.colorNote(colour)
  }
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconButton type="button" sx={{ marginTop:'-75px' ,marginLeft:'5px'}} 
      onClick={handleClick}>
                <PaletteOutlinedIcon sx={{height:'19px'}}/>
        </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:'flex', flexDirection:'row' }}>
          {
            colors.map((color) => (
                <div style={{height:25,width:25,backgroundColor:color,border:'1px solid red', borderRadius:50, marginRight:'5px'}} onClick={() => applyColor(color)}></div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}