import React from "react";
// import '../takeNote1/takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import { InputBase } from "@mui/material";

const useStyle = makeStyles({
  takenoteOne:{
    height:'7vh',
    width: '41.5vw',
    position:'relative',
    left:'500px',
    bottom:'20px',
    padding: '6px 15px'
  }
})

function Takenote1(props) {
  
  const classes = useStyle()
  const openNoteTwo = () => {
    props.openNote2()
  }

return(
    <Paper className={classes.takenoteOne} elevation={2}  onClick={openNoteTwo}>
      <InputBase type="text" placeholder="Take a note..."/>
      <div style={{display:'flex', marginTop:'-33px',marginLeft:'400px',justifyContent:"space-between"}}>
      <IconButton>
                <CheckBoxOutlinedIcon />
      </IconButton>
      <IconButton>
                <BrushOutlinedIcon />
      </IconButton>
      <IconButton>
                <InsertPhotoOutlinedIcon />
      </IconButton>
      </div>
    </Paper>
)
}

export default Takenote1