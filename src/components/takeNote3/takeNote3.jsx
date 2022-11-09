import React from "react";
import '../takeNote3/takeNote3.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ColorPopup from "../colorPoppup/colorPopup";
import { addArchiveApi, trashNoteApi } from "../../services/dataService";


function Takenote3(props) {

    const updateArchive = (id) => {
        let archiveObj = {noteIdList:[id],isArchived:true} 
        console.log(archiveObj)

        addArchiveApi(archiveObj).then((response) =>{
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const trash =(id) => {
        let trashObj = {noteIdList:[id],isDeleted:true}

        trashNoteApi(trashObj).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

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
                <DeleteOutlinedIcon sx={{height:'18px'}} onClick={() => trash(props.note.id)}/>
            </IconButton>
            <IconButton>
                <ArchiveOutlinedIcon sx={{height:'18px'}} onClick={() => updateArchive(props.note.id)}/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon sx={{height:'18px'}}/>
            </IconButton>
            </div>
                 
        </div>
    )
}

export default Takenote3