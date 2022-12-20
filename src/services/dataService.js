import axios from "axios";

const headerConfig = {
    // headers: {Authorization:localStorage.getItem('token')}
    headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}
}

export const addNoteApi = (inputFields) => {
    // let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",inputFields,headerConfig)
    let response = axios.post("https://localhost:44396/api/Note/Create",inputFields,headerConfig)
    console.log("response" ,response)
    return response; 
}

export const getNoteListApi = () => {
    // let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    let response = axios.get("https://localhost:44396/api/Note/GetNote",headerConfig)
    console.log("response" ,response)
    return response;
}

export const addColorApi =(colorObj) => {
    console.log("colours",colorObj)
    // let response =axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",colorObj,headerConfig)
    let response =axios.put("https://localhost:44396/api/Note/Colour",{params:colorObj},headerConfig)
    return response;
}

export const addArchiveApi =(archiveObj) =>{
    // let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",archiveObj,headerConfig)
    let response= axios.put(`https://localhost:44396/api/Note/Archive?noteId=${archiveObj}`,archiveObj,headerConfig)
    return response;
}

export const trashNoteApi =(trashObj) =>{
    console.log(trashObj)
    // let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",trashObj,headerConfig)
    let response = axios.put(`https://localhost:44396/api/Note/Trash?noteId=${trashObj}`,trashObj,headerConfig)
    return response;
}

export const updateNoteApi = (inputvalue4) => {
    // let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",inputvalue4,headerConfig)
    let response = axios.put("https://localhost:44396/api/Note/Update",inputvalue4,headerConfig)
    return response;
}