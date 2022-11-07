import axios from "axios";

const headerConfig = {
    headers: {Authorization:localStorage.getItem('token')}
}

export const addNoteApi = (inputFields) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",inputFields,headerConfig)
    return response
}

export const getNoteListApi = () => {
    let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    return response
}