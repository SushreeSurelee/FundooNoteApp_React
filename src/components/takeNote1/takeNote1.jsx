import React from "react";
import '../takeNote1/takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

function Takenote1(props) {
  
  const openNoteTwo = () => {
    props.openNote2()
  }

return(
    <div className="takenote1" onClick={openNoteTwo}>
      <input type="text" placeholder="Take a note..." />

      <IconButton type="button" sx={{ marginTop:-8.5 ,marginLeft:112}}>
                <CheckBoxOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ marginTop:-14.2 ,marginLeft:118}}>
                <BrushOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ marginTop:-20.5 ,marginLeft:124}}>
                <InsertPhotoOutlinedIcon />
      </IconButton>
    </div>
)
}

export default Takenote1