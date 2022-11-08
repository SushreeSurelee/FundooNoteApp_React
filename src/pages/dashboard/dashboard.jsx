import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Takenote1 from "../../components/takeNote1/takeNote1";
import Takenote2 from "../../components/takeNote2/takeNote2";
import Takenote3 from "../../components/takeNote3/takeNote3";
import { getNoteListApi } from "../../services/dataService";

function Dashbaord () {
    const[togel,setTogel] = useState(false)
    const[listNote3,setListNote3] = useState([])

    const openNote2 = () => {
        setTogel(true)
    }

    const openNote1 = () => {
        setTogel(false)
    }

    useEffect(() => {
        getNoteListApi().then((response) => {
            console.log(response)
            setListNote3(response.data.data.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    return(
        <div>
            <Header/>
            <div>{
                togel? <Takenote2 openNote1={openNote1} /> : <Takenote1 openNote2={openNote2} /> 
                }
            <div style={{height:'70vh',width:'75vw',display:'flex',flexDirection:'row',marginLeft:'200px',marginTop:'-19px', flexwrap:'wrap'}}>
                {
                    listNote3.map((note) => (<Takenote3 note={note}/>))
                }
            </div>
        </div>
    </div>
    )

}

export default Dashbaord