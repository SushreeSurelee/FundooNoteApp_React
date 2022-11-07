import React, { useState } from "react";
import '../takeNote2/takeNote2.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Button } from "@mui/material";
import { addNoteApi } from "../../services/dataService";

function Takenote2(props) {

    const [inputValues,setInputValues] = useState({title:'', description:''})


    const titleValue = (e) => {
        setInputValues(prevState => ({
            ...prevState ,
            title:e.target.value
        }))
    }

    const descValue = (e) => {
        setInputValues(prevState => ({
            ...prevState ,
            description:e.target.value
        }))
    }
    
    console.log(inputValues, "checking input")

    const close = () => {
        props.openNote1()
        addNoteApi(inputValues).then((response) =>{
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="takenote2">
            <form>
            <input type="text" placeholder="Title" name="title" onChange={titleValue} />
            <div>
                <input className="note" type={'text'} name="content" placeholder="Take a note..." onChange={descValue}/>
            </div>
            </form>
            <IconButton type="button" sx={{ marginTop:-21.3 ,marginLeft:53}}>
                <AddAlertOutlinedIcon />
            </IconButton>  
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <PersonAddAltOutlinedIcon />
            </IconButton>  
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <PaletteOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <ImageOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <MoreVertOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <UndoOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <RedoOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginLeft: 16,marginTop:-21,fontSize:16,}} 
            onClick={close}
            >Close</IconButton>
        </div>
    )
}

export default Takenote2