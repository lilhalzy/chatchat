import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../Types";

export const defaultUser:userType = {
    id:'',
    username:'',
    email:'',
    isOnline:false,
    creationTime:'',
    img:'',
    lastSeen:'',
    bio:'',
}

const initialState = {
    // users: [],
    currentUser: defaultUser,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action) => {
            // set logged in user
            state.currentUser = action.payload
        },
        setUsers:(state, action) => {
            // set all users
        },
    }
})

export const {setUser, setUsers} = userSlice.actions

export default userSlice.reducer