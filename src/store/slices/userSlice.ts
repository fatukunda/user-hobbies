import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserHobbiesModel, IUserHobby } from "../../models"

const initialState: UserHobbiesModel = {
    userHobbies: [],
    selectedUser: {
        id: null,
        name: '',
        hobbies: []
    }
}

export const userSlice = createSlice({
    name: 'userHobbies',
    initialState,
    reducers: {
        setUsers: (state, { payload }: PayloadAction<IUserHobby[]>) => {
            state.userHobbies = payload
        },
        setSelectedUser: (state, { payload }: PayloadAction<IUserHobby>) => {
            state.selectedUser = payload
        }
    }
})

export const { setUsers, setSelectedUser } = userSlice.actions

