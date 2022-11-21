import axios from "axios";

const headerConfig = {
    headers: {Authorization:localStorage.getItem('token')}
}

export const addNoteApi = (inputFields) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",inputFields,headerConfig)
    //https://localhost:44396/api/Note/Create
    return response; 
}

export const getNoteListApi = () => {
    let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    //https://localhost:44396/api/Note/GetNote
    return response;
}

export const addColorApi =(inputFields1) => {
    let response =axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",inputFields1,headerConfig)
    //https://localhost:44396/api/Note/Colour
    return response;
}

export const addArchiveApi =(inputValue2) =>{
    let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",inputValue2,headerConfig)
    //https://localhost:44396/api/Note/Archive
    return response;
}

export const trashNoteApi =(inputValue3) =>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",inputValue3,headerConfig)
    //https://localhost:44396/api/Note/Trash
    return response;
}

export const updateNoteApi = (inputvalue4) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",inputvalue4,headerConfig)
    //https://localhost:44396/api/Note/Update
    return response;
}