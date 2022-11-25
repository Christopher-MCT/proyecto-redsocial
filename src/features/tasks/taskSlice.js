import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Tarea de prueba",
        description: "Ejemplo de la tarea", 
        completed: false
    }
]


export const taskSlice = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {

    }
})

export default taskSlice.reducer