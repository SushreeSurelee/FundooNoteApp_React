import React from "react";
// import '../takeNote3/takeNote3.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ColorPopup from "../colorPoppup/colorPopup";
import { addArchiveApi, trashNoteApi, updateNoteApi } from "../../services/dataService";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Card, InputBase } from "@mui/material";
import { useState } from "react";
import { makeStyles} from "@mui/styles";

const style = {
  width:'557px',
  height:'150px',
  margin:'150px auto 57px auto',
  padding:'7px',
  position:'relative',
  backgroundColor:'#fff'
};
const useStyle = makeStyles({
    takenote3:{
        background: '#fff',
        width: '235px',
        height: '23vh',
        borderRadius: '7px',   
        padding: '10px',
        marginLeft: '23px',
        marginTop:'25px',
    }
})

function Takenote3(props) {
    const classes = useStyle()

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

    const [open, setOpen] = React.useState(false);
    const [updateNote,setUpdateNote] = useState({noteId:'',title:'', description:''})
    const handleOpen = (noteobj) => {
        setUpdateNote({
            noteId:noteobj.id,
            title:noteobj.title,
            description:noteobj.description,
        })
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const takeTitle =(e)=> {
        setUpdateNote((prevstate) => ({
            ...prevstate,title:e.target.value
        }))
    }
    const takeDescription =(e) => {
        setUpdateNote((prevstate) => ({
            ...prevstate,description:e.target.value
        }))
    }
    const close = () => {
        updateNoteApi(updateNote).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <Card className={classes.takenote3} style={{backgroundColor:props.note.color}}>
            <h1 onClick={()=>handleOpen(props.note)} style={{fontSize:'17px'}}>{props.note.title}</h1>
            <p onClick={()=>handleOpen(props.note)}>{props.note.description}</p>

            <div style={{display:'flex', marginLeft:'-10px',marginTop:'1px'}}>
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
            <Modal
            open={open}
            onClose={handleClose}
            >
                <Box sx={style} style={{backgroundColor:props.note.color}}>
                    <div>
                    <InputBase defaultValue={updateNote.title} onChange={takeTitle}/>
                    </div>
                    <InputBase defaultValue={updateNote.description} onChange={takeDescription}/>
                <div style={{display:'flex',marginTop:'32px'}}>
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
                    <IconButton type="button" sx={{marginLeft:'200px',fontSize:16,}} 
                    onClick={close}>Close
                    </IconButton>
                </div>
                </Box>
            </Modal>   
        </Card>
    )
}

export default Takenote3