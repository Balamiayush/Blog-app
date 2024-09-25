import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    status:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true
            state.userData = action.payload.userData
        },
        logout:(state,action)=>{
            state.status = false
            state.userData = null
        }
    }
})
export const {login, logout} = authSlice.actions;
export default authSlice.reducer