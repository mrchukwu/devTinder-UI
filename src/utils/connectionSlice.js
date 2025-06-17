import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "conection",
    initialState: null,
    reducers: {
        addConections: (state, action) =>{
            return action.payload;
        },

        removeConnections: () => null,
    }
})

export const {addConections} = connectionSlice.actions;
export default connectionSlice.reducer