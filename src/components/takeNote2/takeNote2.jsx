import React, { useState } from "react";
import '../takeNote2/takeNote2.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { addNoteApi } from "../../services/dataService";
import ColorPopup from "../colorPoppup/colorPopup";

function Takenote2(props) {

    const [inputValues,setInputValues] = useState({title:'', description:'',color:'',isArchived:false})



    const colorNote= (e) => {
        setInputValues(prevState => ({
            ...prevState,color:e
        }))
    }

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
    const archive =() => {
        setInputValues(prevState => ({
            ...prevState, isArchived:true
        }))
        console.log("Check Archive")
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
        <div className="takenote2" style={{backgroundColor:inputValues.color}}>
            <input type="text" placeholder="Title" name="title" onChange={titleValue} />
            <input className="note" type={'text'} name="content" placeholder="Take a note..." onChange={descValue}/>
            <IconButton type="button" sx={{marginTop:'-230px',marginLeft:'535px' }}>
                <PushPinOutlinedIcon />
            </IconButton>

            <div style={{display:'flex', marginTop:'-50px',marginLeft:'6px'}}>
            <IconButton>
                <AddAlertOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>  
            <IconButton>
                <PersonAddAltOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>  
            <IconButton sx={{marginTop:'1px'}}>
                <ColorPopup colorNote ={colorNote} action= "create" />
            </IconButton>
            <IconButton>
                <ImageOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>
            <IconButton>
                <ArchiveOutlinedIcon sx={{height:'19px'}} onClick={archive}/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>
            <IconButton>
                <UndoOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>
            <IconButton>
                <RedoOutlinedIcon sx={{height:'19px'}}/>
            </IconButton>
            <IconButton type="button" sx={{marginLeft:'180px',fontSize:16,}} 
            onClick={close}
            >Close</IconButton>
            </div>
            
        </div>
    )
}

export default Takenote2