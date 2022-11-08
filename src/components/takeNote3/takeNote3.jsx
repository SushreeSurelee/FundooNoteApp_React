import React from "react";
import '../takeNote3/takeNote3.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { sizeHeight } from "@mui/system";


function Takenote3(props) {

    return(
        <div className="takenote3" style={{backgroundColor:props.note.color}}>
            <h1>{props.note.title}</h1>
            <p>{props.note.description}</p>

            <IconButton type="button" sx={{position:'absolute'}}>
                <AddAlertOutlinedIcon sx={{height:'17px'}} />
            </IconButton>
            <IconButton type="button" sx={{position:'absolute',marginLeft:'35px'}}>
                <PersonAddAltOutlinedIcon sx={{height:'18px'}} />
            </IconButton>  
            <IconButton type="button" sx={{position:'absolute',marginLeft:'70px'}}>
                <PaletteOutlinedIcon sx={{height:'18px'}} />
            </IconButton>
            <IconButton type="button" sx={{position:'absolute',marginLeft:'105px'}}>
                <ImageOutlinedIcon sx={{height:'18px'}} />
            </IconButton>
            <IconButton type="button" sx={{position:'absolute',marginLeft:'140px'}}>
                <ArchiveOutlinedIcon sx={{height:'18px'}}/>
            </IconButton>
            <IconButton type="button" sx={{position:'absolute',marginLeft:'175px'}}>
                <MoreVertOutlinedIcon sx={{height:'18px'}}/>
            </IconButton>
        </div>
    )
}

export default Takenote3