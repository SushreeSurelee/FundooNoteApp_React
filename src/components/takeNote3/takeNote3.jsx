import React from "react";
import '../takeNote3/takeNote3.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopup from "../colorPoppup/colorPopup";


function Takenote3(props) {

    return(
        <div className="takenote3" style={{backgroundColor:props.note.color}}>
            <h1>{props.note.title}</h1>
            <p>{props.note.description}</p>
            <div style={{display:'flex', marginLeft:'-9px',marginTop:'-8px'}}>
            <IconButton>
                <AddAlertOutlinedIcon sx={{height:'17px'}} />
            </IconButton>
            <IconButton>
                <PersonAddAltOutlinedIcon sx={{height:'18px'}} />
            </IconButton>  
            <IconButton>
                 <ColorPopup action="update" id={props.note.id}/>
            </IconButton>
            <IconButton>
                <ImageOutlinedIcon sx={{height:'18px'}} />
            </IconButton>
            <IconButton>
                <ArchiveOutlinedIcon sx={{height:'18px'}}/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon sx={{height:'18px'}}/>
            </IconButton>
            </div>
                 
        </div>
    )
}

export default Takenote3