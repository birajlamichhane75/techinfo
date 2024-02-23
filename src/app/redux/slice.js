import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    User: [],
}


const Slice = createSlice({
    name: "login",
    initialState,
    reducers: {
        adduser: (state, action) => {
            console.log(action)
            const userData = {
                id: nanoid(),
                name: action.payload
            }
            state.User.push(userData)

        }
    }
})

export const { adduser } = Slice.actions
export default Slice.reducer