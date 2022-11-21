import React, { useEffect, useState } from "react";
import MiniDrawer from "../../components/drawer/drawer";
import Header from "../../components/header/Header";
import Takenote1 from "../../components/takeNote1/takeNote1";
import Takenote2 from "../../components/takeNote2/takeNote2";
import Takenote3 from "../../components/takeNote3/takeNote3";
import { getNoteListApi } from "../../services/dataService";
import { makeStyles} from "@mui/styles";
import { Grid } from "@mui/material";

const useStyle = makeStyles({
    note3container:{
    height: 'auto',
    width: '80vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '200px',
    marginTop: '-19px',
    }
})

function Dashbaord () {
    
    const classes = useStyle()
    const[togel,setTogel] = useState(false)
    const[listNote3,setListNote3] = useState([])
    const[drawerTogel,setdrawerTogel] = useState(false)
    const[noteChoice,setNoteChoice] =useState('Notes')

    const openNote2 = () => {
        setTogel(true)
    }

    const openNote1 = () => {
        setTogel(false)
    }

    const listenToHeader =() => {
        setdrawerTogel(!drawerTogel)
    }

    const listenToDrawer = (hover) => {
        setNoteChoice(hover)
    }
    const getNote = () => {
        getNoteListApi().then((response) => {
            let filterNote = [] 
            if(noteChoice==='Notes')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===false && notes.isDeleted===false)
                    return notes
                })
            }
            else if (noteChoice==='Archive')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===true && notes.isDeleted===false)
                    return notes
                })
            }
            else if (noteChoice==='Trash')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===false && notes.isDeleted===true)
                    return notes
                })
            }
            console.log(response)
            setListNote3(filterNote)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getNote()
    },[noteChoice])

    const listenToTakeNoteTwo = () => {
        getNote()
    }

    return(
        <div>
            <Header listenToHeader={listenToHeader}/>
            <MiniDrawer drawerTogel={drawerTogel} listenToDrawer={listenToDrawer}/>
            <div>{
                togel? <Takenote2 openNote1={openNote1} listenToTakeNoteTwo={listenToTakeNoteTwo} /> : <Takenote1 openNote2={openNote2} /> 
                }
            <Grid className={classes.note3container}>
                {
                    listNote3.map((note) => (<Takenote3 note={note} getNote={getNote}/>))
                }
            </Grid>
        </div>
    </div>
    )
}

export default Dashbaord