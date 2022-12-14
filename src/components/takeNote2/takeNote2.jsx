import React, { useState } from "react";
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
import { Box, InputBase } from "@mui/material";
import Paper from '@mui/material/Paper';
import { makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    takenote2:{
        width: '557px',
        height: '120px',
        margin: '-20px auto 57px auto',
        background: '#fff',
        padding: '7px',
        position: 'relative',
        left: '115px'
       },
       icons:{
        display:'flex', 
        marginTop:'-30px',
        marginLeft:'3px'
       },
       ['@media screen and (min-width:421px) and (max-width : 768px)']:{
        takenote2:{
        width: '30%',
        height: '50%'
        }
      }
})

function Takenote2(props) {
    const classes = useStyle()

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

    const close = () => {
        props.openNote1()
        addNoteApi(inputValues).then((response) =>{
            console.log(response);
            props.listenToTakeNoteTwo()
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <Paper className={classes.takenote2} elevation={2} style={{backgroundColor:inputValues.color}}>
            <Box>
            <InputBase type="text" placeholder="Title" name="title" onChange={titleValue}/>
            </Box>
            <InputBase style={{marginTop:'10px'}}
            type={'text'} name="content" placeholder="Take a note..." onChange={descValue}/>

            <IconButton sx={{marginTop:'-150px',marginLeft:'505px' }}>
                <PushPinOutlinedIcon />
            </IconButton>

            <Box className={classes.icons}>
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
            <IconButton sx={{marginLeft:'165px',fontSize:16,}} 
            onClick={close}
            >Close</IconButton>
            </Box>
            
        </Paper>
    )
}

export default Takenote2